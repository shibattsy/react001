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
