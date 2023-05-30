import React, { useEffect, useState } from "react";
import { Top } from "./pages/Top";
import { Login } from "./pages/Login";
import { Layout } from "./components/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./providers/AuthContext";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Top />
  },
  {
    path: "/login",
    element: <Login />
  },
]);

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <AuthProvider value={currentUser}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </AuthProvider>
  );
};

export default App;
