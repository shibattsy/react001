import _ from 'lodash';
export function dataFilter(array) {
  return _.filter(
    array,
    (item) => item.is_answered && item.owner.reputation >= 50
  );
}

export function dataSorter(array, order) {
  return _.orderBy(array, 'creation_date', order ? 'asc' : 'desc');
}
//converting time from Unix to ISO format
export function fromUnixToISODate(milliseconds) {
  var date = new Date(milliseconds * 1000);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  var d = date.getDate();
  m = m < 10 ? '0' + m : m;
  d = d < 10 ? '0' + d : d;
  return [y, m, d].join('-');
}
