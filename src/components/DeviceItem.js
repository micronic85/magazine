import React from 'react';
import { Col, Card, Image } from 'react-bootstrap';
import star from '../assets/star.png';
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
    const navigate = useNavigate();
    return (
        <Col md={3} className={'mt-1'} onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}>

            <Card style={{ cursor: 'pointer' }} border={'light'} className="card-panel hoverable">
                <Image fluid width={500} height={400} src={process.env.REACT_APP_API_URL + device.img} />
                <div className='text-black-50 mt-2 d-flex justify-content-between align-items-center'>
                    <div>Надпись..</div>
                    <div className='d-flex align-items-center'>
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={star} />
                    </div>

                </div>
                <div>{device.name}</div>

            </Card>


        </Col >
    );
};

export default DeviceItem;