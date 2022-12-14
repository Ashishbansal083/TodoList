import React from 'react';
import {v4 as uuidv4} from "uuid";

const Form=({input,setInput,todos,setTodos})=>{
    const onInputChange=(event)=>{
        setInput(event.target.value)
    }
    const onFormSubmit=(event)=>{
        event.preventDefault();
    }
    return (
        <form>
            <input type="text"
              placeholder='Enter a todo.....' 
              className='task-input'
              value={input}
              onChange={onInputChange}
              required              
              />
            <button type='submit' className='button-add'>Add</button>            
        </form>
    );
}

export default Form;