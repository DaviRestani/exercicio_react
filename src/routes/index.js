import React from "react";
import { Routes, Route } from "react-router-dom";

import Create from '../pages/Create';
import Update from '../pages/Update';
import Delete from '../pages/Delete';
import SelectAllUsers from "../pages/SelectAllUsers";
import SelectbyEmail from '../pages/SelectbyEmail/index';

export default function Routers() {
    return (
        <Routes>
            <Route exact path="/" element={<Create />} />
            <Route exact path="/update" element={<Update />} />
            <Route exact path="/delete" element={<Delete />} />
            <Route exact path="/selectallusers" element={<SelectAllUsers />} />
            <Route exact path="/selectbyemail" element={<SelectbyEmail />} />
        </Routes>
    )
}