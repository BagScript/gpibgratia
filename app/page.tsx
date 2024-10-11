import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to BPIB Gratia</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/profil">Profile</Link></li>
          <li><Link href="/informasi">Information</Link></li>
          <li><Link href="/download">Download</Link></li>
          <li><Link href="/kontak">Contact</Link></li>
        </ul>
      </nav>
      {/* Add more content for the home page */}
    </main>
  )
}