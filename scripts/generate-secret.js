// Generate a random secret for Better Auth
const crypto = require('crypto');
const secret = crypto.randomBytes(32).toString('base64');
console.log('Generated BETTER_AUTH_SECRET:');
console.log(secret);
console.log('\nAdd this to your .env file as:');
console.log(`BETTER_AUTH_SECRET=${secret}`);

