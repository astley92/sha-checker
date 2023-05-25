import React, { useState, useEffect } from 'react'
import styles from './InputSection.module.css';
import cardStyles from './cardStyles.module.css';

export default function InputSection(props) {
  const [secret, setSecret] = useState("");
  const [data, setData] = useState("");

  const dataHandler = (event) => {
    setData(event.target.value);
  }

  const secretHandler = (event) => {
    setSecret(event.target.value);
  }

  useEffect(() => {
    console.log("secret changed");

    if (secret.trim().length === 0 || data.trim().length === 0) {
      props.resetShaHandler();
    } else {
      props.generateShaHandler(secret, data);
    }
  }, [secret, data])

  return (
    <div className={`${styles["input-section"]} ${cardStyles.card} ${cardStyles["green-shadow"]}`}>
      <div className={styles["form-control"]}>
        <label htmlFor="secret" className={styles.label}>Secret </label>
        <input type="text" id="secret" name="secret" className={styles.input} value={secret} onChange={secretHandler} />
      </div>
      <div className={styles["form-control"]}>
        <label htmlFor="data" className={styles.label}>Data </label>
        <textarea rows="10" placeholder="Paste the raw JSON payload in here" type="text" id="data" name="data" className={styles["text-area-input"]} value={data} onChange={dataHandler} />
      </div>
    </div>
  )
}
