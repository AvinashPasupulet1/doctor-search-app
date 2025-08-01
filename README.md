# doctor-search-app
This project is a responsive clone of Practo’s search and doctor listing interface, built as part of a technical assignment. It includes:   A home page with location and specialty-based search , A doctor listing page filtered by user input
# Doctor search app Assignment

## Tech Stack

- **Frontend:** Next.js + Tailwind CSS
- **Backend:** Node.js + Express + TypeScript

## Setup Instructions

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Search Page

- Go to `http://localhost:3000`
- Enter location and specialty
- It redirects to `/search` and shows filtered doctors

## Folder Structure

```
practo-clone-assignment/
├── frontend/
│   ├── pages/
│   └── styles/
├── backend/
│   ├── src/
│   └── data/
```

## Notes

- Backend API runs at `http://localhost:5000/api/doctors`
- You can add more doctors in `doctors.json`
