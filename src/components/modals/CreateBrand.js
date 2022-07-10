import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";
import { createBrand, createType } from "../../http/deviceAPI";

const CreateBrand = ({ show, onHide }) => {
    const [value, setValue] = useState('')
    // const [valuePush, setValuePush] = useState(false)
    // const [valueError, setValueError] = useState('Это поле не может быть пустым')


    const addBrand = () => {
        createBrand({ name: value }).then(data => {
            setValue('')
            onHide()
        })
    }
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    // const blurHandler = (e) => {
    //     if (e.target.value) {
    //         return setValuePush(true)
    //     }
    // }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body hasValidation>
                <Form noValidate validated={validated} onChange={handleSubmit}>
                    {/* {(valuePush && valueError) && <div style={{ color: 'red' }}>{valueError}</div>} */}
                    <Form.Control
                        // onBlur={e => blurHandler(e)}
                        value={value}
                        required isInvalid
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название типа"}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please choose a username.
                    </Form.Control.Feedback>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addBrand}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;