# Clean Modular SaaS Starter Kit

A lightweight, production-ready SaaS starter kit built with Next.js 15, TypeScript, Clerk, Resend, and shadcn/ui.

## Features

- **Next.js 15 (App Router)**: Fast, modern, and SEO-friendly.
- **Clerk Authentication**: Social login, email/password, and session management.
- **Resend Emails**: Easy transactional email integration.
- **shadcn/ui**: Accessible, customizable components.
- **Tailwind CSS 4.0**: Utility-first styling with modern features.
- **Modular Architecture**: Isolated modules for auth, email, and ui for maximum reusability.

## Project Structure

```text
/src
  /app          # Next.js App Router (pages & layouts)
  /components   # Shared React components
  /modules      # Domain-specific modules
    /auth       # Authentication logic & wrappers
    /email      # Resend utility & templates
    /ui         # shadcn/ui library & custom components
  /lib          # Core utilities & configurations
  /config       # Global constants & environment config
```

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd starter-kit
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Setup

Copy `.env.example` to `.env` and fill in your keys:

```bash
cp .env.example .env
```

**Required Keys:**
- [Clerk API Keys](https://clerk.com)
- [Resend API Key](https://resend.com)

### 4. Run locally

```bash
npm run dev
```

Your app is now running at `http://localhost:3000`!

## How to use

### Authentication

Routes inside `/dashboard` are automatically protected. Use the `clerkMiddleware` in `src/middleware.ts` to customize protection.

### Sending Emails

Use the `sendEmail` utility from `@/modules/email/resend`:

```typescript
import { sendEmail } from '@/modules/email/resend';

await sendEmail({
  to: 'user@example.com',
  subject: 'Welcome!',
  html: '<p>Welcome to our platform!</p>',
});
```

## Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Resend Documentation](https://resend.com/docs)
