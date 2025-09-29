export type Student = {
  student_id: string;
  name: string;
};

export type Section = {
  id: string;
  name: string;
  students: Student[];
};