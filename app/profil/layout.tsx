import Sidebar from '@/components/Sidebar';

const sidebarItems = [
  { href: '/profil/visi-misi', label: 'Vision & Mission' },
  { href: '/profil/sejarah', label: 'History' },
  { href: '/profil/statement-of-faith', label: 'Statement of Faith' },
  { href: '/profil/phmj', label: 'PHMJ' },
];

export default function ProfilLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen pt-16">
      <Sidebar items={sidebarItems} />
      <main className="flex-1 p-4 md:ml-64">
        {children}
      </main>
    </div>
  )
}