## Project Setup

This project contains a React frontend and an Express backend.

## Local Development Setup

**Backend**

1. Navigate to backend folder:
2. cd backend
3. npm install
4. Create .env file:
   PORT=3000
   MONGO_URI=mongodb+srv://rusername:password@cluster0.vcjgmfi.mongodb.net/?appName=Cluster0
   CLIENT_ORIGIN=http://localhost:3001
5. Start server:
   nodemon server.js
   Server runs at:
   http://localhost:3000

**Frontend**

1. Navigate to frontend folder:
2. cd frontend
3. npm install
4. Create .env file:
   VITE_API_URL=http://localhost:3000
5. Start frontend:
   npm run dev
   Frontend runs at:
   http://localhost:5173

## Environment Files

Frontend uses different environment files:
.env → Local development
.env.production → Production (Render)
.env.production:
VITE_API_URL=https://your-backend.onrender.com

Backend production variables are set in Render dashboard.

## Deploying Backend (Render)

1. Push backend to GitHub
2. Create new Web Service on Render
3. Deploy Backend as ‘Web Service’ on Render
4. Choose ‘Git Provider’ and then select your Backend GitHub repository
5. Fill out the fieldsBuild Command -> npm install
   a. Start Command -> node server.js
   b. Instance Type -> Free
   c. Environment Variables -> Everything minus CLIENT_ORIGIN. Add this after you deploy your Frontend: CLIENT_ORIGIN=<RENDER FRONTEND URL>
6. Deploy Web Service

## Deloying Frontend(Render)

1. Deploy Frontend as ‘Static Site’ on Render
2. Choose ‘Git Provider’ and then select your Frontend GitHub repository
3. Fill out the fields
   a. Build Command -> npm install; npm run build
   b. Publish Directory -> dist (When using Vite. It may be build for other tools)
   c. Environment Variables -> VITE_API_URL=<RENDER BACKEND URL>
4. Deploy Static Site
5. Redirect and Rewrite Rules
   a. Source -> /\*
   b. Destination -> index.html
   c. Action -> Rewrite
   d. Save Changes
   If you still see Not Found, give it a few minutes to update and/or manually redeploy

**Test Backend**

https://your-backend.onrender.com/api/notes

Backend endpoint shows JSON

**Test Frontend**
Frontend loads
Able to add notes
Refresh keeps notes (until server restarts)

**Common Issues**

1. CLIENT_ORIGIN mismatch
2. Forgot to redeploy after env change
3. Frontend still pointing to localhost
