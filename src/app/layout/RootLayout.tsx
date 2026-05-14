import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
