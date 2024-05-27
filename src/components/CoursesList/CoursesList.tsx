import { Course } from '../../types';
import CourseCard from '../CourseCard/CourseCard';

import styles from './index.module.scss';

interface Props {
  filteredCourses: Course[];
}

const CoursesList = ({ filteredCourses }: Props) => {
  return (
    <div className={styles.list}>
      {filteredCourses?.map((item) => (
        <CourseCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default CoursesList;
