import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Information() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Church Information</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>
              <Link href="/informasi/jadwal-ibadah">Worship Schedule</Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>View our weekly worship schedule and special services.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <Link href="/informasi/koordinator">Coordinator</Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Find information about our ministry coordinators.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <Link href="/informasi/pelkat">Pelkat</Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Learn about our various church groups and ministries.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <Link href="/informasi/komisi">Committee</Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Discover our church committees and their roles.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}