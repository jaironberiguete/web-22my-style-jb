<!-- .github/copilot-instructions.md -->
# AI Coding Assistant Instructions — web-22my-style-jb

This file collects the essential, actionable knowledge an AI coding assistant needs to be productive in this repository.

1) Quick architecture summary
- Backend: Django 5.2 project in `backend/` (entry: `backend/manage.py`). API support via Django REST Framework (`djangorestframework` in `backend/requirements.txt`). CORS is enabled in `backend/core/settings.py` (`CORS_ALLOW_ALL_ORIGINS = True`). The DB is SQLite at `backend/db.sqlite3`.
- Frontend: React + Vite app in `frontend/`. Entry: `frontend/src/main.jsx`. Uses TailwindCSS and Vite dev server (`npm run dev`) and router `react-router-dom`.

2) How the pieces interact (what to expect)
- The frontend and backend are separate processes: frontend runs on Vite (default port 5173), backend runs on Django (default port 8000). CORS is currently permissive so the frontend may call backend APIs at `http://localhost:8000` without extra config.
- There is no HTTP proxy configured in `frontend/vite.config.js`. If you need relative `/api/*` proxying during development, add `server.proxy` to `vite.config.js`.

3) Local setup & common commands
- Backend (assumes Python 3.x + venv):
  - Create venv, install deps:
    `cd backend && python -m venv .venv && source .venv/bin/activate && pip install -r requirements.txt`
  - Apply migrations & run server:
    `python manage.py migrate`
    `python manage.py runserver` (serves at `http://127.0.0.1:8000`)
  - Run Django tests: `python manage.py test`

- Frontend:
  - Install & run dev server:
    `cd frontend && npm install && npm run dev` (Vite default: `http://localhost:5173`)
  - Build: `npm run build`
  - Lint: `npm run lint`

4) Project-specific coding conventions & patterns
- React components live under `frontend/src/components/` and pages under `frontend/src/pages/`.
- Use named exports for components (example: `export const Navbar = () => { ... }`) — existing code imports components with named imports: `import { Navbar } from '../components/NavSection'`.
- JSX uses Tailwind utility classes for styling; prefer adding/adjusting Tailwind classes over writing new CSS files unless necessary. Tailwind config: `frontend/tailwind.config.js` and global CSS in `frontend/src/index.css`.
- Files use `.jsx` extensions for React components — keep that extension for consistency.

5) Integration notes & dependencies to be aware of
- `backend/requirements.txt` includes `djangorestframework_simplejwt` and `python-dotenv`. SimpleJWT may be present for planned auth but is not wired in `core/settings.py` yet — check `backend/core/settings.py` and `apps/` if implementing JWT.
- `backend/core/settings.py` currently contains a hardcoded `SECRET_KEY` and `DEBUG = True` — treat these as development-only and prefer using `.env` or environment variables for production secrets.
- Static/assets: frontend public assets are in `frontend/public/` (images under `public/images/`). Backend static handling is the default Django `STATIC_URL`.

6) Files to read first when changing behavior
- Backend: `backend/core/settings.py`, `backend/urls.py` (project routes), `backend/manage.py`, `backend/apps/` (app folders). Example: `apps/users/` is present but minimal.
- Frontend: `frontend/src/main.jsx`, `frontend/src/App.jsx`, `frontend/src/pages/Home.jsx`, `frontend/src/components/`.

7) What AI agents should avoid or double-check
- Do not commit production secrets. `backend/core/settings.py` currently exposes a secret key; avoid leaving secrets in commits.
- There is no database server config beyond SQLite — do not assume PostgreSQL unless the user requests it. `psycopg2-binary` is in requirements but SQLite is the active DB.
- Confirm API URL conventions with the developer before changing endpoints. There is no central API client file; front-end calls may be implemented ad-hoc.

8) Suggested quick edits & helpful first tasks
- Add `REST_FRAMEWORK` settings and JWT auth only if implementing auth flows (check for open endpoints first).
- Add a Vite proxy when frontend code must call relative `/api` paths in development:
  - Example (in `vite.config.js`):
    ```js
    server: { proxy: { '/api': 'http://localhost:8000' } }
    ```
- If adding backend packages, update `backend/requirements.txt` and include instructions for installing them in the README.

9) Where to run tests / lint locally
- Backend tests: run inside `backend` venv: `python manage.py test`.
- Frontend lint: `cd frontend && npm run lint`.

10) Contact & clarification prompts
- If something is ambiguous (desired API contract, auth flow, or deployment intentions), ask these short questions:
  - "Should the frontend call backend at a specific base URL or use relative `/api` paths?"
  - "Do you want JWT-based auth wired into DRF now, or left for later?"
  - "Should secrets be migrated to a `.env` file and `python-dotenv` used in `settings.py`?"

Keep edits minimal and test locally where possible. When in doubt, ask a brief clarifying question before changing architecture-level code.
