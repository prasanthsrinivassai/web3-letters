export default async function CheckoutPage() {

  return (
    <main className="min-h-screen bg-[#0a0a1a] text-white flex items-center justify-center px-6">
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="fixed top-0 left-0 right-0 h-64 bg-gradient-to-b from-purple-900/60 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-md w-full border border-white/10 p-8 text-center">
        <p className="text-[#00e5ff] text-xs tracking-widest uppercase mb-4">Enhance 42</p>
        <h1 className="text-3xl font-black mb-2">Gateway to <span className="text-purple-400">Web 3.0</span></h1>
        <p className="text-gray-400 text-sm mb-8">10 letters · Web portal access · Discord community</p>

        <div className="border border-white/10 p-4 mb-8">
          <p className="text-4xl font-black text-white">$29</p>
          <p className="text-gray-500 text-sm">one-time payment</p>
        </div>

        <form action="/api/checkout" method="POST">
          <button
            type="submit"
            className="w-full py-3 border border-white text-white font-semibold hover:bg-white hover:text-[#0a0a1a] transition-colors"
          >
            Get Started
          </button>
        </form>
      </div>
    </main>
  );
}
