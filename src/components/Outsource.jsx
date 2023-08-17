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
                <h1 className="outsource-section__text">Socials:</h1>
                <OutsourceSectionLink link={"https://www.youtube.com/@shedrickwilliams4175"} styleClass={"outsource-section__link"} img={"../imgs/youtube.png"} imgClass={"outsource-section__logo"}/>
                <OutsourceSectionLink link={"https://github.com/SedWilliams"} styleClass={"outsource-section__link"} img={"../imgs/github.png"} imgClass={"outsource-section__logo"} id={"gh-logo"} />
            </div>
            <div className="outsource-section">
                <h1 className="outsource-section__text">Coding Projects:</h1>
            </div>
            <div className="outsource-section">
                <h1 className="outsource-section__text">Journals:</h1>
            </div>
            <div className="outsource-section">
                <h1 className="outsource-section__text">Latest Inspiration:</h1>
            </div>
        </div>
    );
}