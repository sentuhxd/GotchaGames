import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Highscores from "./pages/Highscores";
import Error from "./pages/Error";
import Shop from "./pages/Shop";
import Chutes from "./pages/Chutes";
import Tictac from "./pages/Tictac";
import ChickenBingo from "./pages/ChickenBingo";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/highscores",
        element: <Highscores />,
      },
      {

        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/chutes",
        element: <Chutes />,

      },
      {
        path: "/ttt",
        element: <Tictac />,

      },
      {
        path: "/chickenbingo",
        element: <ChickenBingo />,
    }    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
