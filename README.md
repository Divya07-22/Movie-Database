# Netflix Clone (Full-Stack)

A premium Netflix Clone application with a custom backend authentication system, responsive UI, and TMDB integration.

## Features

### 🎬 Frontend (React + Tailwind CSS)
*   **Netflix Design System**: Pixel-perfect UI with animations, hero banner, and row sliders.
*   **Browse Page**: Dynamic content fetching from TMDB API (Trending, Top Rated, Originals, etc.).
*   **Authentication Flow**: Custom built Login and Registration pages with error handling.
*   **Responsive**: Fully responsive implementation for desktop and mobile.

### 🔐 Backend (Node.js + Express + MySQL)
*   **Secure Authentication**:
    *   **Registration**: Hashes passwords using `bcrypt` before storing in the database.
    *   **Login**: Verifies credentials and issues JWT tokens.
*   **Database Integration**: Connects to Aiven MySQL for persistent user data storage.
*   **API Architecture**: RESTful endpoints for `/api/auth/register` and `/api/auth/login`.

## Tech Stack
*   **Frontend**: React, Vite, Tailwind CSS, Axios, React Router, Framer Motion.
*   **Backend**: Node.js, Express.js, MySQL2, Bcrypt, JsonWebToken.
*   **Database**: Aiven MySQL (Cloud).
*   **External API**: TMDB (The Movie Database).

## System Logic & Data Flow

### 1. Registration Flow
1.  **User Input**: User enters Name, Email, Password, and Phone.
2.  **Encoding**: The server receives the password and **hashes** it (e.g., `$2b$10$...`). It **NEVER** stores plain text.
3.  **Storage**: The user is saved to the `users` table in the database.
4.  **Redirect**: On success, the user is redirected to the Login page.

### 2. Login Flow
1.  **User Input**: User enters Username and Password.
2.  **Fetch**: Server looks up the user in the database.
3.  **Comparison**: Server compares the input password with the stored hash.
4.  **Access**: If they match, a token is issued and the user is redirected to the Browse page.

## Installation & Setup

### Prerequisites
*   Node.js installed.
*   MySQL Database URL (Already configured in `.env`).
*   TMDB API Key (Already configured in `.env`).

### 1. Run the Backend
```bash
cd server
npm install
npm run dev
```
*Server runs on port 5000.*

### 2. Run the Frontend
```bash
cd client
npm install
npm run dev
```
*Client runs on http://localhost:5173.*

## License
MIT
