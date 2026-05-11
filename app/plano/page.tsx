import Link from "next/link"

export default function PlanoPage() {

  return (

    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 px-8 py-16">

      <div className="mx-auto max-w-7xl">

        <div className="mb-16">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-blue-700">
            ÁREA DO PACIENTE
          </span>

          <h1 className="mt-6 text-6xl font-black text-slate-900">
            Meu Plano
          </h1>

          <p className="mt-6 max-w-3xl text-xl text-slate-500">
            Gerencie seu plano odontológico,
            acompanhe consultas e controle pagamentos.
          </p>

        </div>

        {/* CARD PRINCIPAL */}
        <div className="rounded-[32px] border border-blue-100 bg-white p-10 shadow-2xl">

          <div className="flex flex-col justify-between gap-10 lg:flex-row">

            <div>

              <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white">
                PLANO PREMIUM
              </span>

              <h2 className="mt-6 text-5xl font-black text-slate-900">
                Cobertura Ativa
              </h2>

              <p className="mt-6 max-w-2xl text-lg text-slate-500">
                Seu plano oferece cobertura odontológica
                completa com descontos exclusivos em
                consultas, aparelhos e procedimentos.
              </p>

              <div className="mt-10 grid gap-5 md:grid-cols-2">

                <div className="rounded-2xl bg-blue-50 p-6">
                  <h3 className="text-lg font-black text-blue-700">
                    Consultas realizadas
                  </h3>

                  <p className="mt-3 text-4xl font-black text-slate-900">
                    12
                  </p>
                </div>

                <div className="rounded-2xl bg-cyan-50 p-6">
                  <h3 className="text-lg font-black text-cyan-700">
                    Próxima cobrança
                  </h3>

                  <p className="mt-3 text-4xl font-black text-slate-900">
                    15/06
                  </p>
                </div>

              </div>

            </div>

            <div className="flex flex-col gap-5">

              <Link
                href="/plano/pagar"
                className="rounded-2xl bg-blue-600 px-8 py-5 text-center text-lg font-black text-white shadow-xl shadow-blue-200 transition hover:scale-105 hover:bg-blue-700"
              >
                Pagar Plano
              </Link>

              <Link
                href="/plano/editar"
                className="rounded-2xl border border-blue-200 bg-white px-8 py-5 text-center text-lg font-black text-blue-700 transition hover:bg-blue-50"
              >
                Editar Plano
              </Link>

              <Link
                href="/plano/cancelar"
                className="rounded-2xl border border-red-200 bg-red-50 px-8 py-5 text-center text-lg font-black text-red-600 transition hover:bg-red-100"
              >
                Cancelar Plano
              </Link>

            </div>

          </div>

        </div>

        {/* CONSULTAS */}
        <div className="mt-16">

          <h2 className="text-4xl font-black text-slate-900">
            Histórico de consultas
          </h2>

          <div className="mt-10 grid gap-6">

            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-lg">

              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

                <div>

                  <h3 className="text-2xl font-black text-slate-900">
                    Limpeza Odontológica
                  </h3>

                  <p className="mt-2 text-slate-500">
                    Realizada em 02/05/2026
                  </p>

                </div>

                <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-bold text-green-700">
                  Finalizada
                </span>

              </div>

            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-lg">

              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

                <div>

                  <h3 className="text-2xl font-black text-slate-900">
                    Avaliação Ortodôntica
                  </h3>

                  <p className="mt-2 text-slate-500">
                    Realizada em 14/04/2026
                  </p>

                </div>

                <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-bold text-green-700">
                  Finalizada
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>

  )
}