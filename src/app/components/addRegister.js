import { IoAddCircle } from "react-icons/io5";

const Addregister = ({ }) => {
    return (

            <div className="bg-lightGreen p-1 rounded-md hover:bg-darkGreen dark:bg-purple_new
            dark:hover:bg-purpleDark transition-colors">
                <button className="text-white flex justify-between mx-2">
                    <IoAddCircle size={22} className="mx-1 "/>
                    Agregar Bloque
                </button>
            </div>
    )
}

export default Addregister