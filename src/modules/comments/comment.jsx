import React, { Component, useEffect, useState } from "react";
import { ButtonGroup, Button, InputGroup } from "react-bootstrap";

export const Comment = () => {
    const [task, setTask] = useState("");
    const [itemsList, setItemsList] = useState([]);

    const [taskEdit, setTaskEdit] = useState("");
    const [itemsEdit, setItemsEdit] = useState([]);

    const [isUpdate, setUpdate] = useState(false);

    function handleChangeInput(event) {
        const inputTask = event.target.value;
        setTask(inputTask);
    }
    function handleAddItemToList(event) {
        event.preventDefault();

        if (task) {
            setItemsList([...itemsList, task]);
            setTask("");
        }
    }
    
    function handleChangeInputEdit(event) {
        const inputTask = event.target.value;
        setTaskEdit(inputTask);
    }
    function handleAddItemToListEdit(comment) {
        console.log("OI: ",comment)
        if (taskEdit) {
            setItemsEdit([...itemsEdit, taskEdit]);
            setTaskEdit("");
        }
        var listComments = [...itemsList];
        var id = itemsList.indexOf(comment);
        listComments[id] = {...itemsEdit}
        //setItemsList(listComments)
        console.log(...itemsEdit);
        setUpdate(!isUpdate);
    }
    

    function handleDelete(comment) {
        var id = itemsList.indexOf(comment);
        var listComments = [...itemsList];
        listComments.splice(id, 1)
        setItemsList(listComments);
    };

    function handleEditList(comment) {
        setUpdate(!isUpdate);
        var id = itemsList.indexOf(comment);
        //var listComments = [...itemsList];
        //listComments[id] = { ...itemsList }
        //setItemsList(listComments)
        //setItemsList(listComments);
    };
    function getList() {
        return (
            <>
                {
                    itemsList.map((item) => (
                        <>
                            <li>{item}</li>
                            <ButtonGroup size="sm">
                                <Button type="submit" variant="outline-danger" onClick={() => handleDelete(item)}>
                                    Excluir
                                </Button>
                                <Button type="submit" variant="outline-success" onClick={() => handleEditList(item)}>
                                    Editar
                                </Button>
                                {isUpdate &&
                                    <>
                                        <InputGroup>
                                            <InputGroup.Text type="text" placeholder="Editar o comentario" onChange={handleChangeInputEdit} value={taskEdit} ></InputGroup.Text>
                                            <Button type="submit" variant="outline-primary" onClick={() => handleAddItemToListEdit(item)}>Adicionar</Button>
                                        </InputGroup>
                                       
                                        
                                    </>

                                }
                            </ButtonGroup>
                        </>
                    ))
                }
            </>
        )

    }

    return (
        <>
            <div className="todo-wrapper">
                <form>
                <InputGroup>
                    <input type="text" placeholder="Adicione um comentario" onChange={handleChangeInput} value={task} /> 
                    <Button variant="outline-primary" type="submit" onClick={handleAddItemToList}>Adicionar</Button>
                </InputGroup>
                </form>

                <ul className="todo-list" >
                    {getList()}

                </ul>
            </div>

        </>
    )
}