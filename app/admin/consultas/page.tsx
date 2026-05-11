import Link from "next/link"

const consultas = [
  {
    id: 1,
    paciente: "Maria Silva",
    data: "12/05/2026",
    status: "Confirmada"
  },
  {
    id: 2,
    paciente: "João Pereira",
    data: "14/05/2026",
    status: "Pendente"
  }
]

export default function ConsultasPage() {
  return (
    <main className="min-h-screen bg-[#f4f9ff] p-10">

      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div>
            <h1 className="text-5xl font-black text-slate-900">
              Gerenciar Consultas
            </h1>

            <p className="mt-3 text-lg text-slate-500">
              Visualize, edite e gerencie consultas.
            </p>
          </div>

          <Link
            href="/admin/consultas/criar"
            className="rounded-2xl bg-blue-600 px-8 py-4 text-center font-bold text-white shadow-lg transition hover:bg-blue-700"
          >
            Criar Consulta
          </Link>

        </div>

        <div className="mt-10 overflow-hidden rounded-3xl bg-white shadow-2xl">

          <table className="w-full">

            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-5 text-left">Paciente</th>
                <th className="p-5 text-left">Data</th>
                <th className="p-5 text-left">Status</th>
                <th className="p-5 text-left">Ações</th>
              </tr>
            </thead>

            <tbody>

              {consultas.map((consulta) => (
                <tr
                  key={consulta.id}
                  className="border-b border-slate-100"
                >
                  <td className="p-5 font-medium text-slate-800">
                    {consulta.paciente}
                  </td>

                  <td className="p-5 text-slate-600">
                    {consulta.data}
                  </td>

                  <td className="p-5">
                    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
                      {consulta.status}
                    </span>
                  </td>

                  <td className="p-5">

                    <div className="flex gap-3">

                      <button className="rounded-xl bg-yellow-400 px-4 py-2 font-bold text-white transition hover:bg-yellow-500">
                        Editar
                      </button>

                      <button className="rounded-xl bg-red-500 px-4 py-2 font-bold text-white transition hover:bg-red-600">
                        Apagar
                      </button>

                    </div>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </main>
  )
}