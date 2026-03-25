import { useEffect, useState } from "react";
import UserTable from "../components/UserTable";
import SearchBar from "../components/SearchBar";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortField, setSortField] = useState("name");

  // Fetch users
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  // Filter users
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  // Sort users (by name or company)
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    const fieldA = sortField === "name" ? a.name : a.company.name;
    const fieldB = sortField === "name" ? b.name : b.company.name;

    return sortOrder === "asc"
      ? fieldA.localeCompare(fieldB)
      : fieldB.localeCompare(fieldA);
  });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>User Directory Dashboard</h1>

      {/* Search */}
      <SearchBar setSearch={setSearch} />

      {/* Sorting Controls */}
      <div style={{ margin: "10px 0" }}>
        <button onClick={() => setSortField("name")} style={{ marginRight: "10px" }}>
          Sort by Name
        </button>

        <button onClick={() => setSortField("company")} style={{ marginRight: "10px" }}>
          Sort by Company
        </button>

        <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
          Toggle Order ({sortOrder})
        </button>
      </div>

      {/* Table */}
      <UserTable users={sortedUsers} />
    </div>
  );
}

export default Dashboard;