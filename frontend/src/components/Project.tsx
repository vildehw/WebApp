
import { ProjectType as ProjectProps} from "./types";
import { PropsWithChildren } from "react";


export default function Project(props: PropsWithChildren<ProjectProps>) {
const { children } = props;
  return (
  <section>
    {children}
  </section>
  )
}
