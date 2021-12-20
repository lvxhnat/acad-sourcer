function tickFormatter(value) {
  var limit = 15
  if (value.length < limit) return value
  return value.toString().trim().slice(0, limit) + '...'
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function sortObject(obj, reverse = false) {
  return Object.entries(obj)
    .sort(([, a], [, b]) => (reverse ? b - a : a - b))
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {})
}

function sortArroObjs(a, b, reverse = true) {
  // Example Usage:
  // var sortarray = [{"a":1},{"b":2},{"c":0}]
  // item.sort(sortarray)
  if (a[Object.keys(a)] < b[Object.keys(b)]) {
    return reverse ? 1 : -1
  }
  if (a[Object.keys(a)] > b[Object.keys(b)]) {
    return reverse ? -1 : 1
  }
  return 0
}
function generateStringID(title, publish_date) {
  // Clean off white-spaces, then clean off punctuations, then the whitespaces left behind by those punctuations
  var cleaned_title = title
    .replaceAll(/\s/g, '')
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
    .replace(/\s{2,}/g, ' ')
  if (cleaned_title.length > 11) {
    return (publish_date.toString() + cleaned_title).slice(0, 20)
  } else {
    var reps = publish_date.toString() + cleaned_title.repeat(Math.ceil(16 / cleaned_title.length))
    return reps.slice(0, 20)
  }
}
function getDates(startDate, endDate) {
  const dates = []
  let currentDate = startDate
  const addDays = function (days) {
    const date = new Date(this.valueOf())
    date.setDate(date.getDate() + days)
    return date
  }
  while (currentDate <= endDate) {
    dates.push(currentDate)
    currentDate = addDays.call(currentDate, 1)
  }
  return dates
}
function countArrOcurrences(a) {
  // Given arr [1,2,3,4,5,5,3] get the counts for each element 
  var result = {};
  for (var i = 0; i < a.length; ++i) {
    if (!result[a[i]])
      result[a[i]] = 0;
    ++result[a[i]];
  }
  return result
}

export { tickFormatter, numberWithCommas, sortObject, sortArroObjs, generateStringID, countArrOcurrences, getDates }

