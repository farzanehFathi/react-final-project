import React from "react";

export default function FormatDate({ date }) {
  let dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = dayList[date.getDay()];
  let hour = date.getHours();
  let minute = date.getMinutes();

  if (hour < 10) {
    hour = `0{hour}`;
  }
  if (minute < 10) {
    minute = `0{minute}`;
  }

  return (
    <div>
      last updated on {day}, {hour}:{minute}{" "}
    </div>
  );
}
