import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import TablePagination from '@mui/material/TablePagination';


// Define column definitions
const columns: GridColDef[] = [
    { field: 'JobID', headerName: 'Job ID' },
    { field: 'JobTitle', headerName: 'Job Title', width: 170 },
    {
        field: 'Submissions',
        headerName: 'Submissions',
        type: 'number',
        align: 'center',
        width: 140,
        valueFormatter: (params) => {
            // Format the number as desired, for example, adding commas to separate thousands
            return params.value.toLocaleString();
        }
    },
    {
        field: 'Shortlisted',
        headerName: 'Shortlisted',
        type: 'number',
        align: 'center',
        width: 140,
        valueFormatter: (params) => {
            // Format the number as desired
            return params.value.toLocaleString();
        }
    },
    {
        field: 'Rejected',
        headerName: 'Rejected',
        type: 'number',
        align: 'center',
        valueFormatter: (params) => {
            // Format the number as desired
            return params.value.toLocaleString();
        }
    },
    {
        field: 'OfferReleased',
        headerName: 'Offer Released',
        type: 'number',
        align: 'center',
        valueFormatter: (params) => {
            // Format the number as desired
            return params.value.toLocaleString();
        }
    },
    {
        field: 'Hired',
        headerName: 'Hired',
        type: 'number',
        align: 'center',
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
];


// Define rows data
const rows = [
    { id: 1, JobID: '#001', JobTitle: 'Eddard Stark', Submissions: '23', Shortlisted: '23', Rejected: '34', OfferReleased: '23', Hired: '233' },
    { id: 2, JobID: '#002', JobTitle: 'Tywin Lannister', Submissions: '645', Shortlisted: '43', Rejected: '24', OfferReleased: '13', Hired: '233' },
    { id: 3, JobID: '#003', JobTitle: 'Tywin Lannister', Submissions: '76', Shortlisted: '53', Rejected: '3124', OfferReleased: '23', Hired: '233' },
    { id: 4, JobID: '#004', JobTitle: 'Eddard Stark', Submissions: '34', Shortlisted: '33', Rejected: '343', OfferReleased: '123', Hired: '233' },
    { id: 5, JobID: '#005', JobTitle: 'Aerys II', Submissions: '67', Shortlisted: '76', Rejected: '324', OfferReleased: '223', Hired: '233' },
    { id: 6, JobID: '#006', JobTitle: 'Stannis Baratheon', Submissions: '64', Shortlisted: '23', Rejected: '34', OfferReleased: '123', Hired: '233' },
    { id: 7, JobID: '#007', JobTitle: 'Clifford', Submissions: '234', Shortlisted: '75', Rejected: '314', OfferReleased: '223', Hired: '233' },
    { id: 8, JobID: '#008', JobTitle: 'Frances Rossini', Submissions: '74', Shortlisted: '23', Rejected: '234', OfferReleased: '245', Hired: '32' },
    { id: 9, JobID: '#009', JobTitle: 'Roxie Harvey', Submissions: '23', Shortlisted: '76', Rejected: '134', OfferReleased: '123', Hired: '34' },
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
