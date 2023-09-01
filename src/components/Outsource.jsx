import React from "react";
import "../styles/Outsource.css";

export function Outsource() {

    function OutsourceSectionLink({link, styleClass, id="none", img, imgClass}) {

        return(
            <a href={link} className={styleClass} target="_blank"><img src={img} className={imgClass} id={id}/></a>
        );
    }

    function OutsourceSection({styleClass}) {

        return(
            <div className={styleClass}>
                <OutsourceSectionLink />
            </div>
        );
    }

    return(
        <div className="main-container">
            <div className="outsource-section">
                <OutsourceSectionLink link={"https://www.youtube.com/@shedrickwilliams4175"} styleClass={"outsource-section__link"} img={"imgs/youtube.png"} imgClass={"outsource-section__logo"} id={"yt-logo"}/>
                <OutsourceSectionLink link={"https://github.com/SedWilliams"} styleClass={"outsource-section__link"} img={"imgs/github.png"} imgClass={"outsource-section__logo"} id={"gh-logo"} />
                <OutsourceSectionLink link={"https://twitter.com/swtres06"} styleClass={"outsource-section__link"} img={"imgs/twitter.png"} imgClass={"outsource-section__logo"} id={"x-logo"} />
            </div>
            <div className="outsource-section">
                <h1 className="outsource-section__text"><a href="/About" target="_blank">About Me</a></h1>
            </div>
            <div className="outsource-section">
                <h1 className="outsource-section__text"><a href="/Freebie" target="_blank">Free Stuff</a></h1>
            </div>
            <div className="outsource-section">
                <h1 className="outsource-section__text"><a href="/Inspiration" target="_blank">Inspiration</a></h1>
            </div>
        </div>
    );
}