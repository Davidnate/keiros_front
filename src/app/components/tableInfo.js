import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel, getSortedRowModel, getFilteredRowModel } from '@tanstack/react-table'
import { useState } from 'react'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { HiXMark } from "react-icons/hi2";
function Tableblocks({ data, columns }) {



    const [sorting, setSorting] = useState([]);
    const [filtering, setFiltering] = useState("");

    const table = useReactTable({
        data, columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            globalFilter: filtering,
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setFiltering,

    });

    return (
        <div className='mt-5'>

            <div className='flex justify-end my-3'>
                <input
                    type='text'
                    value={filtering}
                    onChange={e => setFiltering(e.target.value)}
                    placeholder='Buscar'
                    className='w-[20%] p-1 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300'
                />
            </div>
            <table className='border-collapse border-spacing-0 w-[100%] border-solid border-2'>
                <thead className='bg-lightGreen'>
                    {
                        table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {
                                    headerGroup.headers.map(header => (
                                        <th key={header.id} onClick={header.column.getToggleSortingHandler()} className='p-5 cursor-pointer'>{
                                            header.isPlaceholder ? null :
                                                flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                            {
                                                { 'asc': "⬆️", 'down': "⬇️" }[header.column.getIsSorted() ??
                                                null
                                                ]
                                            }
                                        </th>
                                    ))

                                }
                                <th>
                                    Acciones
                                </th>
                            </tr>
                        ))
                    }
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id} className='odd:bg-slate-100 text-center'>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id} className='text-black border-solid border-2 py-2'>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                            <td className='border-solid border-2'>
                                <button className='p-1 bg-yellow-400 mx-2 rounded-md'>
                                    <FaEdit size={20} className='rounded-s-sm text-black' />
                                </button>
                                <button className='p-1 bg-red-600 mx-2  rounded-md'>
                                    <MdDelete size={20} className=' rounded-s-sm' />
                                </button>
                                <button className='p-1 bg-red-600 mx-2  rounded-md' >
                                    <HiXMark size={20} className=' rounded-s-sm' />
                                </button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <div className='flex justify-end'>
                <div className=''>
                    <button onClick={() => table.setPageIndex(0)} className='text-black'>
                        <MdKeyboardDoubleArrowLeft size={30} className="inline-block" />
                    </button>
                    <button onClick={() => table.previousPage()} className='text-black'>
                        <MdKeyboardArrowLeft size={30} className='inline-block' />
                    </button>
                    <span className='mx-4 text-lg text-black'>
                        {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
                    </span>
                    <button onClick={() => table.nextPage()} className='text-black'>
                        <MdKeyboardArrowRight size={30} className='inline-block' />
                    </button>
                    <button onClick={() => table.setPageIndex(table.getPageCount() - 1)} className='text-black'>
                        <MdKeyboardDoubleArrowRight size={30} className="inline-block" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Tableblocks;