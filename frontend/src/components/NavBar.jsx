import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div>
        <NavLink className="mr-2" to="/">
          Home
        </NavLink>
        <NavLink className="mr-2" to="/simpsons">
          My simpsons
        </NavLink>
      </div>
    </nav>
  );
}
