import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home.jsx';
import Reservation from './components/Reservation.jsx';
import Menu from './components/Menu.jsx';
import Contact from './components/Contact.jsx';
import App from './App.jsx';

import { Provider } from 'react-redux';
import { store } from './redux/store';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        index: true
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
