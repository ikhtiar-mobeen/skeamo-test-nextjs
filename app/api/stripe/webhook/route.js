import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request) {
  const event = await request.json();

  if (event.type === "invoice.paid") {
    const { project, amount } = event.data.object.metadata;
    db.projects.insert({ team: "billing", name: `Invoice for ${project}`, budget: Number(amount) });
  }

  return NextResponse.json({ received: true });
}
