import { ExperienceType as ExperienceProps } from "./types";

import { PropsWithChildren } from "react";



export default function Experience(props: PropsWithChildren<ExperienceProps>) {
  const { children } = props;

  return (
    <li>
      {children} 
    </li>
  );
}
