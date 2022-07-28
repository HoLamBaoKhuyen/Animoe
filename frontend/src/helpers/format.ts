export const format_number = (val: number) =>
  val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
export const format_string = (s: string) =>
  s.charAt(0).toUpperCase() + s.slice(1);
export const format_navlink = (s: string, mode: string) => {
  if (s === "Most Popular") {
    return `/top-${mode.toLowerCase()}?tab=bypopularity`;
  } else if (s === "Most Favorite") {
    return `/top-${mode.toLowerCase()}?tab=favorite`;
  } else if (s === "Recommendations") {
    return `/${mode.toLowerCase()}-recommendations`;
  } else {
    return "/" + s.toLowerCase().replace(" ", "-");
  }
};
export const format_episode = (
  numOfTotalEpisodes: any,
  numOfCurrentEpisodes: any,
  status: any
) => {
  if (status === "Finished Airing") {
    return "\xa0 • \xa0" + numOfTotalEpisodes + " episodes";
  } else if (status === "Currently Airing") {
    if (numOfTotalEpisodes === null && numOfCurrentEpisodes) {
      return "\xa0 • \xa0" + numOfCurrentEpisodes + " episodes";
    } else if (
      numOfCurrentEpisodes === undefined ||
      numOfCurrentEpisodes === null
    ) {
      return "";
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
export const format_title = (s: string) =>
  s.length <= 35 ? s : s.slice(0, 34) + "...";
export const format_email = (s: string) => s.slice(0, s.indexOf("@"));
