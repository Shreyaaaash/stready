// src/app/page.tsx

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.95] antialiased bg-grid-white/[0.02] text-white flex items-center justify-center">
      <div className="text-center p-6 max-w-md">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Product Showcase</h1>
        <p className="text-lg mb-8">
          Discover a variety of products carefully curated just for you. Explore, choose, and enjoy the best selections available.
        </p>
        <a
          href="/products"
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg"
        >
          Browse Products
        </a>
      </div>
    </main>
  );
}
