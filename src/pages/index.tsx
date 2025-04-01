import {FC, JSX, useState} from "react";
import './index.sass'
import {NavLink, Route, Routes} from "react-router";
import {Calc} from "./expence-calculator";
import {Button} from "@mui/material";



export const MainLayout: FC = () => {
    return (
        <div className='main-layout'>
            <h1> Project Expence Calculation </h1>

            <nav className='main-navigation'>
                <Button>
                    <NavLink to='/'> Main </NavLink>
                </Button>
                <Button >
                    <NavLink to='/calc'> Calc </NavLink>
                </Button>
            </nav>

            <Routes>
                <Route path="/calc" element={<Calc/>}/>
            </Routes>
        </div>
    )
}


