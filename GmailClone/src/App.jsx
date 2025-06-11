import Body from "./components/Body";
import Indox from "./components/Indox";
import { Mail } from "./components/Mail";
import NavBar from "./components/NavBar/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SendMail from "./components/SendMail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Indox />,
      },
      {
        path: "/mail/:id",
        element: <Mail />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="bg-[#F6F8FC] h-screen w-screen overflow-hidden">
      <NavBar />
      <RouterProvider router={router} />
      <div className="absolute w-[40%] bottom-0 right-16">
        <SendMail />
      </div>
    </div>
  );
}

export default App;
