import React, { useState, useEffect, useRef } from "react";
import { Navbar } from "../components/Navbar";
import NewsletterForm from "../components/NewsletterForm";
import SplitPane from "../components/SplitPane";
import supabase from "../supabase";
import PortfolioGrid from "../components/PortfolioGrid";

export const Home = () => {

    const projects = React.useRef(null);

    return(
        <React.Fragment>
            <Navbar />

            <SplitPane bioHeader={"About me"} image={"/imgs/github.png"} projects={projects}/>

            <NewsletterForm />

            <PortfolioGrid scrollToReference={projects}/>

        </React.Fragment>
    );
};

