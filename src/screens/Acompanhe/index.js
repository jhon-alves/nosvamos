import React, { Component } from 'react';
import {
  Wrapper,
  Container,
} from './styles';

import Map from '../../components/Map';

export default class AcompanheScreen extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Map />
        </Container>
      </Wrapper>
    );
  }
}

