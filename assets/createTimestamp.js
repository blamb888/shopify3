function createTimestamp () {
  let date_ob = new Date();
  console.log(date_ob);
  // // OLD CODE --------------- START
  // // adjust 0 before single digit date
  // let date = ("0" + date_ob.getDate()).slice(-2);
  // // current month
  // let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  // // current year
  // let year = date_ob.getFullYear();
  // // current hours
  // let hours = (date_ob.getHours());
  // // current minutes
  // let minutes = date_ob.getMinutes();
  // // current seconds
  // let seconds = date_ob.getSeconds();
  // // prints date & time in YYYY-MM-DD HH:MM:SS format
  // let timestamp = year + "/" + month + "/" + date + " " + hours + ":" + minutes + ":" + seconds;
  // console.log(timestamp);
  // OLD CODE --------------- END
  // console.log(date_ob.toLocaleDateString('ja-JP'));
  let timestamp = new Intl.DateTimeFormat('ja-JP', {dateStyle: 'short', timeStyle: 'long'}).format(date_ob);
  console.log("Intl date:" + timestamp);
  return timestamp
}

module.exports = {
  createTimestamp
}

createTimestamp();


