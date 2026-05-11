import Link from "next/link"

const cards = [
  {
    title: "Consultas",
    desc: "Gerencie consultas odontológicas.",
    href: "/admin/consultas"
  },
  {
    title: "Pacientes",
    desc: "Gerencie pacientes cadastrados.",
    href: "/admin/pacientes"
  },
  {
    title: "Pedidos",
    desc: "Gerencie compras de planos.",
    href: "/admin/pedidos"
  },
  {
    title: "Planos",
    desc: "Gerencie planos odontológicos.",
    href: "/admin/planos"
  },
  {
    title: "Procedimentos",
    desc: "Gerencie procedimentos da clínica.",
    href: "/admin/procedimentos"
  },
  {
    title: "Usuários",
    desc: "Gerencie usuários do sistema.",
    href: "/admin/usuarios"
  }
]

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-700 via-blue-500 to-cyan-400 p-10">

      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <h1 className="text-5xl font-black text-white">
            Painel Administrativo
          </h1>

          <p className="mt-4 text-xl text-blue-100">
            Gerencie toda a clínica odontológica.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {cards.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-3xl bg-white/95 p-8 shadow-2xl transition hover:-translate-y-2 hover:shadow-blue-900/40"
            >
              <h2 className="text-3xl font-black text-slate-900">
                {item.title}
              </h2>

              <p className="mt-4 text-slate-600">
                {item.desc}
              </p>

              <button className="mt-8 rounded-2xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700">
                Acessar
              </button>
            </Link>
          ))}

        </div>

      </div>

    </main>
  )
}