import React from "react";
import "../styles/Header.css";

export function Header() {

    function OutsourceSectionLink({link, styleClass, id="none", img, imgClass}) {

        return(
            <a href={link} className={styleClass} target="_blank"><img src={img} className={imgClass} id={id}/></a>
        );
    }

    return(
        <div className="navbar">
            <h1 className="navbar-text__big" style={{
                padding: "35px"
            }}> Shedrick Williams</h1>
            <div className="navbar-links">
               <OutsourceSectionLink link={"https://www.youtube.com/@shedrickwilliams4175"} styleClass={"outsource-section__link"} img={"imgs/youtube.png"} imgClass={"outsource-section__logo"} id={"yt-logo"}/>
                <OutsourceSectionLink link={"https://twitter.com/swtres06"} styleClass={"outsource-section__link"} img={"imgs/twitter.png"} imgClass={"outsource-section__logo"} id={"x-logo"} />
                <OutsourceSectionLink link={"https://www.fiverr.com/tre3iii?source=gig_cards&referrer_gig_slug=edit-your-video-and-aid-in-the-creative-sharing-process&ref_ctx_id=c7740081da0e4f86e4832bb41ad4d3b2&imp_id=e348e0ca-e489-434f-afba-58b74ef9342d"} styleClass={"outsource-section__link"} img={"imgs/fiverr.png"} imgClass={"outsource-section__logo"} id={"f-logo"} />
            </div>
            <h1 className="hero-text">Let's exchange thoughts.</h1>
        </div>
    );
}