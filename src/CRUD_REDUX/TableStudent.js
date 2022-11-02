import React from "react";
import { Table } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
// import { useDispatch } from "react-redux";
// import { searchStudent } from "./actions";
function TableStudent(props) {
    const { data, handleEdit, handleDelete } = props
    return (
        <>
            <Table bordered>
                <thead style={{ background: 'rgb(10, 145, 10)', color: 'white', textAlign: 'center' }}>
                    <tr>

                        <th>
                            MSV
                        </th>
                        <th>
                            Họ Tên
                        </th>
                        <th>
                            Lớp
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody style={{ textAlign: 'center' }}>
                    {data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.msv}</td>
                                <td>{item.name}</td>
                                <td>{item.classes}</td>
                                <td>
                                    <button onClick={() => handleEdit(item)}> <FontAwesomeIcon icon={faPen} /></button>
                                    <button onClick={() => handleDelete(item.id)}> <FontAwesomeIcon icon={faTrash} /></button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}
export default TableStudent