#!/usr/bin/env node

/**
 * Better Auth Setup Script
 * This script helps you set up Better Auth with Neon PostgreSQL
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

console.log('🚀 Better Auth Setup for Supernovas Academy\n');

// Generate secret
const secret = crypto.randomBytes(32).toString('base64');

// Check if .env exists
const envPath = path.join(process.cwd(), '.env');
const envExists = fs.existsSync(envPath);

if (envExists) {
  console.log('⚠️  .env file already exists. Please update it manually with the following values:\n');
} else {
  // Create .env file
  const envContent = `# Better Auth Configuration
BETTER_AUTH_SECRET=${secret}
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Database Configuration (Neon PostgreSQL)
# Get your connection string from: https://console.neon.tech
# Format: postgresql://user:password@host/database?sslmode=require
DATABASE_URL=your-neon-connection-string-here
`;

  fs.writeFileSync(envPath, envContent);
  console.log('✅ Created .env file\n');
}

console.log('📋 Next Steps:\n');
console.log('1. Get your Neon PostgreSQL connection string:');
console.log('   - Go to https://console.neon.tech');
console.log('   - Create a new project (or use existing)');
console.log('   - Copy the connection string');
console.log('   - Make sure it includes ?sslmode=require\n');

console.log('2. Update .env file:');
console.log('   - Open .env file');
console.log('   - Replace DATABASE_URL with your Neon connection string\n');

console.log('3. Generate database schema:');
console.log('   npm run auth:generate\n');

console.log('4. Run database migrations:');
console.log('   npm run auth:migrate\n');

console.log('5. Start development server:');
console.log('   npm run dev\n');

console.log('✨ Setup complete! Follow the steps above to finish configuration.\n');

if (!envExists) {
  console.log('📝 Generated BETTER_AUTH_SECRET:', secret);
  console.log('   (This has been added to your .env file)\n');
}

