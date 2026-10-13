// Stand-in for the Supabase tables while we build the UI.
const projects = [
  { id: "p1", team: "design", name: "Website refresh", budget: 12000, spent: 4300.1 },
  { id: "p2", team: "design", name: "Logo pack", budget: 2500, spent: 2499.9 },
  { id: "p3", team: "dev", name: "Client portal", budget: 30000, spent: 12750.35 },
  { id: "p4", team: "dev", name: "Mobile app", budget: 45000, spent: 0 },
];
let nextId = 5;

export const db = {
  projects: {
    list: (team) => (team ? projects.filter((p) => p.team === team) : projects),
    insert: (row) => {
      const saved = { id: `p${nextId++}`, spent: 0, ...row };
      projects.push(saved);
      return saved;
    },
    delete: (id) => {
      const i = projects.findIndex((p) => p.id === id);
      if (i >= 0) projects.splice(i, 1);
    },
  },
};
