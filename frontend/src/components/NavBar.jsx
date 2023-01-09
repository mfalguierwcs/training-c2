import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div>
        <NavLink className="mr-2" to="/">
          Accueil
        </NavLink>
        <NavLink className="mr-2" to="/simpsons">
          Simpsons
        </NavLink>
      </div>
    </nav>
  );
}
