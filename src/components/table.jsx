import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function Table() {

  const columns = [
    {
      field: 'English',
      headerName: 'English',
      width: 250,
      editable: true,
      cellClassName: 'columnCell',
    },
    {
      field: 'Portuguese',
      headerName: 'Portuguese',
      width: 150,
      editable: true,
    },
  ];

  const rows = [
    { id: 1, English: 'Snow', Portuguese: 'Jon' },
    { id: 2, English: 'Lannister', Portuguese: 'Cersei' },
    { id: 3, English: 'Lannister', Portuguese: 'Jaime' },
    { id: 4, English: 'Stark', Portuguese: 'Arya' },
    { id: 5, English: 'Targaryen', Portuguese: 'Daenerys' },
    { id: 6, English: 'Melisandre', Portuguese: 'teste' },
    { id: 7, English: 'Clifford', Portuguese: 'Ferrara' },
    { id: 8, English: 'Frances', Portuguese: 'Rossini' },
    { id: 9, English: 'Roxie', Portuguese: 'Harvey' },
  ];

  return (
    <div className="w-full h-[70%] bg-[#2C2C2C] rounded-xl">
      <Box
        sx={{
          height: '100%',
          width: '100%',
          backgroundColor: '#2C2C2C',
          color: 'white',
          borderRadius: '8px',
          overflow: 'hidden',
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-columnHeaders': {
            display: 'none', // Remover o cabeçalho
          },
          '& .MuiDataGrid-row': {
            backgroundColor: '#2C2C2C',
            '&:hover': {
              backgroundColor: '#3E3F4B',
            },
          },
          // texto dentro da celula
          '& .MuiDataGrid-cell': {
            borderBottom: '1px solid #555',
            color: '#E0E0E0',
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: '#2C2C2C',
            color: '#FFFFFF',
          },
          '& .MuiDataGrid-selectedRowCount': {
            color: '#FFFFFF',
          },
          '& .MuiTablePagination-root': {
            color: '#FFFFFF',
          },
          '& .MuiDataGrid-toolbarContainer': {
            backgroundColor: '#2C2C2C',
          },
          '& .MuiCheckbox-root': {
            color: '#0DA37F',
          },
          '& .MuiCheckbox-root.Mui-checked': {
            color: '#0DA37F',
          },
          '& .MuiSvgIcon-root': {
            color: '#0DA37F',
          },
          '& .columnCell': {
            borderRight: '1px solid #666', // Borda lateral entre as células
          },
        }}
      >
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
          disableRowSelectionOnClick
          autoPageSize={true}
        />
      </Box>
    </div>
  );
}