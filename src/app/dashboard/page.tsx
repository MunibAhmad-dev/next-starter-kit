import { UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LayoutDashboard, Users, CreditCard, Settings } from 'lucide-react';

export default async function DashboardPage() {
  const user = await currentUser();

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-slate-500">Welcome back, {user?.firstName || 'User'}!</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-500">{user?.emailAddresses?.[0]?.emailAddress}</span>
          <UserButton />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          icon={<Users className="w-5 h-5" />}
          title="Total Users"
          value="1,234"
          change="+12% from last month"
        />
        <MetricCard
          icon={<LayoutDashboard className="w-5 h-5" />}
          title="Active Projects"
          value="42"
          change="+3 new today"
        />
        <MetricCard
          icon={<CreditCard className="w-5 h-5" />}
          title="Monthly Revenue"
          value="$12,345"
          change="+8% from last month"
        />
        <MetricCard
          icon={<Settings className="w-5 h-5" />}
          title="System Health"
          value="99.9%"
          change="Operational"
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-medium">
                    {i}
                  </div>
                  <div>
                    <p className="text-sm font-medium">User action {i}</p>
                    <p className="text-xs text-slate-500">2 hours ago</p>
                  </div>
                </div>
                <span className="text-xs text-slate-400">Completed</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function MetricCard({ icon, title, value, change }: { icon: React.ReactNode; title: string; value: string; change: string }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="text-slate-500">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-slate-500">{change}</p>
      </CardContent>
    </Card>
  );
}
