import { useState, useEffect } from 'react';

import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';


function RenderTransactions() {

  const [textOnScreen, setText] = useState('');


  useEffect(() => {

    //Gets transactions from Local Storage to Render using dataGrid from MUI 
    const rows = JSON.parse(localStorage.getItem('transactions'));

    const columns = [
      {
        field: 'id',
        headerName: '#',
        width: 100,
       
        headerClassName: 'dataGridHeader',

      },
      {
        field: 'date',
        headerName: 'Date',
        width: 300,
        editable: false,
        headerClassName: 'dataGridHeader',
      },
      {
        field: 'category',
        headerName: 'Category',
        width: 350,
        editable: false,
        headerClassName: 'dataGridHeader',
      },
      {
        field: 'description',
        headerName: 'Description',
        width: 600,
        editable: false,
        headerClassName: 'dataGridHeader',

      },
      {
        field: 'value',
        headerName: 'Value',
        type: 'number',
        width: 500,
        editable: false,
        headerClassName: 'dataGridHeader',

      }
    ];

    if (rows) {

      //Filter Transactions to get rid of null or empty 
      const newRows = rows.filter(a => a);

      // Adds £ to values to show on colum values
      newRows.map((e) => ( e.value = '£ ' + e.value ));

     //Sets DataGrid to show on screen
      setText(
        <Box 
        
        sx={{
          height: '650px',
          width: '100%', 
          '& .dataGridHeader': {
          backgroundColor: '#e9c46a',
          color: '#000',
          fontSize: 26
          },
        }}
        
      
        >
          <DataGrid
            rows={newRows}
            columns={columns}
           
            style={{backgroundColor: "#2a9d8f", fontSize: "22px",  color: '#fff',}}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>);

    }
    else {
      //If there are no transactions stored, shows a different banner
      setText(<Typography variant='body1' align='center'>There are no transactions stored. Transactions will be shown in a table.</Typography>);

    }

  }, []);

  return (
    <>
      <Typography 
      variant='h4' 
      align='center' 
      sx={{ p: 5 }}
      color='#e9c46a'
      >Transactions History</Typography>
      {/*Shows the correct banner depending on what is on the Pots at the moment */}
      {textOnScreen}

    </>
  )
};

export default RenderTransactions;