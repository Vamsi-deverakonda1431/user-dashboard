import { useNavigate } from "react-router-dom";

function UserTable({ users }) {
  const navigate = useNavigate();

  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead style={{ backgroundColor: "#333", color: "white" }}>
        <tr>
          <th style={{ padding: "10px" }}>Name</th>
          <th style={{ padding: "10px" }}>Email</th>
          <th style={{ padding: "10px" }}>Phone</th>
          <th style={{ padding: "10px" }}>Company</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr
            key={user.id}
            onClick={() => navigate(`/user/${user.id}`)}
            style={{ cursor: "pointer", textAlign: "center" }}
          >
            <td style={{ padding: "10px" }}>{user.name}</td>
            <td style={{ padding: "10px" }}>{user.email}</td>
            <td style={{ padding: "10px" }}>{user.phone}</td>
            <td style={{ padding: "10px" }}>{user.company.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;