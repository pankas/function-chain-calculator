import { styled } from "styled-components";

// export const ChainContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 20px;
//   position: relative;
//   padding: 20px;
// `;

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 20px;
  height: 100vh;
  background-color: #f5f5f5;
`;

// export const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 40px;
//   position: relative;
// `;


// Update Grid component
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Adjust for desired number of columns */
  grid-template-rows: repeat(2, 1fr); /* Adjust for desired number of rows */
  gap: 50px; /* Increase gap for more spacing */
  position: relative;
  width: 90%;
  margin: 0 auto;
`;

// Update ChainContainer
export const ChainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  position: relative;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
`;

export const FunctionCardContainer = styled.div`
    display: flex;
    gap: 84px;
    flex-wrap: wrap;
`
