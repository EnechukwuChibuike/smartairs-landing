import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <main>
      <div className="h-[10vh]">
        <Header />
      </div>
      <Outlet />
    </main>
  );
}
