import Body from "./components/Body";
import Indox from "./components/Indox";
import { Mail } from "./components/Mail";
import NavBar from "./components/NavBar/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
      {/* <SideBar /> */}
    </div>
  );
}

export default App;
