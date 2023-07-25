import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav className="bg-primary border-gray-200">
        <div className="max-w-screen-xl mx-auto p-4">
          <a href="/">
            <span className="self-center text-2xl text-white font-semibold whitespace-nowrap">
              SAT Scan
            </span>
          </a>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer className="bg-primary h-20 "></footer>
    </div>
  );
}

export default Layout;
