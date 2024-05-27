import useUniqueTags from '../../hooks';
import { Course } from '../../types';

import styles from './index.module.scss';

interface Props {
  data: Course[];
  activeTag: string;
  onTagClick: (tag: string) => void;
}

const Sidebar = ({ data, activeTag, onTagClick }: Props) => {
  const tags = useUniqueTags(data || []);

  return (
    <div className={styles.sidebar}>
      {tags.length !== 0 &&
        tags.map((tag) => (
          <div
            className={`${styles.tag} ${
              tag === activeTag ? styles.active : ''
            }`}
            key={tag}
            onClick={() => onTagClick(tag)}
          >
            {tag}
          </div>
        ))}
    </div>
  );
};

export default Sidebar;
