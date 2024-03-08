
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dasboard/components/Dashboard";

import Support from "./pages/Transaction/components/TransactionTable";
import TransactionPage from "./pages/Transaction/Transaction";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transactions",
    element: <TransactionPage />,
  },
  {
    path: "/Support",
    element: <Support />,
  },
]);

function App() {
  return (
    <>
  
      <RouterProvider router={router} />
    </>
  );
}

export default App;