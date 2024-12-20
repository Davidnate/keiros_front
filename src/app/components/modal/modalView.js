import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "@/features/modal/modalSlice";
import { MdClose } from "react-icons/md";

const RegisterModal = ({ title, children }) => {
    const isOpen = useSelector((state) => state.modal.isOpen);
    const dispatch = useDispatch();

    if (!isOpen) return null;


    return (
        <div className={`${isOpen ? "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" : "hidden "}`}>

            <div className="bg-white md:w-[60%] lg:w-[30%]  rounded-lg shadow-lg">

                <div className=" bg-lightGreen text-center p-3 flex justify-between rounded-t-md">
                    <div>
                        {title && (<h1 className="text-xl font-bold">{title}</h1>)}
                    </div>
                    <div>
                        <button
                            className=" right-4 text-gray-500 hover:text-gray-800"
                            onClick={() => dispatch(closeModal())}
                        >
                            <MdClose size={20}/>
                        </button>
                    </div>
                </div>
                    <div>
                        {children}
                    </div>
                    <div className="flex justify-center m-5">
                        <button className="bg-lightGreen text-xl rounded-md p-2 hover:bg-darkGreen">
                            Guardar
                        </button>
                    </div>
            </div>
        </div>
    );
};

export default RegisterModal;