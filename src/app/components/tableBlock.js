import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import data from '../MOCK_DATA'

function Tableblocks() {

    const columns = [
        {
            header: "#",
            accessorKey: "#"
        },
        {
            header: "Jornada",
            accessorKey: "jornada"
        },
        {
            header: "Hora Inicio",
            accessorKey: "hour_begin"
        },
        {
            header: "Hora Fin",
            accessorKey: "hour_end"
        }
    ]

    const table = useReactTable({ data, columns, getCoreRowModel:
        getCoreRowModel(),
     });

    return (
        <div>
            <table>
                <thead>
                    {
                        table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {
                                    headerGroup.headers.map(header => (
                                        <th key={header.id} className='text-black'>
                                            {header.column.columnDef.header}
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>id</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Tableblocks;