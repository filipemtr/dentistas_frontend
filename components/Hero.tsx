export default function Hero() {

  return (

    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-white">

 
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/clinica.jpeg')"
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-blue-950/60" />

      {/* GRADIENTE */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-700/40 to-cyan-500/50" />

      {/* BLURS */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-cyan-300 opacity-30 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-300 opacity-30 blur-3xl" />

  {/* CONTEÚDO */}
  <div className="relative z-10 max-w-5xl text-center">


        <span className="rounded-full border border-white/30 bg-white/10 px-6 py-2 text-sm font-medium backdrop-blur-lg">
          Clínica Odontológica Premium
        </span>

        <h1 className="mt-8 text-6xl font-black leading-tight md:text-7xl">
          Seu sorriso merece
          <span className="block text-cyan-200">
            excelência.
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl text-blue-100">
          Tratamentos odontológicos modernos,
          atendimento humanizado e planos exclusivos
          para você e sua família.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-5 md:flex-row">

          <a
            href="/register"
            className="rounded-2xl bg-white px-8 py-4 text-lg font-bold text-blue-700 shadow-2xl transition hover:scale-105"
          >
            Criar Conta
          </a>

          <a
            href="/login"
            className="rounded-2xl border border-white/40 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-lg transition hover:bg-white/20"
          >
            Fazer Login
          </a>

        </div>

      </div>

    </section>
  )
}