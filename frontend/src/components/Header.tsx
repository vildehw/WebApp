// Header.tsx
import { StudentType } from "./types";

type HeaderProps = {
  student: StudentType;
};

export default function Header({ student }: HeaderProps) {
  return (
    <>
    <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About me</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
    <header>
        <h1>Portfolio</h1>
        <ul id="header_info">
        <li>{student.name} | </li>
        <li>{student.degree} | </li>
        <li>{student.points} poeng</li>
        </ul>
    </header>
    </>
  );
}
