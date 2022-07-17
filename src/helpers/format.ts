export const format_number = (val: number) =>
  val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
export const format_string = (s: string) =>
  s.charAt(0).toUpperCase() + s.slice(1);
export const format_navlink = (s: string) =>
  "/" + s.toLowerCase().replace(" ", "-");
