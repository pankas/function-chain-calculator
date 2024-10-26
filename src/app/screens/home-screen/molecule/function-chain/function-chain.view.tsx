import React, { useState, useEffect } from 'react';
import InitialInput from '../initial-input/initial-input.view';
import FunctionCard from '../function-card/function-card.view';
import FinalOutput from '../final-output/final-output.view';
import { ChainContainer, FunctionCardContainer } from './function-chain.styled';
import { functionOrder } from '../../home-screen.constant';
function FunctionChain() {

  return (
    <ChainContainer>
      <FunctionCardContainer>
      <InitialInput />
        {functionOrder.map((id, idx) => (
          <React.Fragment key={id}>
            <FunctionCard
              id={id}
              style={{
                gridRow: idx % 2 === 0 ? '1' : '2',
                gridColumn: (idx % 3) + 1,
              }}
              disabledNext={`Function ${functionOrder[idx + 1] || 'End'}`}
            />
          </React.Fragment>
        ))}
      </FunctionCardContainer>
      <FinalOutput />
    </ChainContainer>
  );
}

export default FunctionChain;
