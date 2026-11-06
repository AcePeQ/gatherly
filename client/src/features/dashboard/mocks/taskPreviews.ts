import type { TaskPreview } from "../types/taskPreview";

export const taskPreviewsMock: TaskPreview[] = [
  {
    id: 1,
    title: "Book the apartment",
    tripName: "Weekend in Gdansk",
    deadline: "2027-04-10",
    isDone: false,
  },
  {
    id: 2,
    title: "Buy train tickets",
    tripName: "Weekend in Gdansk",
    deadline: "2027-04-12",
    isDone: false,
  },
  {
    id: 3,
    title: "Prepare the packing list",
    tripName: "Weekend in Gdansk",
    deadline: "2027-04-20",
    isDone: true,
  },
];
