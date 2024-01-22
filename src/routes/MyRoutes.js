import React from "react";
import Admin from "../components/Admin/Admin";
import ReadProduct from "../components/ReadProduct/ReadProduct";
import { Route, Routes } from "react-router-dom";

const MyRoutes = () => {
  const MY_ROUTES = [
    { link: "/admin", element: <Admin />, id: 1 },
    { link: "/menu", element: <ReadProduct />, id: 1 },
  ];
  return (
    <Routes>
      {MY_ROUTES.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MyRoutes;
