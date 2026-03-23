const fetch = require('node-fetch'); // wait node 18+ has global fetch

async function login() {
  const res = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'user@gmail.com', password: '1' })
  });
  const text = await res.text();
  console.log(res.status, text);
}
login();
