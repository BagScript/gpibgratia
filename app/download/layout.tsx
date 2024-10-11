import Sidebar from '@/components/Sidebar';

const sidebarItems = [
  { href: '/download/tata-ibadah', label: 'Worship Guide' },
  { href: '/download/warta-jemaat', label: 'Congregation Bulletin' },
  { href: '/download/khotbah', label: 'Sermons' },
  { href: '/download/formulir', label: 'Forms' },
];

export default function DownloadLayout({
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