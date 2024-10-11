import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Download() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Downloads</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>
              <Link href="/download/tata-ibadah">Worship Guide</Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Download our weekly worship guides.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <Link href="/download/warta-jemaat">Congregation Bulletin</Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Access our latest congregation bulletins.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <Link href="/download/khotbah">Sermons</Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Download recent sermon recordings and transcripts.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <Link href="/download/formulir">Forms</Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Access and download various church-related forms.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}