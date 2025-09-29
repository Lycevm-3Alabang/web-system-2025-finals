import { tasks, sharedInstruction, Task } from "@/data/tasks";
import sections from "@/data/sections.json";
import type { Student, Section } from "@/types/types";


// Deterministic pseudo-random generator (Mulberry32)
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Convert a string (like sectionId+studentId) to a numeric seed
function hashStringToSeed(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

export default function SectionPage({
  params,
}: {
  params: { sectionId: string };
}) {
  const section = (sections as Section[]).find(
    (s) => s.id === params.sectionId
  );

  if (!section) {
    return (
      <div className="flex h-screen items-center justify-center text-gray-500">
        Section not found.
      </div>
    );
  }

  const students = section.students;

  type Assignment = {
  student: Student;
  task: Task;
};

const assignments: Assignment[] = students.map((s: Student) => {
  const seed = hashStringToSeed(section.id + s.student_id);
  const rand = mulberry32(seed)();
  const taskIndex = Math.floor(rand * tasks.length);
  const task = tasks[taskIndex];
  return { student: s, task };
});


  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        {/* Header */}
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">
            Section {section.name}
          </h1>
          <p className="text-gray-500">ID: {section.id}</p>
        </header>

        {/* Instructions */}
        <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-indigo-600">📌</span> Common Instruction
          </h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap text-sm">
            {sharedInstruction}
          </p>
        </section>

        {/* Assignments Table */}
        <section className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 text-gray-700 text-left">
                <tr>
                  <th className="px-6 py-3 font-semibold">Student ID</th>
                  <th className="px-6 py-3 font-semibold">Student Name</th>
                  <th className="px-6 py-3 font-semibold">Task</th>
                  <th className="px-6 py-3 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {assignments.map((a: Assignment, idx: number) => (
                  <tr
                    key={idx}
                    className={`${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-indigo-50 transition`}
                  >
                    <td className="px-6 py-3 border-t">{a.student.student_id}</td>
                    <td className="px-6 py-3 border-t">{a.student.name}</td>
                    <td className="px-6 py-3 border-t font-medium text-indigo-700">
                      {a.task.title}
                    </td>
                    <td className="px-6 py-3 border-t text-gray-600">
                      {a.task.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
