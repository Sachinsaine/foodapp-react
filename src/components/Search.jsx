import { useEffect, useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  useEffect(() => {
    function demo() {
      console.log("demo function is excuted");
    }
    demo();
  }, [query]);
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter recipe"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
}
