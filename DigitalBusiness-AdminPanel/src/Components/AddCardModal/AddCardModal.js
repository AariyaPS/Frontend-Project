import React from 'react'
import css from "./AddCardModal.module.css";
import Rodal from "rodal";
import { useState } from "react";
const AddCardModal = ({ visible, onClose, handleCardAdd }) => {
    const customStyle = {
        background: "rgb(58 58 58)",
        padding: "20px",
        width: "50%",
        top: "-rem",
        height: "fit-content"
    };
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    return (
        <Rodal visible={visible} onClose={onClose} customStyles={customStyle}>
            <div className={css.container}>
                <div>
                    <span className={css.label}>Card Title</span>
                    <input type="text" className={css.input} value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <span className={css.label}>Details</span>
                    <textarea row={10} className={css.label}
                        value={detail} onChange={(e) => setDetail(e.target.value)} />
                </div>
                <div>
                    <button className={css.saveButton}
                        disable={title === "" && detail === ""}
                        onClick={() => {
                            handleCardAdd(title, detail);
                            setDetail("");
                            setTitle("");
                        }}>Add</button>
                </div>
            </div>
        </Rodal>
    );
}

export default AddCardModal
