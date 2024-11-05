interface Env {
  DB: any;
}

export async function GET(request: Request, { env }: { env: Env }) {
  try {
    console.log("get note", env);
    const result = await env.DB.prepare("SELECT * FROM notes").all();
    return Response.json(result.results);
  } catch (error) {
    console.error("Database error:", error);
    return Response.json({ error: "Failed to fetch notes" }, { status: 500 });
  }
}

export async function POST(request: Request, { env }: { env: Env }) {
  try {
    const { title, content } = await request.json();
    const result = await env.DB.prepare(
      "INSERT INTO notes (title, content) VALUES (?, ?)"
    )
      .bind(title, content)
      .run();

    return Response.json({
      success: true,
      id: result.lastRowId,
    });
  } catch (error) {
    console.error("Database error:", error);
    return Response.json({ error: "Failed to create note" }, { status: 500 });
  }
}

