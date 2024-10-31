import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await fetch(`${apiUrl}`, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Erro na requisição à API");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Erro ao buscar dados", error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>opa</h1>
    </div>
  );
}

export default App;
