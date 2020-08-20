import React, {useState} from "react";

const Test = () => {
    const initialList = [
        {
            id: 'a',
            firstname: 'Robin',
            lastname: 'Wieruch',
            year: 1988,
        },
        {
            id: 'b',
            firstname: 'Dave',
            lastname: 'Davidds',
            year: 1990,
        },
    ];

    const [list, setList] = React.useState(initialList);
    function handleRemove(id) {
        const newList = list.filter((item) => item.id !== id);

        setList(newList);
    }

    return (
        <ul>
            {list.map((item) => (
                <li key={item.id}>
                    <span>{item.firstname}</span>
                    <span>{item.lastname}</span>
                    <span>{item.year}</span>
                    <button type="button" onClick={() => handleRemove(item.id)}>
                        Remove
                    </button>
                </li>
            ))}
        </ul>
    );

}
export default Test;