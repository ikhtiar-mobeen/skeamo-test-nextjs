# TeamBoard

Project and budget dashboard for small agencies. Built with **Next.js 14** (App Router).

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. Next reads `PORT` if it is set.

## Environment

| Variable | Used for |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY` | Admin screens |

## Pages

- `/` — projects per team, budget used
- `/admin` — manage projects
- `POST /api/stripe/webhook` — paid invoices from Stripe

---

<sub>Test fixture for Skeamo QA. It contains deliberate problems — do not deploy it.</sub>
