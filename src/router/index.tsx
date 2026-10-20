// index.tsx
import { createBrowserRouter, type RouteObject } from 'react-router-dom'; 
import Drawer from '../pages/navigation/drawer'
import FirstPage from '../pages/home/firstPage'
import SecondPage from '../pages/count/secordPage'
import ThirdPage from '../pages/location/thirdpages'
import FourthPage from '../pages/about/fourthPage'
import FithPage from '../pages/collide/FivePage'
import SixPage from '../pages/rsvp/invitation'
import GuestList from '../pages/guest/guestList' // Capitalized component name

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
    // Match whatever URL path you want to use here (e.g., 'guest-list' or 'guest_list')
    path: 'guest_list', 
    element: <GuestList />, // Capitalized JSX tag
  }
];

export const router = createBrowserRouter(routes);