import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../types';
import { BullsEyeWrapper, Circle, CircleContainer, Container, Input, InputCircle, InputContainer, Label } from '../../home-screen.styled';

function FinalOutput() {
  const output = useSelector((state: RootState) => state.functionChain.output);
  return (
    <Container>
      <Label bgColor='#4CAF79'>Final Output y:</Label>
      <InputContainer>
        <CircleContainer isLeftAligned={false} borderColor={'#2DD179'} >
          <BullsEyeWrapper>
            <Circle size={'8'} color="#4a90e2" />
          </BullsEyeWrapper>
        </CircleContainer>
        <Input type="number" isLeftAligned={false} borderColor={'#2DD179'} borderColorLight={'#C5F2DA'} value={output} readOnly />
      </InputContainer>
    </Container>
  );
}

export default FinalOutput;
