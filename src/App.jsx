cat << 'EOF' > src/App.jsx
import { useState } from "react";

export default function PursuitEngine() {
  const [appMode, setAppMode] = useState(null);
  const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function generate() {
    setLoading(true);
    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sys: "Director mode.",
          msgs: [{ role: "user", content: "Sequence for: " + subject }]
        })
      });
      const data = await response.json();
      setResult(data.text || "Sem resposta");
    } catch (e) {
      alert("Erro: " + e.message);
    }
    setLoading(false);
  }

  if (!appMode) return (
    <div style={{ height: '100vh', display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center', background: '#080b12', color: 'white' }}>
      <button onClick={() => setAppMode("pursuit")} style={{ padding: '20px', background: '#e05030', color: 'white', border: 'none', borderRadius: '8px' }}>PURSUIT</button>
      <button onClick={() => setAppMode("rescue")} style={{ padding: '20px', background: '#20b060', color: 'white', border: 'none', borderRadius: '8px' }}>RESCUE</button>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', background: '#080b12', color: 'white', padding: '20px' }}>
      <button onClick={() => setAppMode(null)}>← VOLTAR</button>
      <div style={{ margin: '20px 0' }}>
        <input value={subject} onChange={e => setSubject(e.target.value)} placeholder="Tema..." style={{ padding: '10px' }} />
        <button onClick={generate} disabled={loading} style={{ marginLeft: '10px', padding: '10px' }}>
          {loading ? "A GERAR..." : "GERAR"}
        </button>
      </div>
      {result && <div style={{ background: '#111', padding: '15px' }}>{result}</div>}
    </div>
  );
}
EOF