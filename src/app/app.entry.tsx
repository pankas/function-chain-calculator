import React from "react";
import { Provider } from "react-redux";
import { AppStyles } from "./app.style";
import store from './store';
import { FuncctionChainCalculatorApp } from "./core/function-chain-calculator"; // Fixed the typo

export function MainApp() {
    return (
        <React.StrictMode>
            <AppStyles />
            <Provider store={store}>
                <FuncctionChainCalculatorApp /> {/* Fixed the typo */}
            </Provider>
        </React.StrictMode>
    );
}
