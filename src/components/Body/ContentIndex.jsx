import React from 'react';

function ContentIndex(props) {
  return (
    <div className="content-index">
      <img src={props.imgUrl} alt="" />
      <p className="title">{props.text}</p>
    </div>
  );
}
ContentIndex.defaultProps = {
  text: 'Destination',
};

export default ContentIndex;
