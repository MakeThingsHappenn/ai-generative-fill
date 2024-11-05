interface Note {
  id?: number;
  title: string;
  content: string;
  created_at?: string;
}

interface Env {
  DB: D1Database;
}
