import { MdDone, MdDelete} from 'react-icons/md';

// ()=>     fat arrow functions  funciones de flecha gorda ;

function TodoListItem({descripcion, id, fb_id, completed, doneHandler, deleteHandler}){
  const onClick = (e)=>{
    doneHandler(fb_id);
  }
  const onDeleteClick = (e)=>{
    deleteHandler(fb_id);
  }

  const myClass = (completed)?"striked": "";
  return (
    <li className=" flex border rounded-lg my-2 h-10 p-5 items-center justify-between bg-purple-300 hover:bg-purple-500 text-large text-purple-900">
    <span className={myClass}>{descripcion}</span>
    <span className="flex items-center">
    <MdDone size="1.5em" onClick={onClick}></MdDone>
    <MdDelete size="1.5em" onClick={onDeleteClick}></MdDelete>
    </span>
  </li>);
}

function TodoList({todos, doneHandler, deleteHandler}){
  const todoItems = todos.map((o)=>{
    return (
      <TodoListItem
        key={o.id}
        descripcion={o.description}
        id={o.id}
        fb_id={o.fb_id}
        completed={o.completed}
        doneHandler={doneHandler}
        deleteHandler={deleteHandler}
      />
    )
  });
  return (
    <section className="TodoList">
      <ul>
         {todoItems}
      </ul>
    </section>
  );
}

export default TodoList;
