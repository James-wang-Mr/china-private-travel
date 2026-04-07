# China Private Travel - Next.js Project

## Quick Start

```bash
# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Edit .env with your credentials

# Push database schema
npx prisma db push

# Seed sample data (optional)
npx prisma db seed

# Start development server
npm run dev
```

## Required Environment Variables

```env
DATABASE_URL="postgresql://..."
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-a-secret"

# Facebook OAuth
FACEBOOK_CLIENT_ID="..."
FACEBOOK_CLIENT_SECRET="..."

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
```

## Features

- 🌍 Multi-language support (EN, ES, PT, FR, DE, AR, RU)
- 🔐 Authentication (Email + Facebook OAuth)
- 💳 Stripe Payment Integration
- 📊 Admin Dashboard with Analytics
- 📱 Responsive Design
- 🎨 Green & Yellow Nature Theme
