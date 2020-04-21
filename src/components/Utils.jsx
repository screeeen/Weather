 

export const GetDay = timestamp => {
  let d = new Date(timestamp * 1000) // Convert the passed timestamp to milliseconds
  let dd = (d.toDateString()).slice(0, 3);         // Add leading 0.
  return dd;
}