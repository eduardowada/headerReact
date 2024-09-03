import { useState } from "react";

function ToDoList() {
    const [toDos, setToDos] = useState([])
    const [inputValue, setInputValue] = useState('')

    const addToDo = () => {
        setToDos([...toDos, inputValue])
        setInputValue('')
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={addToDo}>Adicionar Tarefa</button>

            <ul>
                {toDos.map((toDos, index) => (
                    <li key={index}>{toDos}</li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList