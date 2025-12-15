import { useRef } from 'react';
import { NavLink } from 'react-router';

import { useBooking } from '../../contexts/BookingContext';
import { type UseableThemes, useTheme } from '../../contexts/ThemeContextProvider';

const NavBar = () => {
  const { theme, changeTheme } = useTheme();
  const {
    bookingState: { premium },
  } = useBooking();

  // # Ref Typing
  // * 'useRef' needs the type of the DOM element it will attach to (HTMLDialogElement).
  // * Initializing with 'null' is common for DOM refs.
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <div className='navbar bg-base-100 shadow-sm'>
      {/* Optional Chaining (?.) safeguards against null if ref isn't attached yet */}
      <button onClick={() => dialogRef.current?.showModal()}>Modal</button>
      <dialog ref={dialogRef} className='inset-1/2 border-cyan-500 bg-indigo-700 p-3'>
        Hello from Dialog
      </dialog>

      <div className='flex-1'>
        <a className='btn btn-ghost text-xl' href='/'>
          Travel Agency
        </a>
        <select
          defaultValue={theme}
          className='select'
          // # Type Assertion (Casting)
          // * We tell TS to treat 'e.target.value' as 'UseableThemes'.
          // ! Be careful with assertions; only use them when you are sure the value matches the type.
          onChange={(e) => changeTheme(e.target.value as UseableThemes)}
        >
          <option value='halloween'>Halloween</option>
          <option value='cyberpunk'>Cyberpunk</option>
          <option value='dim'>Dim</option>
          <option value='abyss'>Abyss</option>
          <option value='retro'>Retro</option>
        </select>
        {premium && <span> NOICE!! - Thanks</span>}
      </div>
      <nav className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'underline underline-offset-2' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className={({ isActive }) => (isActive ? 'underline underline-offset-2' : '')}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/destinations'
              className={({ isActive }) => (isActive ? 'underline underline-offset-2' : '')}
            >
              Destinations
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              className={({ isActive }) => (isActive ? 'underline underline-offset-2' : '')}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
