import React from 'react';
import '../styles/SplitPane.css';

const SplitPane = ({ bio, image="../../public/imgs/github.png", bioHeader }) => {
  return (
    <div className="split-pane">
      <div className="split-image">
        <img
          src={image} alt="Your Name"
          className="split-image__profile"
        />
      </div>
      <div className="split-bio" style={{backgroundColor: "#575C75"}}>
        <h2 className="split-bio__header">{bioHeader}</h2>
        <p className="split-bio__text">{bio}</p>
      </div>
    </div>
  );
};

export default SplitPane;

