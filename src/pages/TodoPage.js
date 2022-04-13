import './TodoPage.css'
import React from 'react';
import Todolist from '../components/todoList/TodoList';

const Todopage = () => {
    return (
        <div className='TodoList'>
            <Todolist/>
        </div>
    );
}

export default Todopage;
