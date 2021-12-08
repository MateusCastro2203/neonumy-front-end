import React, { Component, useEffect, useState } from "react";
import { ButtonGroup,Button } from "react-bootstrap";
import { CommentsList } from "./commentsList";

export const Comment = () => {
    const [task, setTask] = useState("");
    const [itemsList, setItemsList] = useState([]);

    function handleChangeInput(event) {
        const inputTask = event.target.value;
        setTask(inputTask)
    }
    function handleAddItemToList(event) {
        event.preventDefault();

        if (task) {

            setItemsList([...itemsList, task]);

            // Limpa o campo de input
            setTask("");
        }
    }
    function handleDelete (comment){
        var list = itemsList.indexOf(comment);       
        console.log(list)
        itemsList.splice(list,1);
        setItemsList(itemsList);
    } 
    return ( 
        <>
            <div className="todo-wrapper">
                <form>
                    <input type="text" placeholder="Adicione um comentario" onChange={handleChangeInput} value={task} />
                    <button type="submit" onClick={handleAddItemToList}>Adicionar</button>
                </form>

                <ul className="todo-list" >
                    {itemsList.map((item) => (
                        <>
                            <li>{item}</li>
                            <ButtonGroup size="sm">
                                <Button type="submit"  variant="outline-danger" onClick={() => handleDelete(item)}>
                                    Excluir
                                </Button>
                            </ButtonGroup>
                        </>
                    ))}

                </ul>
            </div>

        </>
    )
}