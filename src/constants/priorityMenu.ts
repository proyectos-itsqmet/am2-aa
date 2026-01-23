import { PriorityType } from "../types/PriorityType";
import { Colors } from "./colors";

export const priorityMenu: PriorityType[] = [
  {
    priority: "Alta",
    backgroundColor: Colors.redLight,
    borderColor: Colors.red,
  },
  {
    priority: "Media",
    backgroundColor: Colors.orangeLight,
    borderColor: Colors.orange,
  },
  {
    priority: "Baja",
    backgroundColor: Colors.blueLight,
    borderColor: Colors.blue,
  },
];
