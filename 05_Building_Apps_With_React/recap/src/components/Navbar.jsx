import {Link} from "react-router-dom"
import CartLink from "./CartLink";

function Navbar() {
  return (
    <nav className='navbar bg-secondary shadow-sm text-white flex justify-between p-4'>
      <div className='flex-1 font-bold'>
        <Link className='btn btn-ghost bg-secondary text-xl' to={'/'}>
          eCommerce
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal items-center px-1'>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li className='dropdown dropdown-end'>
            <CartLink />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar