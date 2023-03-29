import { useRef,useContext } from "react";
import classes from './NewTodo.module.css';
import { TodosContext } from "../store/todos-context";
const NewTodo: React.FC = () => {
    const TodosCtx = useContext(TodosContext);
    const inputTextRef = useRef<HTMLInputElement>(null);
    const submithandler=(event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = inputTextRef.current!.value;
        if (enteredText.trim().length === 0) {
            //throw an error
            return;
        }
        TodosCtx.addTodoItem(enteredText);
        return;
    }

    return (
        <form onSubmit={submithandler} className={classes.form}>
            <label htmlFor="text">Todo item</label>
            <input type="text" id="text" ref={ inputTextRef} />
            <button>Add To List</button>
        </form>
    )
 }

export default NewTodo;