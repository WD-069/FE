import { useCallback, useEffect, useState } from 'react';

export default function FetchOnClick() {
  const [people, setPeople] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);

  // Component status as a string instead of separate booleans (less state)
  // * [IMPULSE] Why is a single status string often better than multiple booleans like isLoading, isError?
  const [status, setStatus] = useState('loading'); // loading, error, success

  // useCallback: Memoized function
  // Signature like useEffect: useCallback(callback, dependencyArray)
  // - is only recreated when dependencies change
  // Empty dependency array [] = function is created only once (on mount)
  // ! [NOTE] Show what happens if we remove useCallback: The linter warns about the dependency in useEffect, or if we add it without useCallback, we get an infinite loop.
  const fetchData = useCallback(async (url) => {
    try {
      setStatus('loading');
      const res = await fetch(url);
      if (!res.ok) throw new Error('Fetch failed');

      const data = await res.json();
      setPeople(data.results);
      setNextUrl(data.next);
      setPrevUrl(data.previous);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }, []); // Empty dependency array = function is stable and never changes

  // Initial fetch on component mount
  // fetchData is now stable thanks to useCallback -> no infinite loop
  useEffect(() => {
    fetchData('https://swapi.tech/api/people');
  }, [fetchData]); // useEffect requires this dependency -> must be stabilized
  // ? [QUESTION] Why do we need to include fetchData in the dependency array here?

  // Event handlers call fetchData directly (not via state change)
  // Direct, synchronous approach instead of state-driven -> fewer re-renders
  const handlePrev = () => fetchData(prevUrl);
  const handleNext = () => fetchData(nextUrl);

  return (
    <main className='min-h-screen  bg-gray-900 p-8 font-sans'>
      <h1 className='text-3xl font-bold text-center text-gray-300'>Star Wars Characters | Fetch on Click</h1>

      <div className='flex justify-center gap-4 pt-6'>
        {prevUrl && (
          <button type='button' onClick={handlePrev}>
            Previous
          </button>
        )}
        {nextUrl && (
          <button type='button' onClick={handleNext}>
            Next
          </button>
        )}
      </div>

      {/* Status-based conditional rendering (instead of multiple booleans) */}
      {status === 'loading' && <p className='text-center text-gray-600 font-medium'>Loading...</p>}

      {status === 'error' && <p className='text-center text-red-500 font-semibold'>Sorry, try again :(</p>}

      <ul className='grid sm:grid-cols-2 gap-4'>
        {/* Render list only on success - explicit status check */}
        {status === 'success' &&
          people?.map((person) => (
            <li key={person.uid} className='bg-white p-4 rounded shadow text-center capitalize'>
              <span className='font-semibold text-gray-800'>{person.name}</span>
            </li>
          ))}
      </ul>
    </main>
  );
}
