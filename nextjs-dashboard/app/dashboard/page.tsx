// app/dashboard/page.tsx
import { lusitana } from '@/app/ui/fonts';
import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';

export default async function Page() {
  return (
    <div className="grid gap-6">
      <h1 className={`${lusitana.className} text-2xl md:text-3xl`}>Dashboard</h1>

      {/* Summary cards */}
      <CardWrapper />

      {/* Chart + latest invoices */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <div className="md:col-span-3">
          <RevenueChart />
        </div>
        <div className="md:col-span-1">
          <LatestInvoices />
        </div>
      </div>
    </div>
  );
}
