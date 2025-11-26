import { useCallback, useEffect, useState } from "react";

function App() {
  const [people, setPeople] = useState(null);
  // const [url, setUrl] = useState("https://swapi.tech/api/people");
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [status, setStatus] = useState("loading"); // loading, error, success

  const fetchData = useCallback(async (url) => {
    try {
      // setLoading(true);
      setStatus("loading");
      const res = await fetch(url);
      if (!res.ok) throw new Error("Fetch failed");
      const data = await res.json();
      // console.log(data);
      setPeople(data.results);
      setNextUrl(data.next);
      setPrevUrl(data.previous);
      setStatus("success");
    } catch (err) {
      console.log(err);
      // setError(err.message);
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    fetchData("https://swapi.tech/api/people");
  }, [fetchData]);

  const handlePrev = () => fetchData(prevUrl);
  const handleNext = () => fetchData(nextUrl);

  return (
    <main className="min-h-screen bg-gray-900 p-8 font-sans">
      <h1 className="text-center text-3xl font-bold text-gray-300">
        Star Wars Characters
      </h1>

      {status === "loading" && (
        <p className="text-center font-medium text-gray-600">Loading...</p>
      )}
      {status === "error" && (
        <p className="text-center font-semibold text-red-500">Try again</p>
      )}

      <div className="flex justify-center gap-4 pt-6">
        {prevUrl && (
          <button type="button" onClick={handlePrev}>
            Previous
          </button>
        )}
        {nextUrl && (
          <button type="button" onClick={handleNext}>
            Next
          </button>
        )}
      </div>

      <ul className="grid gap-4 sm:grid-cols-2">
        {status === "success" &&
          people?.map((person) => (
            <li
              key={person.uid}
              className="rounded bg-white p-4 text-center capitalize shadow"
            >
              <span className="font-semibold text-gray-800">{person.name}</span>
            </li>
          ))}
      </ul>
    </main>
  );
}

export default App;
