import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, deleteStudent, searchStudent, setStudent, updateStudent } from "./actions";
import ModalStudent from './ModalStudent'
import TableStudent from "./TableStudent";
import Search from "./Search";
import { Col, Row } from 'reactstrap'
function AppRedux() {
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const [counter, setCouter] = useState(3);
    const [todo, setTodo] = useState({
        id: counter,
        msv: '',
        name: '',
        classes: ''
    })
    const [check, setCheck] = useState(false)
    const data = useSelector((state) => state.todos)
    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setTodo({ ...todo, [name]: value })
        setKeyWord(e.target.value)

    }
    const [keyword, setKeyWord] = useState('')

    const handleAdd = () => {
        if (todo !== "") {
            dispatch(addStudent(todo))
            const amount = counter + 1
            setCouter(amount)
            setTodo({
                id: amount,
                msv: '',
                name: '',
                classes: ''
            })
        }
        toggle()
        setCheck(false)
    }
    const handleDelete = (id) => {
        dispatch(deleteStudent(id))

    }
    const handleEdit = (data) => {
        setCheck(true)
        toggle()
        setTodo(data)

    }
    const handleUpdate = () => {
        toggle()
        setCheck(false)
        dispatch(updateStudent(todo))
        setTodo({
            msv: '',
            name: '',
            classes: ''
        })


    }
    const handleCanCle = () => {
        setCheck(false)
        toggle()
        setTodo({
            msv: '',
            name: '',
            classes: ''
        })
    }
    const handleSearch = (e) => {
        e.preventDefault()
        if (keyword === "") {

            dispatch(setStudent(keyword))
        }
        else {
            dispatch(searchStudent(keyword))
        }


    }

    return (
        <>
            <h2 style={{ textAlign: 'center' }}>Danh sách sinh viên </h2>
            <div style={{ marginTop: '50px', marginBottom: '20px' }}>
                <Row>

                    <Col md={6} style={{ display: 'flex', justifyContent: "left" }} >

                        <Search handleChange={handleChange} handleSearch={handleSearch} />
                    </Col>
                    <Col md={6} style={{ display: 'flex', justifyContent: "right", marginLeft: '-100px', marginBottom: '10px' }}>

                        <ModalStudent modal={modal} toggle={toggle}
                            handleAdd={handleAdd} handleChange={handleChange} todo={todo}
                            check={check} handleUpdate={handleUpdate} handleCanCle={handleCanCle}
                        />
                    </Col>
                </Row>
            </div>

            <TableStudent data={data} handleEdit={handleEdit} handleDelete={handleDelete} keyword={keyword} />
        </>
    )
}
export default AppRedux