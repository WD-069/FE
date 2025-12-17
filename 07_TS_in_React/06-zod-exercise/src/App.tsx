import "./App.css";
import useFetch from "./hooks/useFetch";
import { CatFactsSchema } from "./schema/catFacts";

function App() {
  const { data, error, loading } = useFetch(
    "https://catfact.ninja/fact",
    CatFactsSchema,
  );

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Zod Runtime Validation</h1>
      {loading && <p>Loading...</p>}
      <p style={{ textAlign: "center" }}>{data?.fact}</p>
      {error && (
        <p style={{ textAlign: "center", color: "crimson" }}>{error}</p>
      )}
      {/* <ProductList /> */}
    </div>
  );
}

export default App;
