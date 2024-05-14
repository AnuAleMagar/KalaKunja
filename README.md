# Kalakunja (कलाकुन्ज)

**Kalakunja** means *garden of arts*—a marketplace shaped around fair value for makers and honest discovery for buyers.

## Overview

Many local artisans struggle because general platforms undervalue their work, bury them in noise, or take a large cut, so it is hard to reach customers who will pay a fair price. Kalakunja is a focused marketplace **for women entrepreneurs and local artisans**, where sellers can list authentic, locally made goods and buyers can find them with clearer pricing and intent. Women often lead or sustain these craft traditions; the platform is meant to support their economic independence, fair recognition, and a stronger voice in how their work is priced and sold.

The kinds of products we have in mind include traditional and everyday crafts—for example **doko** (woven bamboo baskets), **naaglo** (head strap for carrying loads), handwoven textiles, **crochet and knitwear**, **corsetry and tailored garments**, jewelry, pottery, wood carvings, leatherwork, paintings and prints, natural soaps and oils, metalwork, paper crafts, and other handmade or small-batch items. Sellers post listings with images, descriptions, prices, and categories so customers can browse and connect with work that reflects local skill and culture.

This repository contains a **React** web app for browsing and listing, and a **Node.js** API backed by **MongoDB** for accounts, listings, and related flows.

## Tools and technology

| Area | Stack |
|------|--------|
| Frontend | [React](https://react.dev/) 18, [React Router](https://reactrouter.com/), [Create React App](https://create-react-app.dev/) (`react-scripts`) |
| Styling & UI | [Tailwind CSS](https://tailwindcss.com/), [DaisyUI](https://daisyui.com/), [MUI Icons](https://mui.com/material-ui/material-icons/), [Font Awesome](https://fontawesome.com/) (React) |
| Maps & location | [Leaflet](https://leafletjs.com/), [React Leaflet](https://react-leaflet.js.org/), Leaflet plugins (geocoder, routing, search) |
| Other frontend | [react-speech-recognition](https://www.npmjs.com/package/react-speech-recognition) |
| Backend | [Node.js](https://nodejs.org/), [Express](https://expressjs.com/), [Mongoose](https://mongoosejs.com/) / [MongoDB Node driver](https://www.mongodb.com/docs/drivers/node/current/) |
| Auth & security | [bcrypt](https://www.npmjs.com/package/bcrypt), [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken), [express-validator](https://express-validator.github.io/docs/) |
| Email | [Nodemailer](https://nodemailer.com/) (e.g. verification flows) |
| Dev | [nodemon](https://nodemon.io/) (dependency of backend; optional for auto-restart) |

**Prerequisites:** a current [Node.js](https://nodejs.org/) LTS version and [npm](https://www.npmjs.com/), plus [MongoDB](https://www.mongodb.com/try/download/community) running locally (the app expects the database at `mongodb://localhost:27017/kalakunja` by default).

## How to run

### 1. Start MongoDB

Ensure the MongoDB service is running and accepting connections on `localhost:27017`. The server uses the database name **`kalakunja`**.

### 2. Backend API

```bash
cd backend
npm install
node server.js
```

The API listens on **port 8000** by default (`http://localhost:8000`). Signup, login, items, and related routes are mounted from `backend/server.js` and `backend/Routes/Auth.js`.

### 3. Frontend app

In a **second** terminal, from the **repository root** (not `backend/`):

```bash
npm install
npm start
```

The development server runs at **http://localhost:3000** and proxies the usual CRA workflow (hot reload, etc.).

### Production build (frontend only)

From the repository root:

```bash
npm run build
```

Static output is written to the `build/` folder, suitable for hosting behind any static file server or CDN, configured to talk to your deployed API URL as needed.

### Tests (frontend)

```bash
npm test
```

Runs the Create React App/Jest test runner in interactive mode.

---

Kalakunja is built to grow with the community: clearer listings, fair pricing, and a catalog that treats local art and craft as the main event—not an afterthought.
