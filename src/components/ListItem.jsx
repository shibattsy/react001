import React, { useEffect, useState } from 'react';
import './ListItem.scss';
import { fromUnixToISODate } from '../service';
const ListItem = ({ data }) => {
  const [date, setDate] = useState();
  useEffect(() => {
    setDate(fromUnixToISODate(new Date(data.creation_date)));
  }, [data.creation_date]);
  return (
    <a href={data.link}>
      <div className="list-item">
        <div className="list-item__img-wrap">
          <img src={data.owner?.profile_image} alt="img" />
        </div>
        <div className="list-item__date">{date}</div>
        <div className="list-item__title">{data.title}</div>
      </div>
    </a>
  );
};

export default ListItem;
