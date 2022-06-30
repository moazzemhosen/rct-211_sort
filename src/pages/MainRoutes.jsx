import React from 'react'
import { Route,Routes } from "react-router-dom";

import {Login} from './Login'

import {Books }from './Books';
import {EditBooks} from './EditBooks';

import {SingleBook} from './SingleBook';
import { RequiredAuth } from '../components/RequiredAuth';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Books/>} />
      <Route path="/books/:id" element={<SingleBook />} />
      <Route
        path="/books/:id/edit"
        element={
          <RequiredAuth>
            <EditBooks/>
          </RequiredAuth>
        }
      />
      <Route path="/login" element={<Login/>} />
      <Route path="*" element={<h1> No page not found</h1>} />
    </Routes>
  );
}

export default MainRoutes;