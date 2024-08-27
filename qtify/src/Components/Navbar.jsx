import React from "react";
// import { Link } from "react-router-dom";
import CustomButton from "../Components/Button";
import Logo from "../Components/Logo";
import styles from "./Navbar.module.css";
import Searchbar from "./Search";


function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar} style={{backgroundColor: '#34c94b'}}>
      <Logo />
      <Searchbar />
      <CustomButton text='Give Feedback'/>
    </nav>
  );
}

export default Navbar;


// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';

// export default function Navbar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }