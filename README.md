# 🧠 Replika Companion App

An open-source, privacy-first AI chat companion designed to compete with Replika while prioritizing user control, extensibility, and ethical design.

---

## 🛠️ Tech Stack

- **Backend**: [FastAPI](https://fastapi.tiangolo.com/)
- **Frontend**: React + TailwindCSS
- **Memory Engine** (coming soon): Pinecone + LangChain
- **Voice Support** (optional): ElevenLabs or Coqui.ai
- **Containerization**: Docker + Docker Compose

---

## 🚀 Getting Started

### ✅ Prerequisites

- [Docker](https://www.docker.com/) installed

### 🔧 Local Development

To start the app locally with Docker:

```bash
docker-compose up --build
```

Then open:

- Frontend: [http://localhost:3000](http://localhost:3000)
- API Docs: [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 📁 Project Structure

```
replika_companion_starter/
├── backend/               # FastAPI application
│   ├── app/
│   │   └── api/routes.py  # Sample chat endpoint
│   └── requirements.txt   # Python dependencies
├── frontend/              # React UI
│   └── src/pages/         # Home page with chat box
├── docker-compose.yml     # Dev orchestration
├── README.md              # This file
```

---

## 🧭 Roadmap

- [ ] 🔄 Integrate LangChain + Pinecone for memory persistence
- [ ] 🗣️ Add voice output using ElevenLabs or Coqui.ai
- [ ] 🧩 Implement persona configuration via JSON/DB
- [ ] ☁️ Deploy to Render or GCP Cloud Run
- [ ] 🔐 Add authentication layer

---

## 📜 License

[MIT](https://opensource.org/licenses/MIT)

---

## 👤 Author

Eric Powell — [@techric](https://github.com/techric)

---

## 🤝 Contributions

Feel free to fork, open issues, or submit PRs. This project is in active early-stage development.
