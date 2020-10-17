import React from 'react';
import { Container, Option, Title, Img } from './styles';
import { Linking } from 'react-native';

import img8 from '../../images/08.png';
import img9 from '../../images/09.png';
import img10 from '../../images/10.png';
import img11 from '../../images/11.png';
import img12 from '../../images/12.png';

const items = [
  {
    key: String(Math.random()),
    img: img8,
    title: 'Sobre a Deficiência  Intelectual',
    bgColor: '#d22771',
  },
  {
    key: String(Math.random()),
    img: img9,
    title: 'Ensino, Pesquisa e Inovação',
    bgColor: '#ec377c',
  },
  {
    key: String(Math.random()),
    img: img10,
    title: 'Teste do Pezinho',
    bgColor: '#ff4384',
  },
  {
    key: String(Math.random()),
    img: img11,
    title: 'Como Ajudar',
    bgColor: '#fd586d',
  },
  {
    key: String(Math.random()),
    img: img12,
    title: 'Defesa e Direitos',
    bgColor: '#ff6c56',
  },
];

export default function Tips() {
  return (
    <Container>
      {items.map((item) => (
        <Option
          key={item.key}
          bgColor={item.bgColor}
          onPress={() => Linking.openURL('https://www.ijc.org.br/pt-br/sobre-deficiencia-intelectual/Paginas/default.aspx')}>
          <Title>{item.title}</Title>
          <Img source={item.img} />
        </Option>
      ))}
    </Container>
  );
};