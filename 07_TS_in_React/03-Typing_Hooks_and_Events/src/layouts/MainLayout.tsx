import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';

import { Footer, NavBar } from '../components';
import type { Destination } from '../types';

const MainLayout = () => {
  // # State Typing (Generics)
  // * 'useState' is generic. We specify that 'destinations' can be an array of 'Destination' OR 'null'.
  // * This forces us to check for null before using the data.
  const [destinations, setDestinations] = useState<Destination[] | null>(null);

  useEffect(() => {
    fetch('/travel.json')
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);

  return (
    <div className='flex min-h-screen flex-col'>
      <NavBar />
      <main className='container mx-auto mb-auto px-4 py-4'>
        {/* Conditional rendering based on state availability */}
        {destinations ? (
          <Outlet context={destinations} />
        ) : (
          <span className='loading loading-spinner loading-xl'></span>
        )}
      </main>
      <Footer />
    </div>
  );
};
export default MainLayout;
