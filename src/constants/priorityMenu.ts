import { PriorityType } from "../types/PriorityType";
import { Colors } from "./colors";

export const priorityMenu: PriorityType[] = [
  {
    priority: "Alta",
    type: "alta",
    backgroundColor: Colors.redLight,
    borderColor: Colors.red,
  },
  {
    priority: "Media",
    type: "media",
    backgroundColor: Colors.orangeLight,
    borderColor: Colors.orange,
  },
  {
    priority: "Baja",
    type: "baja",
    backgroundColor: Colors.blueLight,
    borderColor: Colors.blue,
  },
];
