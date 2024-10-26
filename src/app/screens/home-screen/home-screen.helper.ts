import { functionOrder } from "./home-screen.constant";

export const validateEquation = (equation) => {
  // Ensure equation only has valid characters: digits, operators, "x", and spaces
  return /^[\d+\-*/^x\s()]+$/.test(equation);
};

export const calculateOutput = (initialInput, equations) => {
  let x = initialInput;
  try {
    functionOrder.forEach((id) => {
      const equation = equations[id];
      
      if (!validateEquation(equation)) {
        throw new Error(`Invalid equation at Function ${id}: ${equation}`);
      }
      
      // Replace "x" with the current value of x and evaluate the equation
      x = eval(equation.replace(/x/g, x));
    });
  } catch (error) {
    console.error("Error calculating output:", error.message);
    return NaN; // or any other error indicator you'd like
  }

  return x;
};
