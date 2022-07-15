import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';
import Loading from './Loading';
import ErrorAlert from './ErrorAlert';
import { dataFilter, dataSorter } from '../service';
import './List.scss';
const List = () => {
  const [data, setData] = useState();
  const [fetchError, setFetchError] = useState(false);
  const [order, setOrder] = useState(true);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  useEffect(() => {
    fetch(
      'https://api.stackexchange.com/2.2/search?intitle=react&site=stackoverflow'
    )
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then((json) => {
        setData(dataSorter(dataFilter(json.items), order));
        setDataIsLoaded(true);
      })
      .catch((error) => {
        setFetchError(true);
      });
  }, []);
  useEffect(() => {
    setData(dataSorter(data, order));
  }, [order]);
  return fetchError ? (
    <ErrorAlert />
  ) : dataIsLoaded ? (
    <>
      <button
        onClick={() => {
          setOrder(!order);
        }}
        className="switch-order"
      >
        Change the sorting direction
      </button>
      {data.map((item) => {
        return <ListItem key={item.link} data={item} />;
      })}
    </>
  ) : (
    <Loading />
  );
};

export default List;
