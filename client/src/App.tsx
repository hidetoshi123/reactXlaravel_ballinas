import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Gender from "./components/pages/genders/Gender";
import EditGender from "./components/pages/genders/EditGender";
import DeleteGender from "./components/pages/genders/DeleteGender";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Gender />,
  },
  {
    path:"/gender/edit",
    element: <EditGender/>
  },
  {
    path:"/gender/delete",
    element: <DeleteGender/>
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;