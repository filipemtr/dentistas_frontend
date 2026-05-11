const pedidos = [
  {
    id: 1,
    cliente: "Maria Silva",
    plano: "Premium",
    valor: "R$ 89",
    data: "12/05/2026"
  },
  {
    id: 2,
    cliente: "João Pereira",
    plano: "Família",
    valor: "R$ 149",
    data: "14/05/2026"
  }
]

export default function PedidosPage() {

  return (

    <main className="min-h-screen bg-[#f4f9ff] p-10">

      <div className="mx-auto max-w-7xl">

        <div className="flex items-center justify-between">

          <div>
            <h1 className="text-5xl font-black text-slate-900">
              Pedidos
            </h1>

            <p className="mt-3 text-lg text-slate-500">
              Compras dos planos odontológicos.
            </p>
          </div>

          <button className="rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white">
            Criar Pedido
          </button>

        </div>

        <div className="mt-10 grid gap-6">

          {pedidos.map((pedido) => (

            <div
              key={pedido.id}
              className="rounded-3xl bg-white p-8 shadow-xl"
            >

              <div className="flex flex-col justify-between gap-6 lg:flex-row">

                <div>

                  <h2 className="text-3xl font-black text-slate-900">
                    {pedido.cliente}
                  </h2>

                  <p className="mt-3 text-lg text-slate-500">
                    Plano {pedido.plano}
                  </p>

                  <p className="mt-2 text-sm text-slate-400">
                    Compra realizada em {pedido.data}
                  </p>

                </div>

                <div>

                  <h3 className="text-4xl font-black text-blue-700">
                    {pedido.valor}
                  </h3>

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

            </div>

          ))}

        </div>

      </div>

    </main>

  )
}