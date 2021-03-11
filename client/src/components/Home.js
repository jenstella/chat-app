//imports
import React from "react";
import { useState, useEffect } from "react";

//home page
export default function Home() {
  // state for if the button is clicked.. starts as false
  const [clicked, setClicked] = useState(false);
  //   state for the results of the fetch aka.. the results of the query to the database
  const [results, setResults] = useState();

  //   when something happens to clicked state.. activate this useEffect
  useEffect(() => {
    //   if the button is clicked (aka clicked state === true)
    if (clicked) {
      // get it by calling the api endpoint from server.js
      fetch("/api")
        .then((res) => res.json())
        .then((restList) => {
          // then set it in state
          setResults(restList);
        });
    }
  }, [clicked]);

  // this is one way to render results..
  //   let answer = JSON.stringify(results)

  // to render more formatted results
  //   create empty array that will hold only the text of the objects
  let chatArray = [];
  results &&
    results.forEach((object) => {
      console.log(object);
      // push the text portion of the object to the chatArray
      chatArray.push(object.text);
    });

  return (
    <div>
      <h1>Mutha fackin Home Page</h1>

      {/* button to signal fetch */}
      <button
        onClick={() => {
          setClicked(true);
        }}
      >
        CLICK ME!
      </button>

      {/*printing unformatted results to page.. this way is dependent on  JSON.stringify from above */}
      {/* <div>{answer}</div> */}

    {/* use map to return each chat as an individual div containing text */}
      {chatArray.map((chat, index) => {
        return <div key={index}>{chat}</div>;
      })}
    </div>
  );
}
