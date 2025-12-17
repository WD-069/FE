import { useEffect, useState } from "react";
import z from "zod";

const useFetch = <T extends z.ZodType>(url: string, schema: T) => {
  const [data, setData] = useState<z.infer<typeof schema>>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(url, { signal: controller.signal });

        if (!res.ok) {
          throw Error("HTTP error");
        }

        const d = await res.json();

        const { data, error, success } = schema.safeParse(d);

        if (!success) {
          throw new Error(z.prettifyError(error));
        }

        setData(data);
        // console.log(data);
      } catch (err) {
        if (err instanceof Error) {
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [schema, url]);

  return { data, error, loading };
};
export default useFetch;
