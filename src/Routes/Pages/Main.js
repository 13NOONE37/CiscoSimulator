import React from 'react';
import Header from 'components/Header';
import 'css/Variables.css';
import 'css/App.css';
import Sidebar from 'components/Sidebar';
import Container from 'components/Container';

export default function Main() {
   return (
      <div className='ContentContainer'>
         <Sidebar />
         <Container />
      </div>
   );
}
