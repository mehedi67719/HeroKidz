"use client";

import { deletecart } from "@/action/server/cart";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const DeleteButton = ({ id, onDelete }) => {
  const handleDelete = async () => {
    try {
      const res = await deletecart(id); 

      if (res?.success) {  
        Swal.fire({
          title: 'Deleted!',
          text: `Item with ID ${id} has been deleted.`,
          icon: 'success',
          confirmButtonText: 'OK'
        });

       
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to delete the item.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      console.error(error);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="p-3 rounded-full border text-red-500 hover:bg-red-50 hover:scale-110 transition"
    >
      <AiOutlineDelete size={20} />
    </button>
  );
};

export default DeleteButton;