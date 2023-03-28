import { useRef } from "react";
const NewTodo:React.FC<{onAddToDo:(text:string)=>void}> = (props) => {
    const inputTextRef = useRef<HTMLInputElement>(null);
    const submithandler=(event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = inputTextRef.current!.value;
        if (enteredText.trim().length === 0) {
            //throw an error
            return;
        }
        props.onAddToDo(enteredText);
        return;
    }

    return (
        <form onSubmit={submithandler}>
            <label htmlFor="text">Todo item</label>
            <input type="text" id="text" ref={ inputTextRef} />
            <button>Add To List</button>
        </form>
    )
 }

export default NewTodo;