"use client";

import { useEffect, useState } from "react";

// Pretend session until auth is wired up
const user = { name: "Riley", role: "member" };

export default function Admin() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/api/projects").then((r) => r.json()).then(setProjects);
  }, []);

  async function remove(id) {
    await fetch(`/api/projects?id=${id}`, { method: "DELETE" });
    setProjects(projects.filter((p) => p.id !== id));
  }

  return (
    <main>
      <h1>Admin</h1>
      <table>
        <tbody>
          {projects.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.team}</td>
              <td>{user.role === "admin" && <button onClick={() => remove(p.id)}>Delete</button>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
