import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LayoutGrid, Shield, Zap, Mail } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <header className="px-4 py-20 md:py-32 flex flex-col items-center text-center max-w-6xl mx-auto w-full">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          The Ultimate SaaS Starter Kit
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl">
          Build and ship your next big idea faster than ever with Next.js 15, Clerk Auth, Resend Emails, and shadcn/ui.
        </p>
        <div className="flex gap-4">
          <Button size="lg" className="rounded-full px-8 bg-indigo-600 hover:bg-indigo-700">
            <Link href="/dashboard">Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8">
            <Link href="https://github.com">View on GitHub</Link>
          </Button>
        </div>
      </header>

      {/* Features Section */}
      <main className="px-4 py-20 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Everything you need to launch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-indigo-500" />}
              title="Secure Auth"
              description="Ready-to-use authentication with Clerk. Login, signup, and profile management."
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-indigo-500" />}
              title="Modern Tech"
              description="Built with Next.js 15 App Router, TypeScript, and Tailwind CSS 4.0."
            />
            <FeatureCard
              icon={<LayoutGrid className="w-8 h-8 text-indigo-500" />}
              title="UI Library"
              description="Beautifully designed components with shadcn/ui and Radix UI."
            />
            <FeatureCard
              icon={<Mail className="w-8 h-8 text-indigo-500" />}
              title="Email Ready"
              description="Integrated with Resend for transactional and marketing emails."
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-12 border-t border-slate-200 text-center text-slate-500">
        <p>© {new Date().getFullYear()} SaaS Starter Kit. All rights reserved.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="mb-4">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-600">{description}</p>
      </CardContent>
    </Card>
  );
}
