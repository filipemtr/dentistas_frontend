const procedimentos = [
  {
    id: 1,
    nome: "Limpeza",
    preco: "R$ 120"
  },
  {
    id: 2,
    nome: "Canal",
    preco: "R$ 500"
  }
]

export default function ProcedimentosPage() {

  return (

    <main className="min-h-screen bg-[#f4f9ff] p-10">

      <div className="mx-auto max-w-7xl">

        <div className="flex items-center justify-between">

          <h1 className="text-5xl font-black text-slate-900">
            Procedimentos
          </h1>

          <button className="rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white">
            Criar Procedimento
          </button>

        </div>

        <div className="mt-10 grid gap-6">

          {procedimentos.map((item) => (

            <div
              key={item.id}
              className="flex flex-col justify-between gap-5 rounded-3xl bg-white p-8 shadow-xl lg:flex-row lg:items-center"
            >

              <div>

                <h2 className="text-3xl font-black text-slate-900">
                  {item.nome}
                </h2>

                <p className="mt-3 text-xl text-blue-700">
                  {item.preco}
                </p>

              </div>

              <div className="flex gap-3">

                <button className="rounded-xl bg-yellow-400 px-5 py-3 font-bold text-white">
                  Editar
                </button>

                <button className="rounded-xl bg-red-500 px-5 py-3 font-bold text-white">
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