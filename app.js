import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="app">
      <h1>React 73 – useEffect Fetch</h1>
      {loading && <p>Loading user...</p>}
      {user && (
        <div className="card">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.company.name}</p>
        </div>
      )}
    </div>
  );
}
