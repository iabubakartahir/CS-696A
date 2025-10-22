// app/page.tsx
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col gap-6 p-6">
      <h1 className="text-2xl font-semibold">Home</h1>
      <p className="text-sm text-gray-600">Chapter 2 — Tailwind triangle demo</p>

      {/* Triangle built with Tailwind borders */}
      <div
        className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px]
                    border-l-transparent border-r-transparent border-b-black"
      />
    </main>
  );
}
