export default function Navbar() {

  return (

    <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-blue-100 bg-white/80 px-8 py-5 backdrop-blur-xl">

      <div>
        <h1 className="text-3xl font-black tracking-tight text-blue-700">
          Dentistas
        </h1>
      </div>

      <div className="flex items-center gap-4">

        <a
          href="/login"
          className="rounded-xl border border-blue-600 px-5 py-2 font-semibold text-blue-600 transition hover:bg-blue-50"
        >
          Login
        </a>

        <a
          href="/register"
          className="rounded-xl bg-blue-600 px-5 py-2 font-semibold text-white shadow-lg shadow-blue-200 transition hover:scale-105 hover:bg-blue-700"
        >
          Registrar
        </a>

      </div>

    </nav>
  )
}