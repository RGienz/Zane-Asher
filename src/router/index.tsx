// index.tsx
import { createBrowserRouter, type RouteObject } from 'react-router-dom'; 
import Drawer from '../pages/navigation/drawer'
import FirstPage from '../pages/One/firstPage'
import SecondPage from '../pages/Two/secordPage'
import ThirdPage from '../pages/Three/thirdpages'
import FourthPage from '../pages/Four/fourthPage'
import FithPage from '../pages/Five/FivePage'
import SixPage from '../pages/Six_rsvp/invitation'
import GuestList from '../pages/guest/guestList' 

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
  {
    path: 'guest_list', 
    element: <GuestList />, // Capitalized JSX tag
  }
];

export const router = createBrowserRouter(routes);