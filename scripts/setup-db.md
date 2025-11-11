# Database Setup Instructions

## Prerequisites
1. Create a Neon PostgreSQL database at https://console.neon.tech
2. Copy your connection string from the Neon dashboard

## Setup Steps

### 1. Install Dependencies
```bash
npm install
```

If you encounter issues with `better-sqlite3`, you can manually remove it:
```bash
# Remove better-sqlite3 from node_modules
rm -rf node_modules/better-sqlite3
# Or on Windows:
rmdir /s node_modules\better-sqlite3
```

### 2. Configure Environment Variables
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Update `.env` with your values:
   - `BETTER_AUTH_SECRET`: Generate a random string (you can use: `openssl rand -base64 32`)
   - `DATABASE_URL`: Your Neon PostgreSQL connection string
   - `BETTER_AUTH_URL`: Your app URL (http://localhost:3000 for development)
   - `NEXT_PUBLIC_APP_URL`: Same as BETTER_AUTH_URL

### 3. Generate Database Schema
```bash
npx @better-auth/cli generate
```

This will create migration files in your project.

### 4. Run Database Migrations
```bash
npx @better-auth/cli migrate
```

This will create all required tables in your Neon database.

### 5. Start Development Server
```bash
npm run dev
```

## Troubleshooting

### better-sqlite3 Installation Issues
If you're on Windows and getting Visual Studio build errors for better-sqlite3:
1. We don't need better-sqlite3 since we're using PostgreSQL
2. Manually delete the folder: `node_modules/better-sqlite3`
3. Continue with the setup - it won't affect the PostgreSQL setup

### Database Connection Issues
- Make sure your DATABASE_URL includes `?sslmode=require` for Neon
- Verify your Neon database is running and accessible
- Check that your IP is whitelisted in Neon (if required)

