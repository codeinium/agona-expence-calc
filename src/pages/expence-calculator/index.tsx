import {FC, JSX, useState} from "react";
import './index.sass'
import {NavLink, Route, Routes} from "react-router";
import {ExpenseTracker} from "../../components/base/ExpenceList/ExpenseTracker.tsx";
import {MainLayout} from "../index.tsx";
import {Button} from "@mui/material";



export const Calc: FC = () => {
    return (
        <div className='main-calculator'>

            <ExpenseTracker/>

        </div>
    );
}
