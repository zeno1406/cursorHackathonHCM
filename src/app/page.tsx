export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6">
        <div className="text-2xl font-bold text-white">
          Cursor<span className="text-purple-400">HCM</span>
        </div>
        <div className="flex gap-6">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">
            Features
          </a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">
            About
          </a>
          <a href="/api/hello" className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors">
            Try API
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center px-8 text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Build Something
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Amazing
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Welcome to the Cursor Hackathon HCM MVP. A modern, fast, and scalable 
            web application built with Next.js, TypeScript, and Tailwind CSS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#features"
              className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105"
            >
              Explore Features
            </a>
            <a
              href="https://github.com/zeno1406/cursorHackathonHCM"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold px-8 py-4 rounded-lg transition-all"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-20 px-8 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="🚀 Fast & Modern"
              description="Built with Next.js 16 and React 19, leveraging the latest web technologies for optimal performance."
            />
            <FeatureCard
              title="🎨 Beautiful UI"
              description="Styled with Tailwind CSS for a sleek, responsive design that looks great on any device."
            />
            <FeatureCard
              title="🔧 Type-Safe"
              description="Written in TypeScript for improved developer experience and fewer runtime errors."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            About This MVP
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            This MVP was built for the Cursor Hackathon in Ho Chi Minh City. 
            It showcases the power of modern web development with a clean, 
            maintainable codebase that can be easily extended with new features.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <TechBadge name="Next.js" />
            <TechBadge name="React" />
            <TechBadge name="TypeScript" />
            <TechBadge name="Tailwind CSS" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>© 2024 Cursor Hackathon HCM. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with ❤️ in Ho Chi Minh City</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function TechBadge({ name }: { name: string }) {
  return (
    <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
      {name}
    </span>
  );
}
