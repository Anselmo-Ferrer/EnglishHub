import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function Table() {

  const columns = [
    {
      field: 'English',
      headerName: 'English',
      width: 150,
      editable: true,
    },
    {
      field: 'Portuguese',
      headerName: 'Portuguese',
      width: 150,
      editable: true,
    },
  ];
  
  const rows = [
    { id: 1, English: 'Snow', Portuguese: 'Jon'},
    { id: 2, English: 'Lannister', Portuguese: 'Cersei'},
    { id: 3, English: 'Lannister', Portuguese: 'Jaime'},
    { id: 4, English: 'Stark', Portuguese: 'Arya'},
    { id: 5, English: 'Targaryen', Portuguese: 'Daenerys'},
    { id: 6, English: 'Melisandre', Portuguese: null },
    { id: 7, English: 'Clifford', Portuguese: 'Ferrara'},
    { id: 8, English: 'Frances', Portuguese: 'Rossini'},
    { id: 9, English: 'Roxie', Portuguese: 'Harvey'},
  ];

  // GridData material UI
  return(
    <div className="w-full h-[70%] bg-[#2C2C2C] rounded-xl">
      <Box sx={{ height: '100%', width: '100%', color: 'white',  }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          //checkboxSelection
          disableRowSelectionOnClick
          autoPageSize={true}
          
        />
      </Box>
    </div>
  )
}