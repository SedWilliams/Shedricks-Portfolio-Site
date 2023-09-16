import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import "../styles/CustomModal.css";

const CustomModal = ({isOpen, toggleModal, children}) => {
    let ModalStyling = {
        display: isOpen ? 'flex' : 'none'
    };

    return(
        <div className="modal-content" style={ModalStyling}>
            <span className="close" onClick={toggleModal}>
                &times;
            </span>
            {children}
        </div>
    );
};

export default CustomModal;