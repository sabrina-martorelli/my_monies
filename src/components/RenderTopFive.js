import React, { useState, useEffect } from 'react';

import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';

import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import Looks5Icon from '@mui/icons-material/Looks5';




function RenderTopFive() {

  const [textOnScreen, setText] = useState('');

  useEffect(() => {

    //Initialize the banner of screen in case there are no transactions stored.
    setText(<Typography variant='body1' align='left'>There are no transactions stored.</Typography>);

    //Get Pots from local storage
    const Pots = JSON.parse(localStorage.getItem('pots'));
    
    //Sort the pots
    const Sorted = Pots.sort((a, b) => b.value - a.value);

    //Filter pots that are no Income ot Balance to create the Top 5
    const Filtered = Sorted.filter(function (el) {
      return ((el.category !== 'Income') && (el.category !== 'Balance'));
    });


    if (Filtered.length > 5) {

       //Sets table board to show on screen
      setText(
        <Card 
        sx={{ maxWidth: 360, 
        color: '#e76f51', 
        p: 3, 
        ml:15,
        mt:0 ,
        fontSize: "28px",
        bgcolor: '#000' }} 

     
        >

        <Typography variant='h4' align='center' sx={{pb: 5,  color: '#e9c46a' }}>Top 5 Expenditures </Typography>
         
          <List>
            <ListItem  >
              <ListItemIcon >
                <LooksOneIcon
                  fontSize='large' 
                  sx={{ color: '#2a9d8f' }} 
                  />
              </ListItemIcon>
              <ListItemText  sx={{ fontSize: 22 }} disableTypography primary={'£' + Filtered[0].value + ' - ' + Filtered[0].category} />

            </ListItem>
            <ListItem >

              <ListItemIcon>
                <LooksTwoIcon fontSize='large'
                  sx={{ color: '#2a9d8f' }} 
                />
              </ListItemIcon>
              <ListItemText  sx={{ fontSize: 22 }} disableTypography primary={'£' + Filtered[1].value + ' - ' + Filtered[1].category} />

            </ListItem>

            <ListItem >

              <ListItemIcon>
                <Looks3Icon fontSize='large'
                  sx={{ color: '#2a9d8f' }} 
                />
              </ListItemIcon>
              <ListItemText  sx={{ fontSize: 22 }} disableTypography primary={'£' + Filtered[2].value + ' - ' + Filtered[2].category} />

            </ListItem>
            <ListItem >

              <ListItemIcon>
                <Looks4Icon fontSize='large'
                  sx={{ color: '#2a9d8f' }} 
                />
              </ListItemIcon>
              <ListItemText  sx={{ fontSize: 22 }} disableTypography primary={'£' + Filtered[3].value + ' - ' + Filtered[3].category} />

            </ListItem>
            <ListItem >

              <ListItemIcon>
                <Looks5Icon fontSize='large'
                  sx={{ color: '#2a9d8f' }} 
                />
              </ListItemIcon>
              <ListItemText  sx={{ fontSize: 22 }} disableTypography  primary={'£' + Filtered[4].value + ' - ' + Filtered[4].category} />

            </ListItem>
          </List>
        </Card>
      );
    }
  }, []);
  return (
    <>
      {/*Shows the correct banner depending on what is on the Pots at the moment */}
      {textOnScreen}

    </>
  );
};



export default RenderTopFive;
