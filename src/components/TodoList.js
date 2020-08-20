import React, {useState} from "react";

const TodoList = () => {
    const task = [
        {
            name: "taréa de ejemplo"
        }

    ];

    const completedTask = [
            {
                name: "taréa ejemplo completada"
            }
        ]
    ;


    const [tasks, setTask] = useState(() => task);
    const [completedTasks, setCompletedTask] = useState(() => completedTask);


    const formatName = (task) => {
        return task.name
    };

    const handleAddTask = () => {
        const name = document.querySelector('#taskName').value;

        const newTask = {
            name,
        };

        setTask((prevState) => {
            return [
                ...prevState,
                newTask
            ];
        });
    };

    const handleMoveTask = (id) => {
        handleRemove(id);
        const name = id;

        const newTask = {
            name,
        };

        setCompletedTask((prevState) => {
            return [
                ...prevState,
                newTask
            ];
        });
    };


    const handleRemove = (id) => {
        const newList = tasks.filter((item) => item.name !== id);
        setTask(newList);
    };


    return (
        <>
            <div>
                <h1>Taréas</h1>
                <label htmlFor='taskName'>Nombre de la taréa</label>
                <input type='text' id='taskName'/>

                <button onClick={handleAddTask}>Agregar taréa</button>
            </div>

            <div className={'row'}>

                <div className={'col m6'}>
                    <h2>Lista de Taréas</h2>
                    <ul>
                        {
                            tasks.map((task) => {
                                return <li key={task.name}>{formatName(task)}
                                    <button type={"button"} onClick={() => handleRemove(task.name)}>Eliminar</button>
                                    <button type={"button"} onClick={() => handleMoveTask(task.name)}>Completada
                                    </button>
                                </li>
                            })
                        }
                    </ul>
                </div>

                <div className={'col m6'}>
                    <h2>Taréas completadas</h2>
                    <ul>
                        {
                            completedTasks.map((task, index) => {
                                return <li key={task.name + " " + index}>{formatName(task)} </li>
                            })
                        }
                    </ul>
                </div>
            </div>

        </>
    );


}
export default TodoList;