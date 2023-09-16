import React from "react";
import { Navbar } from "../components/Navbar";
import SplitPane from "../components/SplitPane";

export const Home = () => {

    return(
        <React.Fragment>

            <Navbar />

            <SplitPane bio={
               "Professional experience working with the non-profit Kids Helping Kids Sacramento, programmer, athlete, video and live stream producer with experience from a SEVA award winning broadcast (DC Daily on Vimeo). I believe in going the extra mile, quality, sincerity, using my knowledge to aid others, and upholding the values found in a culture of excellence by any means. I wish to use Fiverr as a tool which allows me to deliver services in a way that portrays these values. "
            } bioHeader={"About Me"}
            />

        </React.Fragment>
    );
};
