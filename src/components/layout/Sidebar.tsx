import {
  Users,
  FileText,
  Layers,
  BarChart2,
  Settings,
  LogOut,
  LucideIcon,
} from 'lucide-react'

const menus = [
  { label: 'Manajemen User', icon: Users },
  { label: 'Konten User', icon: FileText },
  { label: 'App Services', icon: Layers },
  { label: 'Analytics', icon: BarChart2 },
]

export default function Sidebar() {
  return (
    <aside
      className="
        fixed md:static
        h-screen
        bg-white shadow
        w-16 md:w-[260px]
        flex flex-col
        transition-all duration-300
      "
    >
      {/* Logo */}
      <div className="h-20 flex items-center justify-center md:justify-start px-4">
        <span className="text-xl font-bold text-black md:hidden">R</span>
        <span className="hidden md:block text-2xl font-bold text-black">
          REXTRA
        </span>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-2 md:px-4 space-y-2 text-black">
        {menus.map((item) => (
          <MenuItem key={item.label} {...item} />
        ))}
      </nav>

      {/* Bottom */}
      <div className="px-2 md:px-4 pb-4 space-y-2">
        <MenuItem label="Settings" icon={Settings} />
        <MenuItem label="Log Out" icon={LogOut} danger />
      </div>
    </aside>
  )
}

function MenuItem({
  label,
  icon: Icon,
  danger,
}: {
  label: string
  icon: LucideIcon
  danger?: boolean
}) {
  return (
    <div
      className={`
        flex items-center gap-3
        px-3 py-3 rounded-lg cursor-pointer
        hover:bg-gray-100 transition
        ${danger && 'text-red-500'}
      `}
    >
      <Icon size={20} />

      <span className="hidden md:inline text-sm">{label}</span>
    </div>
  )
}
