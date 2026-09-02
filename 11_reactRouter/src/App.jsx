import { useEffect, useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();
      setUser(data);
      setLoading(false);
      setError("");
    };
    fetchUsers();
  }, []);

  const filteredUser = user.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) {
    return <h1>loading......</h1>;
  }

  return (
    <div className="bg-red-100 h-screen">
      <div className=" mx-auto max-w-md">
        <input
          type="text"
          placeholder="Search Users...."
          onChange={(e) => setSearch(e.target.value)}
        />
        {filteredUser.map((item) => (
          <div key={item.id} className="flex gap-3 mt-4">
            <h1>{item.id}</h1>
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
