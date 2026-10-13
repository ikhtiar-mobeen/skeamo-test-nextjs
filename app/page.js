"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const TEAMS = ["design", "dev"];

export default function Home() {
  const [team, setTeam] = useState("design");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`/api/projects?team=${team}`)
      .then((r) => r.json())
      .then(setProjects);
  }, []);

  const totalSpent = projects.reduce((sum, p) => sum + p.spent, 0);

  return (
    <main>
      <h1>TeamBoard</h1>
      <p>Last refreshed {new Date().toLocaleTimeString()}</p>

      <div style={{ display: "flex", gap: 8 }}>
        {TEAMS.map((t) => (
          <button key={t} onClick={() => setTeam(t)} style={{ fontWeight: t === team ? 700 : 400 }}>
            {t}
          </button>
        ))}
      </div>

      <ul>
        {projects.map((p, i) => (
          <li key={i}>
            <input defaultValue={p.name} /> — {Math.round((p.spent / p.budget) * 100)}% of budget used
          </li>
        ))}
      </ul>

      <p>Total spent: ${totalSpent}</p>
      <Link href="/admin">Admin</Link>
    </main>
  );
}
