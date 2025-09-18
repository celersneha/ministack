import { NavLink } from "react-router";

const Navbar = () => (
  <nav className="flex p-4 border-b border-gray-200 justify-between">
    <div>
      <NavLink to="/" className="font-bold text-lg">
        MiniStack
      </NavLink>
    </div>
    <div>
      <NavLink to="/" className="mr-4">
        Home
      </NavLink>
      <NavLink to="/projects" className="mr-4">
        Projects
      </NavLink>
      <NavLink to="/about" className="mr-4">
        About
      </NavLink>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
        Github
      </a>
    </div>
  </nav>
);

export default Navbar;
