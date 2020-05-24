 

export const GetDay = timestamp => {
  let d = new Date(timestamp * 1000) // Convert the passed timestamp to milliseconds
  let dd = (d.toDateString()).slice(0, 3);         // Add leading 0.
  return dd;
}

export const getDayColor = (sunrise, sunset) => {
  //clear sky: #409cff
  //high noon: fffffb
  //snow: #ddddd
  //rainy: 6d6d6d
  //overcast: #c9e2ff
  let time = new Date().toTimeString().slice(0, 9).split(':').join('');
  let h = time.slice(0, 4)// light map to sunset and sunrise 0 to 23
  let start = convertTimestamp(sunrise).toString().slice(0, 9).split(':').join('');
  let end = convertTimestamp(sunset).toString().slice(0, 9).split(':').join('');

  start = checkDigits(start);
  end = checkDigits(end);
  let b = 0
  if (h >= start && h <= end) {
    h = 190
    b = 250
  } else {
    h = "30";
    b = "40"
  }
  let mediaHex = h.toString(16) + h.toString(16) + (b).toString(16);
  let numTime = 'linear-gradient(#' + mediaHex + ',#333)';
  const divStyle = {
    background: numTime,
    height: "80vh"
  };
  return divStyle;
}

export const convertTimestamp = timestamp => {
  var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
    mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
    hh = d.getHours(),
    timehhmm = hh + ':' + mm;
  return timehhmm;
}

const checkDigits = (num) => {
  if (num.toString().length < 4) {
    return '0' + num
  } else {
    return num;
  }
}

