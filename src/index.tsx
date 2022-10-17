import React from 'react'
import {createRoot} from "react-dom/client";

import Button from "./button";


createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Button />
    </React.StrictMode>
)