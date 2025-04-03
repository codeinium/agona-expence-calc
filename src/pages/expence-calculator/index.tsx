import {FC, JSX, useState} from "react";
import './index.sass'
import {NavLink, Route, Routes} from "react-router";
import {MainLayout} from "../index.tsx";
import {Button} from "@mui/material";
import {ExpenseTracker} from "../../components/base/ExpenseTracker/ExpenceTracker.tsx";



export const Calc: FC = () => {
    return (
        <div className='main-calculator'>

            <ExpenseTracker/>

        </div>
    );
}
