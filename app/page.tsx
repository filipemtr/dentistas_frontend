import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import PlanoCard from "@/components/PlanoCard"

export default function Home() {

  return (

    <main>

      <Navbar />

      <Hero />

      <section className="bg-[#f8fbff] px-8 py-28">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-blue-700">
              PLANOS EXCLUSIVOS
            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-900">
              Escolha seu plano ideal
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-500">
              Benefícios exclusivos e descontos especiais
              para tratamentos odontológicos.
            </p>

          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-3">

            <PlanoCard
              titulo="Plano Básico"
              preco="R$ 49"
              descricao="Ideal para consultas e prevenção odontológica."
              beneficios={[
                "Consultas com desconto",
                "Limpeza gratuita",
                "Avaliação odontológica"
              ]}
            />

            <PlanoCard
              titulo="Plano Premium"
              preco="R$ 89"
              descricao="Mais benefícios e cobertura ampliada."
              beneficios={[
                "Consultas ilimitadas",
                "Desconto em aparelhos",
                "Prioridade no atendimento"
              ]}
            />

            <PlanoCard
              titulo="Plano Família"
              preco="R$ 149"
              descricao="Proteção completa para toda família."
              beneficios={[
                "Até 5 dependentes",
                "Cobertura familiar",
                "Descontos exclusivos"
              ]}
            />

          </div>

        </div>

      </section>

      <Contact />

      <Footer />

    </main>

  )
}