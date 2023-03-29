import React from "react";
import Todo from "../model/Todo";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';

const Todos: React.FC<{ items: Todo[] }> = (props) => {
    console.log(props.items)
    return (<ul className={classes.todos}>
        {props.items.map(item => <TodoItem text={item.text} key={item.id} />)}
    </ul>)
}

export default Todos;