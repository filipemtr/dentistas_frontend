export default function Contact() {

  return (

    <section className="bg-gradient-to-br from-blue-700 to-cyan-500 px-8 py-24 text-white">

      <div className="mx-auto max-w-5xl text-center">

        <h2 className="text-5xl font-black">
          Entre em contato
        </h2>

        <p className="mt-6 text-xl text-blue-100">
          Tire dúvidas e conheça nossos tratamentos.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl border border-white/20 bg-white/10 p-10 backdrop-blur-xl">

            <h3 className="text-3xl font-black">
              Instagram
            </h3>

            <p className="mt-4 text-2xl text-cyan-100">
              @dentistascaruaru
            </p>

          </div>

          <div className="rounded-3xl border border-white/20 bg-white/10 p-10 backdrop-blur-xl">

            <h3 className="text-3xl font-black">
              Telefone
            </h3>

            <p className="mt-4 text-2xl text-cyan-100">
              81 9386-8592
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}