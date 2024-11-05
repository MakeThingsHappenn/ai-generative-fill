"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface Note {
  id: number;
  title: string;
  content: string;
  created_at?: string;
}

export default function Page() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNotes() {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:8788/api/note");
        if (!response.ok) throw new Error("Failed to fetch notes");
        const data = await response.json();
        setNotes(data);
      } catch (err) {
        console.log("fetch note err");
      } finally {
        setLoading(false);
      }
    }

    fetchNotes();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <ul className="space-y-4">
        {notes.map((note) => (
          <li key={note.id} className="border rounded-lg p-4 hover:bg-gray-50">
            <h3 className="font-semibold text-lg">{note.title}</h3>
            <p className="text-gray-600 mt-2">{note.content}</p>
            {note.created_at && (
              <span className="text-sm text-gray-400">
                {new Date(note.created_at).toLocaleDateString()}
              </span>
            )}
          </li>
        ))}
      </ul>

      {notes.length === 0 && (
        <div className="text-center text-gray-500">No notes found</div>
      )}

      <Button
        className="mt-4"
        onClick={() => {
          // 这里可以添加创建新笔记的功能
        }}
      >
        Add New Note
      </Button>
    </div>
  );
}

