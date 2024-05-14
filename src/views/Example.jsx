import React, { useEffect, useState } from "react";
import styles from "./RestaurantView.module.css";

function Example() {
  const [storedData, setStoredData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await response.json();
      // console.log(data);
      setStoredData(data);
    } catch (error) {
      console.log(`error is ${error}`);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(storedData);
  return (
    <>
      {storedData.map((ele) => (
        <div key={ele.id} className={styles.menu}>
          {/* {console.log(ele.name)} */}
          <h2>{ele.email}</h2>
          <p>{ele.body}</p>
          <p>{ele.name}</p>
        </div>
      ))}
    </>
  );
}

export default Example;
