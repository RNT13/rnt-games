export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1>Private Layout</h1>
      {children}
    </div>
  )
}
