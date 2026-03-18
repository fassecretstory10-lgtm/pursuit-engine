# Pursuit Engine

Cinematic Short Prompt Generator — Google Flow + Grok + CapCut

## Deploy em 5 minutos

### 1. GitHub
1. Vai a github.com → New repository → nome: `pursuit-engine` → Create
2. Descompacta este zip
3. Abre terminal na pasta e corre:

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/SEU_USERNAME/pursuit-engine.git
git push -u origin main
```

### 2. Vercel
1. Vai a vercel.com → Login com GitHub
2. "Add New Project" → importa o repo `pursuit-engine`
3. Clica **Deploy** (as configurações já estão no vercel.json)
4. Pronto — URL tipo `pursuit-engine.vercel.app`

## Uso
- **Claude** — funciona logo (usa o crédito do Claude)
- **Gemini** — clica no toggle no header → insere a tua chave do [aistudio.google.com](https://aistudio.google.com) → Guardar
  - A chave fica no localStorage do browser
  - A chamada passa pelo proxy Vercel (`/api/gemini`) — sem problemas de CORS
