import React from 'react';
import './ModalLeft.css';

const ModalLeft = ({ children, visible, setVisible }) => {
    return (
        <div className={visible ? 'sleva active' : 'sleva'} onClick={() => setVisible(false)}>
            <div className={visible ? 'sleva__content active' : 'sleva__content'} onClick={e => e.stopPropagation()}>{children}</div>

        </div>
    );
};

export default ModalLeft;