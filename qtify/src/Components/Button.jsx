import React from 'react';
import { Button } from '@mui/material';
import styles from './Button.module.css';

export default function CustomButton({text}) {
  return (
        <Button variant="contained" className='styles.custombutton' sx={{backgroundColor: '#121212', color: '#34c94b', mx: '5rem'}}>{text}</Button>
  );
};