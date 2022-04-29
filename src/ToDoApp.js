import React from "react";
import { useState } from "react";

function ToDoApp ()
{
    const [list, setList] = useState('');
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setList(event.target.value);
    }

    const itemnList = () => {
        setItems( (oldItem) => {
            return ([...oldItem, list])
        });
        setList('');
    }

    const DeleteIime = () => {
        console.log('DeleteTime');
    }


    return (
        <div>
            <h1 style={{marginBottom:'20px'}}>ToDo App</h1>
            
            <input type="text" placeholder="Add a Item..." onChange={itemEvent} value={list} />
            <button onClick={itemnList} style={{width:'300px', margin:'5px'}}> Add </button>
            <br/>
            <ol>
                {
                    items.map((itemValue, index) => {
                        return (
                            <React.Fragment>
                                <li>
                                    {index}
                                    {itemValue}
                                    <a onSelect={DeleteIime} href="javascript:">x</a>
                                </li>
                            </React.Fragment>
                        );
                    })
                }
            </ol>
        </div>
    )
}

export default ToDoApp;