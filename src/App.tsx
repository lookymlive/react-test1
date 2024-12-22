import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState<{ login: string; html_url: string }[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.github.com/users/octocat');
      const jsonData = await response.json();
      setData([jsonData]); // Asegurarse de que jsonData sea un array
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Datos de Octocat</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.login && (
              <>
                <strong>Nombre:</strong> {item.login}
              </>
            )}
            <br />
            {item.html_url && (
              <>
                <strong>URL del perfil:</strong> {item.html_url}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;