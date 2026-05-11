export default function CancelarPlanoPage() {

  return (

    <main className="flex min-h-screen items-center justify-center bg-red-50 px-6">

      <div className="w-full max-w-2xl rounded-[32px] bg-white p-12 shadow-2xl">

        <h1 className="text-5xl font-black text-red-600">
          Cancelar Plano
        </h1>

        <p className="mt-6 text-xl text-slate-500">
          Tem certeza que deseja cancelar seu plano?
        </p>

        <div className="mt-10 rounded-3xl border border-red-100 bg-red-50 p-8">

          <p className="text-lg text-red-700">
            Você perderá acesso aos benefícios,
            descontos e consultas inclusas.
          </p>

        </div>

        <button className="mt-10 w-full rounded-2xl bg-red-600 py-5 text-xl font-black text-white transition hover:bg-red-700">
          Confirmar Cancelamento
        </button>

      </div>

    </main>

  )
}