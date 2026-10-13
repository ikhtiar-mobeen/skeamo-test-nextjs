import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request) {
  const team = request.nextUrl.searchParams.get("team");
  return NextResponse.json(db.projects.list(team));
}

export async function POST(request) {
  const body = await request.json();
  const project = db.projects.insert({ team: body.team, name: body.name, budget: body.budget });
  return NextResponse.json(project, { status: 201 });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  db.projects.delete(id);
  return NextResponse.json({ ok: true });
}
