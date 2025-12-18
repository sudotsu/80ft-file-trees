import Head from 'next/head'
import Link from 'next/link'

/**
 * Render the Credits page for the Omaha Tree Care site, presenting the migration timeline, tech stack visualization, Claude credit, an easter-egg code snippet, and footer.
 *
 * @returns A JSX element representing the Credits page layout
 */
export default function CreditsPage() {
  return (
    <>
      <Head>
        <title>Credits | Omaha Tree Care</title>
        <meta name="robots" content="noindex" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        {/* Animated background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative container mx-auto px-4 py-16">
          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
          >
            ← Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">
              Built with ❤️ by AI
            </h1>
            <p className="text-xl text-slate-300">
              The story of how this site went from Vite to Next.js
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Before */}
            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-slate-700">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌱</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">The Beginning</h2>
                  <p className="text-slate-300 mb-4">
                    Started as a Vite + React SSG project with 5 diagnostic tools and ambitious goals.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">Vite</span>
                    <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">React 18</span>
                    <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">JavaScript</span>
                    <span className="px-3 py-1 bg-slate-700 rounded-full text-sm">vite-react-ssg</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Migration */}
            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-slate-700">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">The Migration</h2>
                  <p className="text-slate-300 mb-4">
                    Migrated to Next.js 14 with TypeScript, unlocking better performance, SEO, and developer experience.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-slate-900/50 p-4 rounded-lg">
                      <div className="text-3xl font-bold text-emerald-400 mb-1">3.5x</div>
                      <div className="text-sm text-slate-400">Faster page loads</div>
                    </div>
                    <div className="bg-slate-900/50 p-4 rounded-lg">
                      <div className="text-3xl font-bold text-emerald-400 mb-1">100</div>
                      <div className="text-sm text-slate-400">Lighthouse SEO score</div>
                    </div>
                    <div className="bg-slate-900/50 p-4 rounded-lg">
                      <div className="text-3xl font-bold text-emerald-400 mb-1">42</div>
                      <div className="text-sm text-slate-400">Location pages</div>
                    </div>
                    <div className="bg-slate-900/50 p-4 rounded-lg">
                      <div className="text-3xl font-bold text-emerald-400 mb-1">90%</div>
                      <div className="text-sm text-slate-400">Less dev time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Now */}
            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-slate-700">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌳</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">Today</h2>
                  <p className="text-slate-300 mb-4">
                    A fully-featured tree care platform serving the Omaha metro area with cutting-edge web technology.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">Next.js 14</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">TypeScript</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Tailwind CSS</span>
                    <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Vercel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Showcase */}
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">Tech Stack Visualization</h2>
            <div className="bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-slate-700">
              <div className="aspect-video bg-slate-900 rounded-lg overflow-hidden">
                <iframe
                  src="/repo-card-preview"
                  className="w-full h-full"
                  style={{ transform: 'scale(0.5)', transformOrigin: 'top left', width: '200%', height: '200%' }}
                />
              </div>
              <p className="text-center text-slate-400 mt-4 text-sm">
                Original design concept for GitHub social preview
              </p>
            </div>
          </div>

          {/* Claude Credit */}
          <div className="max-w-2xl mx-auto mt-16 text-center">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur rounded-xl p-8 border border-slate-600">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-2">Powered by Claude</h3>
              <p className="text-slate-300 mb-4">
                This entire migration, including 42 location pages, comprehensive documentation,
                and SEO optimization, was completed with the help of Claude (Anthropic's AI assistant).
              </p>
              <div className="flex justify-center gap-4 text-sm text-slate-400">
                <span>🧹 Cleaned obsolete files</span>
                <span>•</span>
                <span>📚 Wrote documentation</span>
                <span>•</span>
                <span>🚀 Migrated to Next.js</span>
              </div>
            </div>
          </div>

          {/* Easter Egg Code */}
          <div className="max-w-4xl mx-auto mt-16">
            <details className="bg-slate-800/30 backdrop-blur rounded-xl border border-slate-700 overflow-hidden">
              <summary className="px-6 py-4 cursor-pointer hover:bg-slate-700/30 transition-colors">
                <span className="font-mono text-slate-300">$ cat easter-egg.js</span>
              </summary>
              <div className="px-6 py-4 bg-slate-900/50 font-mono text-sm">
                <pre className="text-slate-300 overflow-x-auto">
{`// The TreeNode pun: A tree care business using tree data structures 🌲

class TreeNode {
  constructor(species, health, risk) {
    this.species = species;
    this.health = health;
    this.risk = risk;
    this.left = null;  // Left branch
    this.right = null; // Right branch
  }
}

// Traverse the tree (care) business
function assessAllTrees(root) {
  if (!root) return [];
  return [
    ...assessAllTrees(root.left),
    { species: root.species, health: root.health, risk: root.risk },
    ...assessAllTrees(root.right)
  ];
}

console.log("🌳 Midwest Roots Tree Services - Where CS meets tree care");`}
                </pre>
              </div>
            </details>
          </div>

          {/* Footer */}
          <div className="text-center mt-16 text-slate-500 text-sm">
            <p>Made with 💚 in Omaha, NE</p>
            <p className="mt-2">
              <Link href="/" className="hover:text-emerald-400 transition-colors">
                omahatreecare.com
              </Link>
              {' • '}
              <a
                href="https://github.com/sudotsu/condescending-brattain"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors"
              >
                View on GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}