import React from "react";
import Todo from "../model/Todo";
import TodoItem from "./TodoItem";
// const Todos:React.FC<{items:Todo[]}>= (props) => {
//     return (<ul>
//         {props.items.map(item => <li key={item.id}>{ item.text}</li>)}
//     </ul>)
// }
const Todos: React.FC<{ items: Todo[] }> = (props) => {
    console.log(props.items)
    return (<ul>
        {props.items.map(item => <TodoItem text={item.text} key={item.id} />)}
    </ul>)
}

export default Todos;