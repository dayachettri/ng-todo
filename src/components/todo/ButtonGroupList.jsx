// icons
import { CgAddR } from 'react-icons/cg';
import { BiEdit } from 'react-icons/bi';
import { TbSquareMinus } from 'react-icons/tb';

//custom hooks
import useTodoContext from '../../hooks/useTodoContext';

// library imports
import { toast } from 'react-toastify';

function ButtonGroupList({ onCreateOpen, onUpdateOpen }) {
  const { currentCheckedItem, deleteItemById } = useTodoContext();

  const handleItemDelete = () => {
    if (!currentCheckedItem) {
      toast.error('No item checked', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      });
      return;
    } else {
      deleteItemById(currentCheckedItem.id);
      toast.success('Deleted a item', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      });
    }
  };
  return (
    <div>
      <div className="flex text-white text-2xl">
        <button
          onClick={onCreateOpen}
          className="px-3 py-2 bg-green-400 rounded-l-lg hover:bg-green-500 ease-in duration-100"
        >
          <CgAddR />
        </button>
        <button
          onClick={onUpdateOpen}
          className="px-3 py-2 bg-yellow-400 hover:bg-yellow-500 ease-in duration-100"
        >
          <BiEdit />
        </button>
        <button
          onClick={handleItemDelete}
          className="px-3 py-2 bg-red-400 rounded-r-lg hover:bg-red-500 ease-in duration-100"
        >
          <TbSquareMinus />
        </button>
      </div>
    </div>
  );
}

export default ButtonGroupList;
