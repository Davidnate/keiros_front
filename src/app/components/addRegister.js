import { IoAddCircle } from "react-icons/io5";
import { openModal } from "@/features/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";


const Addregister = ({ }) => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.modal.isOpen)
    const [isModalOpen, setModalOpen] = useState(false);



    return (

            <div className="bg-lightGreen p-1 rounded-md hover:bg-darkGreen dark:bg-purple_new
            dark:hover:bg-purpleDark transition-colors">
                <button className="text-white flex justify-between mx-2" onClick={() => dispatch(openModal())}>
                    <IoAddCircle size={22} className="mx-1 "/>
                    Agregar Bloque
                </button>
            </div>


    )
}

export default Addregister