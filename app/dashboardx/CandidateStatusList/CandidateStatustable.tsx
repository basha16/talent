import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import TablePagination from '@mui/material/TablePagination';


// Define column definitions
const columns: GridColDef[] = [
    { field: 'JobID', headerName: 'Job ID' },
    { field: 'NameData', headerName: 'Name', width: 170 },
    {
        field: 'Position',
        headerName: 'Position',
        type: 'number',
        align: 'center',
        valueFormatter: (params) => {
            // Format the number as desired, for example, adding commas to separate thousands
            return params.value.toLocaleString();
        }
    },
    {
        field: 'st1Level',
        headerName: '1st Level',
        type: 'number',
        align: 'center',
        valueFormatter: (params) => {
            // Format the number as desired
            return params.value.toLocaleString();
        }
    },
    {
        field: 'nd2Level',
        headerName: '2nd Level',
        type: 'number',
        width: 130,
        align: 'center',
        valueFormatter: (params) => {
            // Format the number as desired
            return params.value.toLocaleString();
        }
    },
    {
        field: 'rd3Level',
        headerName: '3rd Level',
        type: 'number',
        align: 'center',
        width: 130,
        valueFormatter: (params) => {
            // Format the number as desired
            return params.value.toLocaleString();
        }
    },
    {
        field: 'rd4Level',
        headerName: '4rd Level',
        type: 'number',
        align: 'center',
        width: 130,
        valueFormatter: (params) => {
            // Format the number as desired
            return params.value.toLocaleString();
        }
    },
    {
        field: 'TotalMarks',
        headerName: 'Total Marks',
        type: 'number',
        align: 'center',
        width: 130,
        valueFormatter: (params) => {
            // Format the number as desired
            return params.value.toLocaleString();
        }
    },
    {
        field: 'Actions',
        headerName: 'Actions',
        align: 'center',
        renderCell: (params) => (
            <button className='hover:text-blue-500  text-muted' onClick={(e) => e.stopPropagation()}>
                <i className="fa fa-eye"></i>
            </button>
        )
    },
    {
        field: 'status',
        headerName: 'status',
        type: 'number',
        align: 'center',
        width: 130,
        valueFormatter: (params) => {
            // Format the number as desired
            return params.value.toLocaleString();
        }
    },
];


// Define rows data
const rows = [
    { id: 1, JobID: '#001', NameData: 'Eddard Stark', Position: '23', st1Level: '23', nd2Level: '34', rd3Level: '23', rd4Level:'2333', TotalMarks: '233' ,status: 'yes'},
    { id: 2, JobID: '#002', NameData: 'Tywin Lannister', Position: '645', st1Level: '43', nd2Level: '24', rd3Level: '13', rd4Level:'2333', TotalMarks: '233' ,status: 'yes'},
    { id: 3, JobID: '#003', NameData: 'Tywin Lannister', Position: '76', st1Level: '53', nd2Level: '3124', rd3Level: '23', rd4Level:'2333', TotalMarks: '233' ,status: 'yes'},
    { id: 4, JobID: '#004', NameData: 'Eddard Stark', Position: '34', st1Level: '33', nd2Level: '343', rd3Level: '123', rd4Level:'2333', TotalMarks: '233' ,status: 'yes'},
    { id: 5, JobID: '#005', NameData: 'Aerys II', Position: '67', st1Level: '76', nd2Level: '324', rd3Level: '223', rd4Level:'2333', TotalMarks: '233' ,status: 'yes'},
    { id: 6, JobID: '#006', NameData: 'Stannis Baratheon', Position: '64', st1Level: '23', nd2Level: '34', rd3Level: '123', rd4Level:'2333', TotalMarks: '233' ,status: 'yes'},
    { id: 7, JobID: '#007', NameData: 'Clifford', Position: '234', st1Level: '75', nd2Level: '314', rd3Level: '223', rd4Level:'2333', TotalMarks: '233' ,status: 'yes'},
    { id: 8, JobID: '#008', NameData: 'Frances Rossini', Position: '74', st1Level: '23', nd2Level: '234', rd3Level: '245', rd4Level:'2333', TotalMarks: '32' ,status: 'yes'},
    { id: 9, JobID: '#009', NameData: 'Roxie Harvey', Position: '23', st1Level: '76', nd2Level: '134', rd3Level: '123', rd4Level:'2333', TotalMarks: '34' ,status: 'yes'},
];

// Define the DataTable component
export default function JobApplicationTable() {


    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
    
    return (
        <div style={{ width: '100%' }}>
            <DataGrid
                className='text-start border-0 jobApplicationTable'
                rows={rows}
                columns={columns}
               
            />
 
        </div>
    );
}
