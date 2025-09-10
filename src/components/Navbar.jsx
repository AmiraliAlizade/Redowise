import { FaBell } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="flex justify-between p-4 w-screen text-5xl shadow-[0_1px_2px_rgba(119,119,119,0.5)]">
      <span>
        <FiMenu />
      </span>
      <h1>Redo-wise</h1>
      <span>
        <FaBell />
      </span>
    </nav>
  );
}

export default Navbar;
