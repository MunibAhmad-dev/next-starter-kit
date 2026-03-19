# Clean Modular SaaS Starter Kit

A lightweight, production-ready SaaS starter kit built with Next.js 16, TypeScript, Clerk, Resend, shadcn/ui, and  Lago billing.

---

## 🚀 Features

- **Next.js 16 (App Router)**: Fast, modern, and scalable
- **Clerk Authentication**: Secure login, signup, and session management
- **Resend Emails**: Simple transactional email integration
- **shadcn/ui + Tailwind CSS**: Clean, accessible UI components
- **Modular Architecture**: Easy to extend and reuse across projects
- ** Billing (Lago)**: Ready-to-enable billing system

---

## 📁 Project Structure

```text
/src
  /app          # Next.js App Router (pages & layouts)
  /components   # Shared React components
  /modules      # Domain-specific modules
    /auth       # Authentication logic & wrappers
    /email      # Resend utility & templates
    /ui         # UI components (shadcn/ui)
    /billing    #  Lago billing integration
  /lib          # Core utilities
  /config       # Global configs
⚙️ Getting Started
1. Clone the repository
git clone https://github.com/MunibAhmad-dev/next-starter-kit
cd starter-kit
2. Install dependencies
npm install
3. Environment Setup

Copy .env.example to .env:

cp .env.example .env

Add your keys:

Clerk (Auth)

Resend (Email)

Lago (Optional billing)

4. Run locally
npm run dev

👉 App runs at:
http://localhost:3000

🔐 Authentication (Clerk)

Pre-configured auth system

Protected routes (e.g. /dashboard)

Easy to extend

📧 Email (Resend)

Use:

import { sendEmail } from '@/modules/email/resend';

await sendEmail({
  to: 'user@example.com',
  subject: 'Welcome!',
  html: '<p>Hello!</p>',
});
💳  Lago Billing  

Lago is included as an optional module for billing and usage-based pricing.

👉 Official Docs:
https://doc.getlago.com/guide/lago-self-hosted/docker

🐳 Option 1: Quick Setup (Recommended for testing)

Make sure:

Docker is installed

Docker Desktop is running

Run:
make sure to  clone the repo https://github.com/getlago/lago
 cd lago
 then run this

docker run -d --name lago -p 80:80 -p 3001:3000 getlago/lago:latest
✅ Access Lago

Frontend: http://localhost

API: http://localhost:3001

🔑 Setup Steps

Open: http://localhost

Sign up (create organization)

Go to Developers → API Keys

Copy API key

🔗 Add to your project .env
LAGO_API_URL=http://localhost:3001
LAGO_API_KEY=your_api_key_here
🧪 Test Billing Integration

You can test via API route:

http://localhost:3000/api/test-billing
🧠 Note

Lago is 

Only basic integration is included

Full billing system (subscriptions, usage tracking) can be added later

🐳 Option 2: Advanced Setup (Full Control)

If you want full control:

git clone https://github.com/getlago/lago
cd lago
git fetch --tags
git checkout $(git describe --tags --abbrev=0)
Setup environment
echo "LAGO_RSA_PRIVATE_KEY=\"$(openssl genrsa 2048 | base64 | tr -d '\n')\"" >> .env
source .env
Run Lago
docker compose up

👉 Access:

Frontend: http://localhost

API: http://localhost:3000
 (default)

⚠️ If your Next.js app is running on 3000, use:

API_PORT=3001
📌 Important Notes

Lago has its own .env file inside its folder

This is separate from your main project .env

Do not mix them

🐳 Docker (Starter Kit)

Run full app with Docker:

docker-compose up --build
🔄 CI/CD (Basic)

Basic GitHub Actions included for:

install

build verification

👉 Can be extended for deployment later

📚 Documentation

Next.js: https://nextjs.org/docs

Clerk: https://clerk.com/docs

Resend: https://resend.com/docs

shadcn/ui: https://ui.shadcn.com

Lago: https://doc.getlago.com

🧠 Philosophy

This starter kit is designed to be:

✅ Lightweight

✅ Modular

✅ Easy to extend

👉 Add features (billing, analytics, etc.) as modules — not core dependencies.


---

```md