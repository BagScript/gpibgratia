import Sidebar from '@/components/Sidebar';

const sidebarItems = [
  { href: '/informasi/jadwal-ibadah', label: 'Worship Schedule' },
  { href: '/informasi/koordinator', label: 'Coordinator' },
  { href: '/informasi/pelkat', label: 'Pelkat' },
  { href: '/informasi/komisi', label: 'Committee' },
];

export default function InformasiLayout({
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