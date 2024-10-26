import { styled } from "styled-components";

export const CardContainer = styled.div`
    width: 235px;
    height: 251px;
    padding: 20px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Input = styled.input`
    width: 195px;
    height: 33px;
    top: 233px;
    left: 285px;
    gap: 0px;
    border-radius: 8px;
    border: 1px solid #D3D3D3;
    opacity: 0px;
    font-family: Inter;
    font-size: 12px;
    font-weight: 500;
    line-height: 14.52px;
    text-align: left;
    padding-left: 8px;
`;

export const Select = styled.select`
    width: 195px;
    height: 33px;
    top: 302px;
    left: 285px;
    gap: 0px;
    opacity: 0px;
    border-radius: 8px;
    border: 1px solid #D3D3D3;
    background-color: #F5F5F5;
    color: #D3D3D3;
    font-family: Inter;
    font-size: 12px;
    font-weight: 500;
    line-height: 14.52px;
    text-align: left;
    padding-left: 8px;
`;


export const GroupDots = styled.img`
    width: 12px;
    height: 7px;
`

export const Title = styled.label`
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 16.94px;
    text-align: left;
    color: #A5A5A5;
`

export const CircleLabel = styled.label`
    font-family: Inter;
    font-size: 10px;
    font-weight: 500;
    line-height: 12.1px;
    text-align: left;
`

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const CircleContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const CircleContentContainer = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
`

export const InputLabel = styled.div`
    font-family: Inter;
    font-size: 12px;
    font-weight: 500;
    line-height: 14.52px;
    text-align: left;
    color: #252525;
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`