/**
 *  INSTRUCTIONS:
 *  Build a small app that renders the information coming from the API https://restcountries.com/v3.1/all.
 * Build a component in which you should make a request to the API and render a list of elements.
 *  Each element should represent every single country , in the shape of a card (you can reuse the style used for <MenuItem/>)
 * Every Card should contain an <h3/> with the name of the country, and an <img/> with the flag.
 * OPTONALLY: under the Flag, render the follwing information: Symbol of the currency (or currencies) of that country, and the capital (or capitals)
 * */

import { useEffect, useState } from "react";
import styles from "./Lesson13Exercise.module.css";
const Lesson13Exercise = () => {
  const URL = "https://restcountries.com/v3.1/all";
  const [fetchedData, setFetchedData] = useState([]);
  // using Function to recieve the data from the API
  const recievedData = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      // console.log(data);
      setFetchedData(data);
    } catch (error) {
      console.log(`Something went wrong ${error}`);
    }
  };
  useEffect(() => {
    recievedData();
  }, []);

  // console.log(recievedData);
  return (
    <>
      <h1 className={styles.centered}>Countries of the World</h1>
      <div className={styles.container_wrapper}>
        {fetchedData.map((country) => (
          <div
            className={styles.container}
            style={{
              backgroundImage: `url(${country.coatOfArms.png})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            key={country.name.official}>
            <div className={styles.overlay}>
              <div className={styles.items}>
                <div className={styles.head}>
                  <p>{country.name.common}</p>
                </div>
                <hr />
                {/* Capital City  */}
                <p style={{ margin: "10px" }}>
                  The Capital City Is
                  <br />
                  {country.capital &&
                    country.capital.length === 0 &&
                    "No Country Capital is Shown "}
                  {country.capital &&
                    country.capital.length === 1 &&
                    country.capital[0]}
                  {country.capital && country.capital.length > 1 && (
                    <ul>
                      {country.capital.map((capital) => (
                        <li>{capital}</li>
                      ))}
                    </ul>
                  )}
                </p>
                <div style={{ margin: "10px" }}>
                  <p>
                    {" "}
                    The Number of Population is <br />
                    {country.population}
                  </p>
                </div>
              </div>

              <p className={styles.price}>{/* Content */}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Lesson13Exercise;
