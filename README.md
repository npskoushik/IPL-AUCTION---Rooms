# 🏏 IPL Auction Website — Setup Guide

A full real-time IPL auction website for your college event.
**134 Players · 15 Teams · 100Cr budget each**

---

## 🔑 Passwords

### Admin
| Role  | Password    |
|-------|-------------|
| Admin | `ADMIN2025` |

### Teams
| Team                        | Password      |
|-----------------------------|---------------|
| Chennai Super Kings         | `CSK2025`     |
| Delhi Capitals              | `DC2025`      |
| Gujarat Titans              | `GT2025`      |
| Kolkata Knight Riders       | `KKR2025`     |
| Lucknow Super Giants        | `LSG2025`     |
| Mumbai Indians              | `MI2025`      |
| Punjab Kings                | `PBKS2025`    |
| Rajasthan Royals            | `RR2025`      |
| Royal Challengers Bengaluru | `RCB2025`     |
| Sunrisers Hyderabad         | `SRH2025`     |
| Deccan Chargers             | `DECCAN2025`  |
| Kochi Tuskers Kerala        | `KOCHI2025`   |
| Pune Warriors India         | `PUNE2025`    |
| Rising Pune Supergiant      | `RPS2025`     |
| Gujarat Lions               | `GL2025`      |

> 💡 You can change any password in `js/players.js` under `TEAMS_DATA` and in `index.html`.

---

## 🚀 Step-by-Step Setup

### Step 1 — Create a Firebase Project (5 mins)

1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Click **"Add project"** → name it `ipl-auction`
3. Disable Google Analytics (not needed) → click **Create Project**
4. Once created, click the **Web icon `</>`** to add a web app
5. Name it `ipl-auction-web` → click **Register App**
6. You'll see a `firebaseConfig` object — **copy it**, you'll need it shortly

### Step 2 — Enable Realtime Database

1. In Firebase console, click **"Build"** → **"Realtime Database"** in the left sidebar
2. Click **"Create Database"**
3. Choose your region (any is fine) → click **Next**
4. Select **"Start in test mode"** → click **Enable**
5. You'll see a database URL like `https://ipl-auction-default-rtdb.firebaseio.com` — note this down

### Step 3 — Paste Firebase Config into the Website

Open **`admin.html`** and **`bidder.html`** in a text editor (Notepad, VS Code, etc.)

In both files, find this section (marked with ⚠️):

```javascript
const firebaseConfig = {
  apiKey:            "PASTE_YOUR_API_KEY",
  authDomain:        "PASTE_YOUR_AUTH_DOMAIN",
  databaseURL:       "PASTE_YOUR_DATABASE_URL",
  ...
};
```

Replace it with the config you copied from Firebase. It will look like:

```javascript
const firebaseConfig = {
  apiKey:            "AIzaSyABC123...",
  authDomain:        "ipl-auction-xyz.firebaseapp.com",
  databaseURL:       "https://ipl-auction-xyz-default-rtdb.firebaseio.com",
  projectId:         "ipl-auction-xyz",
  storageBucket:     "ipl-auction-xyz.appspot.com",
  messagingSenderId: "123456789",
  appId:             "1:123456789:web:abc..."
};
```

Do this for **both** `admin.html` and `bidder.html`.

### Step 4 — Upload to GitHub

1. Go to [https://github.com](https://github.com) and sign up (free)
2. Click **"New repository"** → name it `ipl-auction` → click **Create**
3. On the repo page, click **"uploading an existing file"**
4. Drag and drop the entire `ipl-auction` folder contents
5. Click **"Commit changes"**

### Step 5 — Deploy on Vercel (gets you a live link!)

1. Go to [https://vercel.com](https://vercel.com) → sign up with GitHub
2. Click **"Add New Project"**
3. Select your `ipl-auction` GitHub repo → click **Import**
4. Leave all settings as default → click **Deploy**
5. In ~30 seconds you'll get a link like `ipl-auction.vercel.app` 🎉

### Step 6 — Initialize the Auction

1. Open your live link and go to `/admin.html`
2. Log in with password `ADMIN2025`
3. You'll see a setup popup — click **"Initialize Auction"**
4. This loads all 134 players and 15 teams into Firebase
5. Done! The auction is ready.

---

## 🎮 How to Run the Auction

### On Auction Day:

1. Share the link with all team owners (e.g. `https://ipl-auction.vercel.app`)
2. They go to the link, click **"Team Login"**, select their team and enter their password
3. You open `/admin.html` as admin
4. Click **"Start Auction"** — a random player is picked
5. Teams see the player live and can **Bid** or **Pass**
6. You watch bids come in on your admin panel
7. When bidding slows, click **"SELL"** → player goes to highest bidder
8. Or click **"UNSOLD"** if no one bids
9. Click **"Next Player"** for the next one
10. Use **"Re-enter"** on unsold players to put them back in the pool later

---

## 📁 File Structure

```
ipl-auction/
├── index.html       ← Login page (everyone starts here)
├── admin.html       ← Admin auction control panel
├── bidder.html      ← Team bidding view
├── js/
│   └── players.js   ← All player & team data
└── README.md        ← This file
```

---

## ❓ FAQ

**Q: Can two teams bid at the same time?**
Yes! All bids are live and real-time.

**Q: What if someone bids more than their budget?**
The system won't allow it — it checks their remaining budget before submitting.

**Q: Can I change the budget per team?**
Yes — in `js/players.js`, change `const BUDGET_PER_TEAM = 10000;` (value is in Lakhs, so 10000 = 100Cr)

**Q: Can I change minimum bid increment?**
Yes — in `js/players.js`, change `const MIN_BID_INCREMENT = 5;` (in Lakhs)

**Q: How do I add team logos later?**
You can add `<img>` tags in the player cards once I send you the logo version.

**Q: What if Firebase is slow?**
Make sure everyone is on the same WiFi. Firebase Realtime DB works best on a stable connection.

---

## 💰 Auction Rules Summary

- Each team starts with **100 Crore (10,000 Lakhs)**
- **134 players** across 5 categories
- Base prices range from **20L to 2Cr**
- Minimum bid raise: **5 Lakhs**
- Admin controls the pace — they sell or mark unsold
- Unsold players can be re-entered into the pool

---

Built with ❤️ for your college IPL event!
