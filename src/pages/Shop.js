import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Context } from '../index';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import TypeBar from '../components/TypeBar';
import { fetchTypes, fetchBrands, fetchDevices } from '../http/deviceAPI';
import Pages from "../components/Pages";

const Shop = observer(() => {
    const { device } = useContext(Context)
    // const memoizedValue = useMemo(() => device);

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(null, null, 1, 1).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 8).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedType, device.selectedBrand,])

    return (
        <Container fluid>
            <Row className="mt-2">

                <Col md={3}>
                    <TypeBar />
                </Col>
                {/* <div className='d-flex justify-content-center align-items-center my-3'>
                    <Button
                        // onClick={() => device.setSelectedType()}
                        variant="outline-success">Показать все</Button>
                </div> */}
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                    <Pages />
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;