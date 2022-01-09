import React from 'react';
import { Route, HashRouter, Routes } from 'react-router-dom';
import { Home } from '../../Views/Home';
import { Login } from '../../Views/Login';
import { Dashboard } from '../../Views/Dashboard';
import { UserRoute } from './UserRoute';

export const Router = (props) => {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dash" element={<Dashboard />} />
      </Routes>
    </HashRouter>
  );
};
