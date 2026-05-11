const planos = [
  {
    id: 1,
    nome: "Básico",
    preco: "R$ 49"
  },
  {
    id: 2,
    nome: "Premium",
    preco: "R$ 89"
  },
  {
    id: 3,
    nome: "Família",
    preco: "R$ 149"
  }
]

export default function PlanosPage() {

  return (

    <main className="min-h-screen bg-[#f4f9ff] p-10">

      <div className="mx-auto max-w-7xl">

        <div className="flex items-center justify-between">

          <div>
            <h1 className="text-5xl font-black text-slate-900">
              Planos
            </h1>
          </div>

          <button className="rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white">
            Criar Plano
          </button>

        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">

          {planos.map((plano) => (

            <div
              key={plano.id}
              className="rounded-3xl bg-white p-8 shadow-xl"
            >

              <h2 className="text-4xl font-black text-blue-700">
                {plano.nome}
              </h2>

              <p className="mt-5 text-5xl font-black text-slate-900">
                {plano.preco}
              </p>

              <div className="mt-10 flex gap-3">

                <button className="w-full rounded-xl bg-yellow-400 py-3 font-bold text-white">
                  Editar
                </button>

                <button className="w-full rounded-xl bg-red-500 py-3 font-bold text-white">
                  Apagar
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>

  )
}