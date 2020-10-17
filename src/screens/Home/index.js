import React from 'react';
import {
  Wrapper,
  Container,
} from './styles';

import CardsHome from '../../components/CardsHome';
import Tips from '../../components/Tips';

export default function HomeScreen() {
  return (

    <Wrapper>
      <Container>
        <Tips />
        <CardsHome />

      </Container>
    </Wrapper>
  );
}