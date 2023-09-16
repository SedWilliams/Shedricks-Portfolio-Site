import React from "react";
import { Navbar } from "../components/Navbar";
import NewsletterForm from "../components/NewsletterForm";
import SplitPane from "../components/SplitPane";

export const Home = () => {

    return(
        <React.Fragment>

            <Navbar />

            <SplitPane bioHeader={"About me"}/>
            
            <NewsletterForm />
        </React.Fragment>
    );
};
