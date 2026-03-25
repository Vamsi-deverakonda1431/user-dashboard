import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p><b>Username:</b> {user.username}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Phone:</b> {user.phone}</p>
      <p><b>Website:</b> {user.website}</p>
      <p><b>Company:</b> {user.company.name}</p>
      <p><b>City:</b> {user.address.city}</p>
    </div>
  );
}

export default UserDetail;