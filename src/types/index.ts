export type Course = {
  name: string;
  id: string;
  image: string;
  bgColor: string;
  tags: string[];
};

export type GetCoursesResponse = Course[];
