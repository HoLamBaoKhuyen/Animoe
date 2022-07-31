export const format_number = (val: number) => {
  if (val) return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return val;
};
export const format_string = (s: string) => {
  if (s) return s.charAt(0).toUpperCase() + s.slice(1);
  return s;
};

export const format_navlink = (s: string) =>
  "/" + s.toLowerCase().replace(" ", "-");
export const format_episode = (
  numOfTotalEpisodes: any,
  numOfCurrentEpisodes: any,
  status: any
) => {
  if (status === "Finished Airing") {
    return "\xa0 • \xa0" + numOfTotalEpisodes + " episodes";
  } else if (status === "Currently Airing") {
    if (numOfTotalEpisodes === null && numOfCurrentEpisodes !== null) {
      return "\xa0 • \xa0" + numOfCurrentEpisodes + " episodes";
    } else {
      return (
        "\xa0 • \xa0" +
        numOfCurrentEpisodes +
        "/" +
        numOfTotalEpisodes +
        " episodes"
      );
    }
  } else {
    return "";
  }
};
export const format_studios = (studios: any[]) => {
  let studiosList: string = "";
  studios.forEach((studio) => (studiosList += ", " + studio.name));
  return studiosList.slice(2);
};
export const format_string_array = (sArray: string[]) => {
  let list: string = "";
  sArray.forEach((s) => (list += ", " + s));
  return list.slice(2);
};
export const format_title = (s: string) =>
  s.length <= 35 ? s : s.slice(0, 34) + "...";
export const format_date = (date: string) => {
  const stringDate = new Date(date).toDateString();
  const sArray: string[] = stringDate.split(" ");
  let newDate: string = "";
  for (let i = 1; i < sArray.length; i++) {
    if (i === sArray.length - 2) {
      newDate += sArray[i] + ", ";
    } else {
      newDate += sArray[i] + " ";
    }
  }
  return newDate;
};
