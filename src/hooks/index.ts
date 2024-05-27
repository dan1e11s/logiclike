import { useMemo } from 'react';
import { Course } from '../types';

const useUniqueTags = (courses: Course[]): string[] => {
  const uniqueTags = useMemo(() => {
    const tagsSet: Set<string> = new Set();

    courses.forEach((course) => {
      course.tags.forEach((tag) => {
        tagsSet.add(tag);
      });
    });

    const tagsArray = Array.from(tagsSet);
    tagsArray.unshift('Все темы');

    return tagsArray;
  }, [courses]);

  return uniqueTags;
};

export default useUniqueTags;
