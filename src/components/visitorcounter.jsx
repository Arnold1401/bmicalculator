import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("http://173.255.115.113:8080/api/visit") // ← GANTI DENGAN IP KAMU
      .then((res) => res.json())
      .then((data) => {
        if (data.count !== undefined) {
          setCount(data.count);
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        console.error("Error fetching visitor count:", err);
        setError(true);
      });
  }, []);

  if (error) {
    return (
      <p className="text-red-400 text-sm text-center">
        Failed to load visitor count.
      </p>
    );
  }

  if (count === null) {
    return (
      <p className="text-gray-400 text-center">Loading visitor count...</p>
    );
  }

  return (
    <p className="text-center text-lg font-bold text-green-400">
      🔥 Visitor Count: {count}
    </p>
  );
}
