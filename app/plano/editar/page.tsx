export default function EditarPlanoPage() {

  return (

    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 px-8 py-16">

      <div className="mx-auto max-w-6xl">

        <div>

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-blue-700">
            ALTERAR PLANO
          </span>

          <h1 className="mt-6 text-6xl font-black text-slate-900">
            Escolha um novo plano
          </h1>

        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-8 shadow-xl">

            <h2 className="text-3xl font-black text-blue-700">
              Básico
            </h2>

            <p className="mt-4 text-5xl font-black text-slate-900">
              R$ 49
            </p>

            <button className="mt-10 w-full rounded-2xl bg-blue-600 py-4 text-lg font-black text-white">
              Selecionar
            </button>

          </div>

          <div className="rounded-3xl border-4 border-blue-600 bg-white p-8 shadow-2xl">

            <h2 className="text-3xl font-black text-blue-700">
              Premium
            </h2>

            <p className="mt-4 text-5xl font-black text-slate-900">
              R$ 89
            </p>

            <button className="mt-10 w-full rounded-2xl bg-blue-600 py-4 text-lg font-black text-white">
              Plano Atual
            </button>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl">

            <h2 className="text-3xl font-black text-blue-700">
              Família
            </h2>

            <p className="mt-4 text-5xl font-black text-slate-900">
              R$ 149
            </p>

            <button className="mt-10 w-full rounded-2xl bg-blue-600 py-4 text-lg font-black text-white">
              Selecionar
            </button>

          </div>

        </div>

      </div>

    </main>

  )
}