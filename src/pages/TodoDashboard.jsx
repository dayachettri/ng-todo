// components
import CreateTodoList from '../components/modals/CreateTodoList';
import UpdateTodoList from '../components/modals/UpdateTodoList';
import Bottombar from '../components/todo/Bottombar';
import Navbar from '../components/todo/Navbar';
import SingleTodoList from '../components/todo/SingleTodoList';

// hooks
import { useState } from 'react';

// custom hooks
import useTodoContext from '../hooks/useTodoContext';

function TodoDashboard() {
  const { todoList, createList, updateListById, currentCheckedList } =
    useTodoContext();
  const [createTodoListOpen, setCreateTodoListOpen] = useState(false);
  const [updateTodoListOpen, setUpdateTodoListOpen] = useState(false);

  const handleCreateTodoListOpen = () => {
    setCreateTodoListOpen(!createTodoListOpen);
  };

  const handleUpdateTodoListOpen = () => {
    if (!currentCheckedList) return;
    setUpdateTodoListOpen(!updateTodoListOpen);
  };

  const renderedTodoList = todoList?.map(list => (
    <SingleTodoList key={list.id} {...list} />
  ));

  return (
    <section>
      <Navbar />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm-grid-cols-1 gap-7 max-w-7xl mx-auto">
        {todoList.length ? (
          renderedTodoList
        ) : (
          <h1 className="mx-auto text-lg">No items 😟</h1>
        )}
      </div>
      <Bottombar
        onCreate={createList}
        onUpdate={updateListById}
        onCreateOpen={handleCreateTodoListOpen}
        onUpdateOpen={handleUpdateTodoListOpen}
      />
      {createTodoListOpen && (
        <CreateTodoList onCreateOpen={handleCreateTodoListOpen} />
      )}
      {updateTodoListOpen && (
        <UpdateTodoList onUpdateOpen={handleUpdateTodoListOpen} />
      )}
    </section>
  );
}

export default TodoDashboard;
