import { useEffect, useState } from 'react';
import { Course, GetCoursesResponse } from '../../types';
import { getCourses } from '../../api/courseApi';

import Container from '../Container/Container';
import CoursesList from '../CoursesList/CoursesList';
import Sidebar from '../Sidebar/Sidebar';

import styles from './index.module.scss';

const Main = () => {
  const [data, setData] = useState<GetCoursesResponse | undefined>(undefined);
  const [activeTag, setActiveTag] = useState<string>('Все темы');
  const [filteredCourses, setFilteredCourses] = useState<Course[] | undefined>(
    undefined
  );

  useEffect(() => {
    async function fetchCourses() {
      try {
        const courses = await getCourses();
        setData(courses);
        setFilteredCourses(courses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    }

    fetchCourses();
  }, []);

  useEffect(() => {
    if (activeTag === 'Все темы') {
      setFilteredCourses(data);
    } else {
      setFilteredCourses(
        data?.filter((course) => course.tags.includes(activeTag))
      );
    }
  }, [activeTag, data]);

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.inner}>
          {data && (
            <Sidebar
              data={data}
              activeTag={activeTag}
              onTagClick={setActiveTag}
            />
          )}
          {filteredCourses && <CoursesList filteredCourses={filteredCourses} />}
        </div>
      </Container>
    </div>
  );
};

export default Main;
