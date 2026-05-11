"use client"

import { useState } from "react"

export default function RegisterPage() {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  return (

    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-400 px-6">

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-300 opacity-30 blur-3xl" />

      <div className="relative z-10 w-full max-w-md rounded-[32px] border border-white/20 bg-white/10 p-10 shadow-2xl backdrop-blur-2xl">

        <h1 className="text-center text-5xl font-black text-white">
          Registro
        </h1>

        <p className="mt-4 text-center text-blue-100">
          Crie sua conta.
        </p>

        <div className="mt-10 flex flex-col gap-5">

          <input
            type="text"
            placeholder="Nome"
            onChange={(e) => setNome(e.target.value)}
            className="rounded-2xl border border-white/20 bg-white/20 p-4 text-white placeholder:text-blue-100 outline-none backdrop-blur-xl focus:border-white"
          />

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-2xl border border-white/20 bg-white/20 p-4 text-white placeholder:text-blue-100 outline-none backdrop-blur-xl focus:border-white"
          />

          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setSenha(e.target.value)}
            className="rounded-2xl border border-white/20 bg-white/20 p-4 text-white placeholder:text-blue-100 outline-none backdrop-blur-xl focus:border-white"
          />

          <button className="mt-4 rounded-2xl bg-white py-4 text-lg font-black text-blue-700 shadow-2xl transition hover:scale-[1.02]">
            Criar Conta
          </button>

        </div>

      </div>

    </main>
  )
}