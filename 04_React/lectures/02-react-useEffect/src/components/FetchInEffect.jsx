import { useEffect, useState } from "react";

const FetchInEffect = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // # Data Fetching with Cleanup
  useEffect(() => {
    // * AbortController is used to cancel the fetch request if the component unmounts.
    // * This prevents "state update on unmounted component" errors and race conditions.
    const controller = new AbortController();

    // * We cannot make the useEffect callback async directly.
    // * Instead, we define an async function inside and call it immediately.
    const fetchData = async () => {
      try {
        setLoading(true);
        // * Pass the signal to the fetch call to link it with the controller.
        const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setTodos(data);
      } catch (err) {
        // ! Check if the error was caused by the abort signal to avoid setting error state unnecessarily.
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // * Cleanup function: Aborts the fetch request when the component unmounts.
    return () => controller.abort();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {todos.map((item) => (
        <article key={item.id}>
          <h2>
            {item.title} <span>{item.completed ? "✅" : "❌"}</span>
          </h2>
        </article>
      ))}
    </div>
  );
};
export default FetchInEffect;
