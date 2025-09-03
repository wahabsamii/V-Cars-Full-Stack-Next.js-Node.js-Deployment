import Sidebar from './Sidebar'

export default function DashboardLayout({ children, role }) {
  return (
    <div className="flex">
      <Sidebar role={role} />
      <main className="ml-0 md:ml-64 p-6 w-full bg-gray-100 min-h-screen">
        {children}
      </main>
    </div>
  )
}
