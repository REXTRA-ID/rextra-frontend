interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return <div className="flex min-h-screen bg-[#F8F8F8]">{children}</div>
}
