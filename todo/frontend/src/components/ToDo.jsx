/*todos =[{
    {
        title:,
        description:,
        
    },
    ....]
}*/


export function ToDos({todos}){ 
    return <div>
        {todos?.todos.map(function(todo){//todo?checks if it exists 
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed==true ? "Completed" :"Mark as Complete" }</button>
            </div>
        })}
    </div>
}