const usuarios = [
  {
    id: 1,
    nome: "Administrador",
    role: "admin"
  },
  {
    id: 2,
    nome: "Maria Silva",
    role: "paciente"
  }
]

export default function UsuariosPage() {

  return (

    <main className="min-h-screen bg-[#f4f9ff] p-10">

      <div className="mx-auto max-w-7xl">

        <div className="flex items-center justify-between">

          <h1 className="text-5xl font-black text-slate-900">
            Usuários
          </h1>

          <button className="rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white">
            Criar Usuário
          </button>

        </div>

        <div className="mt-10 rounded-3xl bg-white shadow-2xl">

          <table className="w-full">

            <thead className="bg-blue-600 text-white">

              <tr>
                <th className="p-5 text-left">Nome</th>
                <th className="p-5 text-left">Role</th>
                <th className="p-5 text-left">Ações</th>
              </tr>

            </thead>

            <tbody>

              {usuarios.map((user) => (

                <tr
                  key={user.id}
                  className="border-b border-slate-100"
                >

                  <td className="p-5">
                    {user.nome}
                  </td>

                  <td className="p-5">

                    <span className="rounded-full bg-blue-100 px-4 py-2 font-bold text-blue-700">
                      {user.role}
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