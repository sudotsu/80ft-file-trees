// Visit http://localhost:3000/repo-card-preview
/**
 * Renders a stylized repository preview card with a code-background layer, a terminal-like tech-stack panel, and a bottom metadata line.
 *
 * The card shows a monospaced tree/code snippet as a faded background, a faux terminal window with hard-coded tech-stack entries, and a decorative grid overlay. Layout and content are static and purely presentational.
 *
 * @returns A JSX element containing the complete repo preview card.
 */

export default function RepoCardPreview() {
  return (
    <div className="size-full flex items-center justify-center bg-[#0d1117] p-8">
      <div
        className="relative bg-[#161b22] border-2 border-[#30363d] overflow-hidden"
        style={{ width: '1200px', height: '630px' }}
      >
        {/* Code background with tree data structures */}
        <div className="absolute inset-0 p-10 font-mono opacity-20 overflow-hidden">
          <pre className="text-[#8b949e] text-xs leading-relaxed">
{`class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function inorderTraversal(root) {
  if (!root) return [];
  return [
    ...inorderTraversal(root.left),
    root.value,
    ...inorderTraversal(root.right)
  ];
}

const binarySearchTree = {
  insert(node, value) {
    if (!node) return new TreeNode(value);
    if (value < node.value) {
      node.left = this.insert(node.left, value);
    } else {
      node.right = this.insert(node.right, value);
    }
    return node;
  },

  search(node, target) {
    if (!node || node.value === target) return node;
    return target < node.value
      ? this.search(node.left, target)
      : this.search(node.right, target);
  }
};

// AVL Tree Implementation
class AVLNode extends TreeNode {
  constructor(value) {
    super(value);
    this.height = 1;
  }
}`}
          </pre>
        </div>

        {/* Safe border area (40pt = 53.33px) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ padding: '53.33px' }}>
          {/* Terminal window */}
          <div className="bg-[#0d1117] border border-[#30363d] rounded-lg shadow-2xl w-full max-w-2xl">
            {/* Terminal header */}
            <div className="bg-[#161b22] border-b border-[#30363d] px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <span className="ml-3 font-mono text-[#8b949e] text-sm">tech-stack.sh</span>
            </div>

            {/* Terminal content */}
            <div className="p-6 font-mono">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-[#7ee787]">$</span>
                  <span className="text-[#c9d1d9]">cat tech-stack.txt</span>
                </div>

                <div className="mt-4 space-y-4 pl-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[#58a6ff]">▸</span>
                    <span className="text-[#c9d1d9]">Next.js 14</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#58a6ff]">▸</span>
                    <span className="text-[#c9d1d9]">TypeScript</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#58a6ff]">▸</span>
                    <span className="text-[#c9d1d9]">42 Location Pages</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#58a6ff]">▸</span>
                    <span className="text-[#c9d1d9]">100/100 SEO Score</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-6">
                  <span className="text-[#7ee787]">$</span>
                  <span className="text-[#c9d1d9] opacity-50">|</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom text */}
          <div className="mt-6 font-mono text-[#8b949e] text-sm">
            <span className="text-[#ff7b72]">const</span>{' '}
            <span className="text-[#d2a8ff]">omahaTreeCare</span> = {'{'}
            <span className="text-[#79c0ff]"> framework</span>:
            <span className="text-[#a5d6ff]"> "next.js"</span>,
            <span className="text-[#79c0ff]"> type</span>:
            <span className="text-[#a5d6ff]"> "typescript" </span>
            {'}'};
          </div>
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage: `linear-gradient(#30363d 1px, transparent 1px), linear-gradient(90deg, #30363d 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}
        />
      </div>
    </div>
  );
}