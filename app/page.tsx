import sections from "@/data/sections.json";
import { Section } from "@/types/types";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Student Task Assignment</h1>
      <p>Select a section to view assigned tasks:</p>
      <ul className="list-disc list-inside">
        {(sections as Section[]).map((s) => (
          <li key={s.id}>
            <Link href={`/sections/${s.id}`} className="text-blue-600 underline">
              {s.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
