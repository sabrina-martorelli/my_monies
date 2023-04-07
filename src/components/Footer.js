import React from 'react';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

//Component that renders a footer that includes 3  icons with Sabrina's info.
const Footer = () => {
    const [value, setValue] = React.useState(0);

    return (
      <Box  xs={12}
     
      >
        
        <BottomNavigation
         style={{backgroundColor: "#e9c46a", }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
            
          <BottomNavigationAction 
          
          sx={{
            bgcolor: '#e76f51',
            
          }}


          label="LinkedIn" icon={<LinkedInIcon />} href="https://www.linkedin.com/in/sabrina-martorelli" target="blank" />
          <BottomNavigationAction
           sx={{
            bgcolor: '#2a9d8f',
            
          }}  
          label="GitHub" icon={<GitHubIcon />}  href="https://github.com/sabrina-martorelli/" target="blank" />
          <BottomNavigationAction 
            sx={{
              bgcolor: '#264653',
              
            }}
          
          label="Email" icon={<EmailIcon />}  href="mailto:sabrina.martorelli@gmail.com" target="blank" />
        </BottomNavigation>
      </Box>
    );
}
 
export default Footer;