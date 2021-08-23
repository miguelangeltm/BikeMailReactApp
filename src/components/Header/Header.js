import React, { Fragment } from "react";
import styles from "./Header.module.css";

const Header = (props) => {
    
  const selectHandler = (event) => {
    props.onSelectHandler(event.target.value);
  };

  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Scooter Mail Army</h1>
        <div className={styles.caja}>
          <select className={styles.select} onChange={selectHandler}>
            <option value="0" className={styles.option}>
              User 1
            </option>
            <option value="1" className={styles.option}>
              User 2
            </option>
            <option value="2" className={styles.option}>
              User 3
            </option>
            <option value="3" className={styles.option}>
              User 4
            </option>
            <option value="4" className={styles.option}>
              User 5
            </option>
            <option value="5" className={styles.option}>
              User 6
            </option>
            <option value="6" className={styles.option}>
              User 7
            </option>
            <option value="7" className={styles.option}>
              User 8
            </option>
            <option value="8" className={styles.option}>
              User 9
            </option>
            <option value="9" className={styles.option}>
              User 10
            </option>
          </select>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
