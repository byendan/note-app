import React from 'react';
import styles from './Editor.css'
import Chip from 'react-toolbox/lib/chip';


export default () => {
  return (
    <div className={styles.editorContainer}>
      <div className={styles.editorTitleChip}>
        <Chip>Editor</Chip>
      </div>
    </div>
  );
};
