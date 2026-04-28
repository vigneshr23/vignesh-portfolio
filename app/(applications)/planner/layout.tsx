import './planner.css'

export default function PlannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <html lang="en" className="font-sans">
    <head>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <title>SDE-3 36-Week Deep Mastery Plan</title>
    </head>
    <body className="bg-[#f7f8fc] text-[#1a1d2e] p-6 leading-[1.55] font-[system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
      {children}
    </body>
    </html>
  );
}
