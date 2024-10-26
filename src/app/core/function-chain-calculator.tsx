import React, { Suspense } from 'react'
import {AppRoutes} from './AppRoute'

export const FuncctionChainCalculatorApp = ()=>{
    return <Suspense>
        <AppRoutes />
    </Suspense>
}