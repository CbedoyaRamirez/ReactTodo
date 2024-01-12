import CrossIcon from "./icons/crossicon";

const TodoItem = ({ todo }) => {
    return (
        <article className="px-4 flex gap-4 py-4 border-b-2 border-b-gray-400" >
            <button className="rounded-full border-2 inline-block h-5 w-5"></button>
            <p className="text-gray-600 grow" >{todo.title}</p>
            <button><CrossIcon /></button>
        </article>
    )
}

export default TodoItem;

