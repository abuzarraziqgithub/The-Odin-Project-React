import React from "react";

function Keys() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <ul>
        {months.map((month, monthIndex) => (
          <li key={monthIndex}>{month}</li>
        ))}
      </ul>
    </>
  );
}

export default Keys;
