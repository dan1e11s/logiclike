import { Course } from '../../types';

import styles from './index.module.scss';

interface Props {
  item: Course;
}

const CourseCard = ({ item }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.image} style={{ backgroundColor: item.bgColor }}>
        <img src={item.image} alt={item.name} />
      </div>
      <div className={styles.title}>
        <p>{item.name}</p>
      </div>
    </div>
  );
};

export default CourseCard;
