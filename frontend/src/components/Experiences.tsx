import Experience from "./Experience";
import { StudentType } from "./types";

type ExperiencesProps = {
    student: StudentType; 
  };

export default function Experiences({student}: ExperiencesProps) {
    const { experiences } = student; 
    return (
        <>
        <h2>My Experiences</h2>
        <div id="experience_container">
            {experiences.length > 0 ? (
                <ul id="experiences_list">
                    {experiences.map((experience, index) => (
                        <Experience key={index}>{experience.name}</Experience>
            ))}
                </ul>
            ) : (
                <p>Ingen erfaringer</p>
            )}
        </div>
        </>
    );
}
