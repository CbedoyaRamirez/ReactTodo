import { useState } from "react";

const TodoCreate = ({ createTodo }) => {

    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() !== '') {
            createTodo(title)
        }
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded overflow-hidden py-4 gap-4 flex items-center py-4 px-4" >
            <span className="rounded-full border-2 inline-block h-3 w-3" ></span>
            <input value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full text-gray-400 outline-none"
                type="text"
                placeholder="Create a new todo..." />

        </form>
    )
}

export default TodoCreate;