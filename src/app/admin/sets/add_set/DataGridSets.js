
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 1, hideable: true },
    {
        field: 'title',
        headerName: 'Категория',
        width: 150,
        editable: true,
    },
    // {
    //     field: 'lastName',
    //     headerName: 'Last name',
    //     width: 150,
    //     editable: true,
    // },
    // {
    //     field: 'age',
    //     headerName: 'Age',
    //     type: 'number',
    //     width: 110,
    //     editable: true,
    // },
    // {
    //     field: 'fullName',
    //     headerName: 'Full name',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    // },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataGridSets({сategories}) {
    function getRowId(row) {
        return row._id;
    }
    return (
        <Box sx={{ height: "auto", width: '100%' }}>
            <DataGrid
                rows={сategories}
                columns={columns}
                getRowId={getRowId}
                columnVisibilityModel={{
                    // Hide columns status and traderName, the other columns will remain visible
                    id: false,
                }}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[10]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}