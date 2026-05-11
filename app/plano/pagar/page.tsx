export default function PagarPlanoPage() {

  return (

    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-400 px-6">

      <div className="w-full max-w-2xl rounded-[32px] bg-white p-12 shadow-2xl">

        <h1 className="text-5xl font-black text-slate-900">
          Pagamento do Plano
        </h1>

        <p className="mt-5 text-lg text-slate-500">
          Realize o pagamento do seu plano odontológico.
        </p>

        <div className="mt-10 rounded-3xl bg-blue-50 p-8">

          <h2 className="text-3xl font-black text-blue-700">
            Plano Premium
          </h2>

          <p className="mt-4 text-5xl font-black text-slate-900">
            R$ 89/mês
          </p>

        </div>

        <button className="mt-10 w-full rounded-2xl bg-blue-600 py-5 text-xl font-black text-white shadow-xl shadow-blue-200 transition hover:bg-blue-700">
          Realizar Pagamento
        </button>

      </div>

    </main>

  )
}