const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const parseDate = (str) => {
  let dayTime;
  const date = new Date(str);
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours();
  let minutes = date.getMinutes();

  if (String(minutes).length !== 2) {
    minutes = String(minutes).padStart(2, "0");
  }

  if (hours > 12) {
    dayTime = "PM";
  } else {
    dayTime = "AM";
  }
  return `${month} ${day}, ${year} ${hours % 12}:${minutes} ${dayTime}`;
};
