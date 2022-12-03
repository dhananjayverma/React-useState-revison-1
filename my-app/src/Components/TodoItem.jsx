const TodoItem=({title,status})=>{
    return(
        <div>
            {title}-{status ? "completed":"not completed"}
        </div>
    )
}
export default TodoItem;