
export type ExperienceType = {
    name?: string
}


export type StudentType = {
    name: string;
    degree: string;
    points: number;
    email: string;
    experiences: ExperienceType[];
  };
  
  
export type ProjectType = {
    title?: string; 
  };
  