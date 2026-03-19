# 🚀 Clean Modular SaaS Starter Kit

A lightweight, production-ready SaaS starter kit built with **Next.js 16**, **TypeScript**, **Clerk**, **Resend**, **shadcn/ui**, and **Lago** billing.

[![Next.js](https://img.shields.io/badge/Next.js-16.1.7-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Clerk](https://img.shields.io/badge/Auth-Clerk-6C47FF?style=flat-square&logo=clerk)](https://clerk.com/)
[![Resend](https://img.shields.io/badge/Email-Resend-000000?style=flat-square&logo=resend)](https://resend.com/)
[![Lago](https://img.shields.io/badge/Billing-Lago-00D1FF?style=flat-square&logo=lago)](https://getlago.com/)

---

## ✨ Features

- **⚡ Next.js 16 (App Router)**: Fast, modern, and scalable architecture.
- **🔐 Clerk Authentication**: Pre-configured secure login, signup, and user management.
- **📧 Resend Emails**: Simple transactional email integration for the entire app.
- **🎨 shadcn/ui + Tailwind CSS**: Clean, accessible, and premium UI components.
- **📦 Modular Architecture**: Designed for reusability and easy extension.
- **💳 Lago Billing**: Self-hosted usage-based billing system ready for integration.

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
    /billing    # Lago billing integration
  /lib          # Core utilities
  /config       # Global configurations
```

---

## ⚙️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/MunibAhmad-dev/next-starter-kit
cd starter-kit
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Setup
Copy the example environment file:
```bash
cp .env.example .env
```

Add your keys to `.env`:
- **Clerk**: For authentication and user management.
- **Resend**: For transactional emails.
- **Lago**: For billing (optional, see setup below).

### 4. Run locally
```bash
npm run dev
```
👉 Access the app at: [http://localhost:3000](http://localhost:3000)

---

## 🧬 Core Modules

### 🔐 Authentication (Clerk)
Provides a complete authentication solution out-of-the-box.
- Protected routes (e.g., `/dashboard`)
- Customizable sign-in/sign-up components
- Secure session management

### 📧 Email (Resend)
Easily send emails from anywhere in your app:
```typescript
import { sendEmail } from '@/modules/email/resend';

await sendEmail({
  to: 'user@example.com',
  subject: 'Welcome!',
  html: '<p>Hello!</p>',
});
```

---

## 💳 Lago Billing Integration

Lago is included as a powerful optional module for billing and usage-based pricing.

> [!TIP]
> **Official Docs:** [Lago Self-Hosted Guide](https://doc.getlago.com/guide/lago-self-hosted/docker)

### 🐳 Option 1: Quick Setup (Recommended for testing)
Ideal for getting started quickly with Docker.

1. **Prerequisites**: Ensure Docker Desktop is installed and running.
2. **Run Lago**:
   ```bash
   docker run -d --name lago -p 80:80 -p 3001:3000 getlago/lago:latest
   ```
3. **Access Lago**:
   - **Frontend**: [http://localhost](http://localhost)
   - **API**: [http://localhost:3001](http://localhost:3001)

### 🐳 Option 2: Advanced Setup (Full Control)
For a full installation with all services:

1. **Clone & Setup**:
   ```bash
   git clone https://github.com/getlago/lago
   cd lago
   git fetch --tags
   git checkout $(git describe --tags --abbrev=0)
   ```
2. **Environment Configuration**:
   ```bash
   echo "LAGO_RSA_PRIVATE_KEY=\"$(openssl genrsa 2048 | base64 | tr -d '\n')\"" >> .env
   ```
3. **Run Services**:
   ```bash
   docker compose up -d
   ```
4. **Access**:
   - **Frontend**: [http://localhost](http://localhost)
   - **API**: [http://localhost:3000](http://localhost:3000) (default)
   - *Note: If Next.js uses 3000, update `API_PORT=3001` in Lago's `.env`.*

### 🔑 Connecting to your Project
1. Open [http://localhost](http://localhost) and create your organization.
2. Go to **Developers** → **API Keys** and copy your key.
3. Update your project's `.env`:
   ```env
   LAGO_URL=http://localhost:3001
   LAGO_API_KEY=your_api_key_here
   ```

### 🧪 Test Billing
Verify the integration via the test API route:
[http://localhost:3000/api/test-billing](http://localhost:3000/api/test-billing)

---

## 🐳 Docker Deployment
Run the full starter kit application using Docker Compose:
```bash
docker-compose up --build
```

---

## 🔄 CI/CD
Basic GitHub Actions are included for workflow verification:
- Dependency installation
- Build verification
- Linting and type-checking

---

## 📚 Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [Resend Documentation](https://resend.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Lago Documentation](https://doc.getlago.com)

---

## 🧠 Philosophy
This starter kit is designed to be:
- ✅ **Lightweight**: No unnecessary bloat or over-engineering.
- ✅ **Modular**: Drop-in features as modules, not core dependencies.
- ✅ **Scalable**: Built on modern standards for easy growth.