const pacientes = [
  {
    id: 1,
    nome: "Maria Silva",
    telefone: "(81) 99999-9999",
    plano: "Premium"
  },
  {
    id: 2,
    nome: "João Pereira",
    telefone: "(81) 98888-8888",
    plano: "Família"
  }
]

export default function PacientesPage() {

  return (

    <main className="min-h-screen bg-[#f4f9ff] p-10">

      <div className="mx-auto max-w-7xl">

        <div className="flex items-center justify-between">

          <div>
            <h1 className="text-5xl font-black text-slate-900">
              Pacientes
            </h1>

            <p className="mt-3 text-lg text-slate-500">
              Gerencie os pacientes da clínica.
            </p>
          </div>

          <button className="rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white">
            Criar Paciente
          </button>

        </div>

        <div className="mt-10 rounded-3xl bg-white shadow-2xl">

          <table className="w-full">

            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-5 text-left">Nome</th>
                <th className="p-5 text-left">Telefone</th>
                <th className="p-5 text-left">Plano</th>
                <th className="p-5 text-left">Ações</th>
              </tr>
            </thead>

            <tbody>

              {pacientes.map((paciente) => (

                <tr
                  key={paciente.id}
                  className="border-b border-slate-100"
                >

                  <td className="p-5">{paciente.nome}</td>

                  <td className="p-5">{paciente.telefone}</td>

                  <td className="p-5">
                    <span className="rounded-full bg-cyan-100 px-4 py-2 font-bold text-cyan-700">
                      {paciente.plano}
                    </span>
                  </td>

                  <td className="p-5">

                    <div className="flex gap-3">

                      <button className="rounded-xl bg-yellow-400 px-4 py-2 font-bold text-white">
                        Editar
                      </button>

                      <button className="rounded-xl bg-red-500 px-4 py-2 font-bold text-white">
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