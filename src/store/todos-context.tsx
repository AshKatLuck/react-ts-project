
import React,{useState} from "react";
import Todo from "../model/Todo";

type TodosContextObject = {
    items: Todo[];
    addTodoItem: (todoText:string) => void;
    removeTodoItem: (id: string) => void;
}

export const TodosContext = React.createContext<TodosContextObject>({
    items: [],
    addTodoItem: (todoText:string) => { },
    removeTodoItem:(id:string)=>{}
})

const TodosContextProvider: React.FC = (props) => {
    const [toDoList, setToDoList] = useState<Todo[]>([]);

    const addToDoHandler = (toDoText:string) => {
    const newToDoItem = new Todo(toDoText);
    setToDoList((prevState) => prevState.concat(newToDoItem))
    }

    const onClickRemoveTodoItemHandler = (id: string) => {
    return setToDoList((prevstate)=>prevstate.filter(todo=>todo.id!==id))
    }
    const contextValue: TodosContextObject = {
        items: toDoList,
        addTodoItem: addToDoHandler,
        removeTodoItem:onClickRemoveTodoItemHandler,
    }
    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
}

export default TodosContextProvider;