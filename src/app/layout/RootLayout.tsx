import { Outlet, NavLink } from "react-router-dom";
import { Header, Subtitle } from "../components/StyledComponents";

export default function RootLayout() {
  return (
    <>
      <Header>
        <NavLink to="/">
          <Subtitle>Home</Subtitle>
        </NavLink>
        <NavLink to="/about">
          <Subtitle>About</Subtitle>
        </NavLink>
      </Header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
