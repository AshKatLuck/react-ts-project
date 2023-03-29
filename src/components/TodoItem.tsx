import React from "react";
import classes from './TodoItem.module.css'
const TodoItem: React.FC<{ text: string; onClickRemoveTodoItemHandler:()=>void}> = (props) => {
    return (<li className={classes.item} onClick={ props.onClickRemoveTodoItemHandler}>{ props.text}</li>)
}

export default TodoItem;
