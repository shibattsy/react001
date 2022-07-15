import React from 'react';
import './ListItem.scss';
const ListItem = ({ data }) => {
  return (
    <a href={data.link}>
      <div className="list-item">
        <div className="list-item__img-wrap">
          <img src={data.owner?.profile_image} alt="img" />
        </div>
        <div className="list-item__title">{data.title}</div>
      </div>
    </a>
  );
};

export default ListItem;
