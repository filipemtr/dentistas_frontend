interface Props {
  titulo: string
  preco: string
  descricao: string
  beneficios: string[]
}

export default function PlanoCard({
  titulo,
  preco,
  descricao,
  beneficios
}: Props) {

  return (

    <div className="group rounded-3xl border border-blue-100 bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-3 hover:shadow-2xl">

      <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
        Plano
      </div>

      <h3 className="mt-6 text-3xl font-black text-blue-700">
        {titulo}
      </h3>

      <p className="mt-4 text-5xl font-black text-slate-800">
        {preco}
      </p>

      <p className="mt-4 text-lg text-slate-500">
        {descricao}
      </p>

      <div className="mt-8 space-y-3">

        {beneficios.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >
            <div className="h-3 w-3 rounded-full bg-blue-600" />

            <span className="text-slate-700">
              {item}
            </span>
          </div>
        ))}

      </div>

      <button className="mt-10 w-full rounded-2xl bg-blue-600 py-4 text-lg font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 hover:shadow-xl">
        Comprar Plano
      </button>

    </div>
  )
}