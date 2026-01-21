export type ToDoType = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
  completedAt?: Date;
  priority?: "Baja" | "Media" | "Alta";
};
