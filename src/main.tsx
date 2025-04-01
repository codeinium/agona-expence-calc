import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";

import './reset.css'
import { MainLayout } from "./pages";



createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <MainLayout />
    </BrowserRouter>
)