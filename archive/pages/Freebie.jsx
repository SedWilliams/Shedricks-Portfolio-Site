import React from "react";
import CustomModal from "../components/CustomModal.jsx";
import "../styles/CustomModal.css";

export function Freebie() {

    const [modalShow, setModalShow] = React.useState(true);

    const toggleModal = () => {
        modalShow ? setModalShow(false) : setModalShow(true);
    }

    const openModal = () => {
        if(!modalShow) {
            setModalShow(true);
        } else {
            return;
        }
    }

    return(
        <React.Fragment>
            <button onClick={openModal}>View my newsletter!</button>
            <CustomModal toggleModal={toggleModal} isOpen={modalShow} /> 
        </React.Fragment>
    );
}