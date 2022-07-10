import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { Context } from '../index';
import { fetchTypes, fetchBrands, fetchDevices } from '../http/deviceAPI';
import ButtonSl from './modals/ButtonSl';
import ModalLeft from './UI/MyModal/ModalLeft';

const TypeBar = observer(() => {
    const { device } = useContext(Context)
    const [modal, setModal] = useState(false)

    const getAllDevices = () => {
        device.setSelectedType('all');
        device.setSelectedBrand('all');
    }

    return (
        <><div className='d-flex justify-content-center align-items-center my-3'>
            <Button
                // onClick={() => device.setSelectedType()}
                variant="outline-success"
                onClick={getAllDevices}
            >Показать все</Button>
        </div>
            {/* <Button
                variant="outline-success"
                onClick={() => setModal(true)}
            >Категории</Button>
            <ModalLeft visible={modal} setVisible={setModal}> */}
            <ListGroup className='m-2'>
                <ListGroup.Item variant="danger">Выберите тип</ListGroup.Item>
                {device.types.map(type =>
                    <ListGroup.Item
                        action variant="success"
                        style={{ cursor: 'pointer' }}
                        active={type.id === device.selectedType.id}
                        onClick={() => {
                            device.setSelectedType(type)
                            setModal(false)
                        }}
                        key={type.id}
                    >
                        {type.name}
                    </ListGroup.Item>
                )}
            </ListGroup>
            {/* </ModalLeft> */}



        </>
    );
});

export default TypeBar;