import React from 'react';
import { Linking } from 'react-native';
import { Card, Cards, Img, CardsInfo, CardTitle, CardDescription } from './styles';

import joclemente from '../../images/logo-joclemente.png';
export default function CardsHome() {
  return (
    <Card>
      <Cards onPress={() => Linking.openURL('https://www.ijc.org.br/pt-br/sobre-deficiencia-intelectual/publicacoes/guias/Paginas/default.aspx')}>
        <Img source={joclemente} resizeMode="contain" />
        <CardsInfo>
          <CardTitle>Instituto Jô Clemente</CardTitle>
          <CardDescription>
            Acesse nossos guias de atividades durante a pandemia.
          </CardDescription>
        </CardsInfo>
      </Cards>
      <Cards onPress={() => Linking.openURL('https://www.ijc.org.br/pt-br/como-ajudar/pessoa-fisica/Paginas/doe-agora.aspx')}>
        <Img source={joclemente} resizeMode="contain" />
        <CardsInfo>
          <CardTitle>Doe Agora</CardTitle>
          <CardDescription>
            Em tempos de Coronavírus, sua contribuição é ainda mais importante!
          </CardDescription>
        </CardsInfo>
      </Cards>
    </Card >
  );
}

