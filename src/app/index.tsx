import { MainApp } from './app.entry';
import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root") ?? document.body;
createRoot(rootElement).render(<Router>
    <MainApp />
</Router>); 
