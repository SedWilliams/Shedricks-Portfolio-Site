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
                <OutsourceSectionLink link={"https://www.youtube.com/@shedrickwilliams4175"} styleClass={"outsource-section__link"} img={"../../docs/assets/imgs/youtube.png"} imgClass={"outsource-section__logo"} id={"yt-logo"}/>
                <OutsourceSectionLink link={"https://github.com/SedWilliams"} styleClass={"outsource-section__link"} img={"../../docs/assets/imgs/github.png"} imgClass={"outsource-section__logo"} id={"gh-logo"} />
                <OutsourceSectionLink link={"https://twitter.com/swtres06"} styleClass={"outsource-section__link"} img={"../../docs/assets/imgs/twitter.png"} imgClass={"outsource-section__logo"} id={"x-logo"} />
            </div>
            <div className="outsource-section">
                <h1 className="outsource-section__text">About me</h1>
            </div>
            <div className="outsource-section">
                <h1 className="outsource-section__text">Free Stuff</h1>
            </div>
            <div className="outsource-section">
                <h1 className="outsource-section__text">Inspiration</h1>
            </div>
        </div>
    );
}