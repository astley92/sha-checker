import React, { useState } from 'react'
import styles from './OutputSection.module.css';
import cardStyles from './cardStyles.module.css';

export default function OutputSection(props) {
  return (
    <div className={`${cardStyles.card} ${styles["output-section"]} ${cardStyles["purple-shadow"]}`}>
      <div className={styles["output-container"]}>
        <span className={styles["output-leader"]}>
          Raw
        </span>
        <div className={styles["output-content"]}>
          {props.rawSha || 'No SHA yet'}
        </div>
        <span className={styles["output-trail"]}>
          ?
        </span>
      </div>
      <div className={styles["output-container"]}>
        <span className={styles["output-leader"]}>
          &
        </span>
        <div className={styles["output-content"]}>
          {props.convEscapedUnicodeSha || 'No SHA yet'}
        </div>
        <span className={styles["output-trail"]}>
          ?
        </span>
      </div>
    </div>
  )
}
