import { styled } from "styled-components";

export const InputCircle = styled.div`
  width: 10px;
  height: 10px;
  background: #4a90e2;
  border-radius: 50%;
`;

export const OutputCircle = styled(InputCircle)`
`;


export const BullsEyeWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 15px;
height: 15px;
position: relative;
    border: 2px solid #DBDBDB;
    border-radius: 50%;
`;

export const Circle = styled.div<{size: string,color:string}>`
position: absolute;
  border-radius: 50%;
  width: ${ props  => props.size}px;
  height: ${ props  => props.size}px;
  background-color: ${ props  => props.color}};
`;



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-end;
`;

export const Input = styled.input<{isLeftAligned:boolean,borderColor:string,borderColorLight:string}>`
  padding: 8px;
  font-size: 16px;
  width: 100px;
  border-radius: 5px;

  width: 80px !important;
    height: 50px;
    top: 363px;
    left: 141px;
    gap: 0px;
    ${props=>props.isLeftAligned ? `
    border-radius: 15px 0px 0px 15px;
    border: 2px solid ${props.borderColor}; 
    border-right: 1px solid ${props.borderColorLight};
    ` : `
    border-radius: 0px 15px 15px 0px;
    border: 2px solid ${props.borderColor}; 
    border-left: 1px solid ${props.borderColorLight};
    `}
    
    opacity: 0px;

`;


export const Label = styled.label<{bgColor:string}>`
    width: fit-content;
    padding: 2px 8px;
    border-radius: 14px;
    background: ${props=>props.bgColor};
    color: white;
    font-family: Inter;
    font-size: 12px;
    font-weight: 600;
    line-height: 14.52px;
    text-align: left;
`

export const InputContainer = styled.div`
    display: flex;
    gap: 0;
`

export const CircleContainer = styled.div<{isLeftAligned:boolean,borderColor:string}>`
    width: 40px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 0px;
    border: 2px solid ${props=>props.borderColor}; 
    opacity: 0px;
    ${props=>props.isLeftAligned? `
        border-radius: 0px 15px 15px 0px;
        border-left: 0;
    ` : `
     border-radius: 15px 0px 0px 15px;
        border-right: 0;
    `}
   
    position: relative;
`