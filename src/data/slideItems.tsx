import {ImageSourcePropType} from 'react-native';

export interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

export const slideItems: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eius!',
    img: require('../assets/images/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eius!',
    img: require('../assets/images/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eius!',
    img: require('../assets/images/slide-3.png'),
  },
];
