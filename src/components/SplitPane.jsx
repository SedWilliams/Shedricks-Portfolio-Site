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
        <p className="split-bio__text">
                Hello, my name is Shedrick. And I am a 17 year old <span className='bio-text__special'>Programmer, Videographer, and Photographer.</span> I currently live to <span className='bio-text__special'>serve</span> others, <span className='bio-text__special'>achieve</span> highly as an individual, <span className='bio-text__special'>express</span> my ideas, and <span className='bio-text__special'>connect</span> to others with similar interests and thought processes.
        </p>
        <div className='split-bio__buttons'>
            <a href="" ><button>My Work</button></a>
            <a href="" ><button>More Me</button></a>
        </div>
      </div>
    </div>
  );
};

export default SplitPane;

