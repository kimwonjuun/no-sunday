import React from 'react';

const Searchltem = (props: any) => (
  <li>
    <h1>{props.video.snippet.title}</h1>
    <img src={props.video.snippet.thumbnails.default.url} alt=""></img>
  </li>
);

export default Searchltem;
