import {
  Homepage,
  WebDesign,
  AppDesign,
  GraphicDesign,
  About,
  Locations,
  Contact,
  Error,
} from '../pages';

const pages = [
  {
    name: 'home',
    path: '/',
    ElementName: Homepage,
  },
  {
    name: 'web-design',
    path: '/web-design',
    ElementName: WebDesign,
  },
  {
    name: 'app-design',
    path: '/app-design',
    ElementName: AppDesign,
  },
  {
    name: 'graphic-design',
    path: '/graphic-design',
    ElementName: GraphicDesign,
  },
  {
    name: 'about',
    path: '/about-us',
    ElementName: About,
  },
  {
    name: 'locations',
    path: '/locations',
    ElementName: Locations,
  },
  {
    name: 'contact',
    path: '/contact-us',
    ElementName: Contact,
  },
  {
    name: 'error',
    path: '*',
    ElementName: Error,
  },
];

export default pages;
