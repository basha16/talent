import React,{useState} from 'react';
import { DataGrid, GridColDef, } from '@mui/x-data-grid';

// Define column definitions
const columns: GridColDef[] = [
    { field: 'SrNumber', headerName: 'S.No', width: 100 },
    { field: 'namesTable', headerName: 'Name', width: 173 },
    { field: 'position', headerName: 'Position', },
    {
        field: 'EmailTable', headerName: 'E-Mail', type: 'number',
        align: 'left',
        width: 160,
    },
    { field: 'ContactTable', headerName: 'Contact', type: 'number', width: 160, align: 'left', },
    {
        field: 'ViewTable',
        headerName: 'View',
        width: 70,
        renderCell: (params) => (
            <button className='hover:text-blue-500 text-muted' onClick={(e) => e.stopPropagation()}>
                <i className="fa fa-eye"></i>
            </button>
        )
    },
    
];

// Define rows data
const rows = [
    { id: 1, SrNumber: '01', namesTable: 'Eddard Stark', position: 'Stark', EmailTable: 'Lord', ContactTable: '9889898989', },
    { id: 2, SrNumber: '02', namesTable: 'Tywin Lannister', position: 'Lannister', EmailTable: 'Queen', ContactTable: '9889898989', },
    { id: 3, SrNumber: '03', namesTable: 'Tywin Lannister', position: 'Lannister', EmailTable: 'Kingsguard', ContactTable: '9889898989', },
    { id: 4, SrNumber: '04', namesTable: 'Eddard Stark', position: 'Stark', EmailTable: 'Assassin', ContactTable: '9889898989', },
    { id: 5, SrNumber: '05', namesTable: 'Aerys II', position: 'Targaryen', EmailTable: 'Queen', ContactTable: '9889898989', },
    { id: 6, SrNumber: '06', namesTable: 'Stannis Baratheon', position: 'Melisandre', EmailTable: 'Priestess', ContactTable: '9889898989', },
    { id: 7, SrNumber: '07', namesTable: 'Clifford', position: 'Ferrara', EmailTable: 'Leader', ContactTable: '9889898989', },
    { id: 8, SrNumber: '08', namesTable: 'Frances Rossini', position: 'Rossini', EmailTable: 'Manager', ContactTable: '9889898989', },
    { id: 9, SrNumber: '09', namesTable: 'Roxie Harvey', position: 'Harvey', EmailTable: 'Supervisor', ContactTable: '9889898989', },
];

// Define the DataTable component
const  ManageContactsTable=({handleRowSelection}:any)=> {
    return (
        <div style={{ width: '100%' }}>
             <DataGrid
                className='text-start requestBoradTable'
                rows={rows}
                columns={columns}
                pageSizeOptions={[5, 10]}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                checkboxSelection
                onRowSelectionModelChange={handleRowSelection}
            />
        </div>
    );
}
export default ManageContactsTable
