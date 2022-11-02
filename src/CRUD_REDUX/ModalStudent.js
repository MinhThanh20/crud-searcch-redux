import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, Col, Label, ModalHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
function Example(props) {
    const { modal, toggle, handleAdd, handleChange, todo, check, handleUpdate, handleCanCle } = props
    return (
        <div>
            <Button color="danger" onClick={toggle}>
                <FontAwesomeIcon icon={faCirclePlus} /> Thêm mới
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader onClick={handleCanCle}></ModalHeader>
                <ModalBody>
                    <Col >
                        <Label style={{ marginRight: '10px' }}>MSV :</Label>
                        <input name="msv" value={todo.msv} onChange={handleChange} />
                    </Col>
                    <Col style={{ marginTop: '20px' }}>
                        <Label style={{ marginRight: '10px' }}>Họ Tên : </Label>
                        <input name="name" value={todo.name} onChange={handleChange} />
                    </Col>
                    <Col style={{ marginTop: '20px' }}>
                        <Label style={{ marginRight: '10px' }}>Lớp : </Label>
                        <input name="classes" value={todo.classes} onChange={handleChange} />
                    </Col>
                </ModalBody>
                <ModalFooter>
                    {check ?
                        (<Button color="primary" onClick={handleUpdate}>UPDATE</Button>)
                        :

                        (<Button color="primary" onClick={handleAdd}>ADD</Button>)
                    }
                    <Button color="secondary" onClick={handleCanCle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Example;