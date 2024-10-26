import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './home-screen.init';
import { calculateOutput, validateEquation } from './home-screen.helper';

const functionChainSlice = createSlice({
    name: 'functionChain',
    initialState,
    reducers: {
        setInitialInput(state, action) {
            state.initialInput = action.payload;
            state.output = calculateOutput(state.initialInput, state.equations);
        },
        setEquation(state, action) {
            const { id, equation } = action.payload;
            if (validateEquation(equation)) {
                state.equations[id] = equation;
                state.output = calculateOutput(state.initialInput, state.equations);
            } else {
                console.error(`Invalid equation: ${equation}`);
            }
        },
    },
});

export const { setInitialInput, setEquation } = functionChainSlice.actions;
export default functionChainSlice.reducer;
