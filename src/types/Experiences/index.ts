import { IconBaseProps } from "react-icons";

export type ExperiencesType = {
  company: string;
  initialDate: string;
  finalDate: string;
  role: string;
  description?: string;
  stack: React.ComponentType<IconBaseProps>[];
};
