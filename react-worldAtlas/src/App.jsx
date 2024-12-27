import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout";

import "./App.css";

import { Home } from "./pages/Home";
import { Contacts } from "./pages/Contacts";
import { Country } from "./pages/Country";
import { About } from "./pages/About";
import { ErrorPage } from "./pages/ErrorPage";
import { CountryDetails } from "./components/Layout/CountryDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <ErrorPage/>, 
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contacts",
        element: <Contacts/>
      },
      {
        path: "country",
        element: <Country/>
      },
      {
        path: "country/:id",
        element: <CountryDetails/>
      }
    ]
  },
  
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
};

export default App;


