export type Task = {
  id: string;
  title: string;
  description: string;
};

export const sharedInstruction = `
Each project must:
- Use clean folder structure (MVC / layered).
- Use interfaces where applicable.
- Use EF Core Code-First with DbContext.
- Include MVC Identity (passwords: at least 2 uppercase, 3 numbers, 3 symbols).
- Push code to GitHub repo (no ZIP uploads, no bulk uploads).
- Use GitHub project for commit tracking.
- Each commit must include a maximum of at least 5 files only.
- Live debugging will be conducted on presentation day.
`;


export const tasks: Task[] = [
  { id: "f5b0d55e-91df-4d77-8baf-6a1c8c1d5f01", title: "Student Quiz System", description: "Roles: Admin creates quizzes, Students take them. Track scores and leaderboard." },
  { id: "a90d27c2-9238-4ad5-9c9e-48a6af29e49c", title: "Mini Forum", description: "Users create posts and comments. Moderators delete inappropriate posts." },
  { id: "b72ef0d1-9abf-48b6-9e5a-43704e7c8ab9", title: "Event RSVP System", description: "Create events with capacity. Users RSVP; event closes when full." },
  { id: "4f2c3131-9f4a-4fa2-a5d6-9646fa1aeb8f", title: "Budget Tracker", description: "Categorize expenses by type. Generate monthly reports." },
  { id: "cb47f621-805a-4d35-bf4a-ec74b3e28d40", title: "Habit Tracker", description: "Users define daily habits. Track streaks and progress charts." },
  { id: "91d90b95-44cb-44c3-9e12-6d046c31576b", title: "Fitness Log", description: "Log workouts (exercise, reps, duration). Export history to CSV." },
  { id: "ec84dd2f-cf6a-4f6c-b2ad-6c4c7139fae7", title: "Book Review Wall", description: "Users add books + reviews. Rating average per book." },
  { id: "d20748fb-3dd1-44d2-a8c1-86af739865f3", title: "Recipe Sharing App", description: "Share recipes with tags. Like/upvote recipes." },
  { id: "ae67a4fb-8c57-45b9-81f1-49d435a3ac07", title: "Volunteer Hours Tracker", description: "Users log hours worked. Show top volunteers." },
  { id: "12a6c0f8-3a4e-45d4-8338-c8f3e61a2cd3", title: "Mini Polling App", description: "Create polls with options. Users vote once per poll." },
  { id: "8f909ea1-2877-4032-a7c9-b9cb7c5e2a6a", title: "Class Attendance", description: "Teachers log attendance. Attendance percentage per student." },
  { id: "c590c81c-74b6-4f0a-82d0-33248295cf1a", title: "Task Manager", description: "Tasks with priority and due date. Kanban board (To-Do, Doing, Done)." },
  { id: "88e8c882-849d-41e7-82a3-64d5d1b6e987", title: "Pet Adoption Portal", description: "Post adoptable pets. Track adoption status." },
  { id: "e7f9da92-8d9a-46c2-b6f2-8f7b515826a5", title: "Simple Marketplace", description: "Users post items for sale. Buyers mark interest." },
  { id: "7a6c88c2-65b6-4950-86fa-16f3f0c6ef72", title: "Daily Journal", description: "Private journal per user. Search entries by date." },
  { id: "62b7aa93-9b54-44b8-8cf6-6a502b3d7c1e", title: "Mini Blogging Platform", description: "Users write posts. Commenting system." },
  { id: "ad1b8490-6c17-4d34-9c97-b5b674bb8a72", title: "Trivia Game", description: "Random quiz questions. High score leaderboard." },
  { id: "08f67a1d-21c4-4c7e-83e1-8ef8b0c7e21c", title: "Simple Chatboard", description: "Public message board. Basic moderation tools." },
  { id: "4a62a0c5-73f0-48f0-8f52-b1f51e7a9af8", title: "Flashcard Study Tool", description: "Create flashcards. Review mode + quiz mode." },
  { id: "31a4b9b6-3d11-42f9-8904-2f0a3a6b7c01", title: "Donation Tracker", description: "Users log donations. Total donations report." },
  { id: "7d3a1d56-0215-4496-88f0-cf9df5b8c7d1", title: "Online Voting for Awards", description: "Awards with nominees. One vote per user." },
  { id: "ac9e1b21-07df-4571-8b25-40a6db35b517", title: "Bug Reporting System", description: "Submit bug reports. Admin marks status." },
  { id: "e24f9c2f-4f27-4ec1-8f53-8db57230a932", title: "Mini Job Board", description: "Employers post jobs. Users apply." },
  { id: "1b6df8f3-df4a-4d97-9e1b-12bdf4e19a21", title: "Student Gradebook", description: "Teachers assign grades. Students view them." },
  { id: "2bca37b2-3489-4d5e-9b3c-91d5f5f3a728", title: "Gaming Leaderboard", description: "Users submit game scores. Rankings per game." },
  { id: "6d4c37e9-812f-4038-b58a-d8ef0d1f29b3", title: "Q&A Board", description: "Post questions. Others answer + upvote." },
  { id: "32ec13f7-0c4a-4c3a-9e17-15c3af5a9df0", title: "Event Photo Gallery", description: "Upload event photos. Tag and filter by event." },
  { id: "0d873c2a-2a43-4e8b-a1f0-d8d52a21c93f", title: "E-Voting for Student Council", description: "Election setup by Admin. One vote per candidate." },
  { id: "e18f7f2b-24c9-4a5e-9f5a-21d7e9a8e15c", title: "Book Swap Hub", description: "Post books for swap. Request to trade." },
  { id: "d7cfa72d-16d5-4a39-b73b-d0b23f9e91e7", title: "Mini Survey App", description: "Users create surveys. Collect and chart responses." },
];
