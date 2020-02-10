import React from 'react';

const Item = (props) => {
  
  return (
    <li className="list-group-item"
      onClick={() => props.onVideoClicked(props.video)}
    >
      <div className="video-list media">
        <div className="media-left">
          <img className="mr-3" src={props.video.snippet.thumbnails.default.url} alt="viedo thumbnail"/>
        </div>
        <div className="media-body">
          <h5 className="media-heading">{props.video.snippet.title}</h5>
        </div>
      </div>
    </li>
  );
};

export default Item;