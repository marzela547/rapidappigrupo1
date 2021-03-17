import FormField from '../../Forms/FormField';
import { MdAdd } from 'react-icons/md';

function NewTodo({ onChange, value, onAddNew}){
  return (
    <section className="TodoAddNew bg-purple-100 rounded-lg">
      <section className="flex justify-between w-full items-center px-4">
        <FormField
          type="text"
          id="txtNTodo"
          fname="txtNTodo"
          onChange={onChange}
          value={value}
          caption="Nuevo Todo"
          className="flex p-2 m-2 w-1/2 lg:w-60 bg-white shadow"
          labelClassName="flex text-base lg:w-5/6 self-center"
          containerClassName="flex"
          onKeyUp={(e) => { if (e.keyCode == 13) { onAddNew(e);} }}
        />
        <MdAdd size={"3rem"} onClick={onAddNew}></MdAdd>
      </section>
    </section>
  );
}

export default NewTodo;
