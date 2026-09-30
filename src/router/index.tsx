import { createBrowserRouter, type RouteObject } from 'react-router-dom'; 
import Drawer from '../pages/navigation/drawer'
import FirstPage from '../pages/home/firstPage'
import SecondPage from '../pages/count/secordPage'
import ThirdPage from '../pages/location/thirdpages'
import FourthPage from '../pages/about/info'
import FithPage from '../pages/guest/guest_list'
import SixPage from '../pages/rsvp/invitation'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Drawer />, 
    children: [
      {
        index: true,
        element: <FirstPage />,
      },
      {
        path: 'home',
        element: <SecondPage />,
      },
      {
        path: 'location',
        element: <ThirdPage />,
      },
      {
        path: 'about',
        element: <FourthPage />,
      },
      {
        path: 'guest',
        element: <FithPage />,
      },
      {
        path: 'rsvp',
        element: <SixPage />,
      },
      
    ],
  },
];

export const router = createBrowserRouter(routes);