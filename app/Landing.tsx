"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { BrowserMockup } from "./components/mockups/BrowserMockup";
import { PhoneMockup } from "./components/mockups/PhoneMockup";

type Props = {
  whatsappLink: string;
  demoLink: string;
  formAction: string;
};

const easeOut = [0.22, 1, 0.36, 1] as const;
const easeInOut = [0.45, 0, 0.55, 1] as const;
const HERO_HOLD_MS = 3000;
const HERO_TRANSITION_MS = 800;

function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: easeOut, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Landing({ whatsappLink, demoLink, formAction }: Props) {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end center"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.6], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.9, 1]);
  const y = useTransform(scrollYProgress, [0, 0.6], [40, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.5, 1]);



  return (
    <div className="min-h-dvh overflow-x-hidden">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:shadow-soft"
        href="#conteudo"
      >
        Pular para o conteúdo
      </a>

      <header className="sticky top-0 z-40 border-b border-black/10 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-3">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-black text-white">
              A
            </span>
            <span className="leading-tight">
              <span className="block text-xs font-medium tracking-[0.24em] text-zinc-500">
                Atende
              </span>
              <span className="block text-lg font-semibold text-zinc-950">
                Juri
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
            <a className="hover:text-zinc-950" href="#produto">
              Produto
            </a>
            <a className="hover:text-zinc-950" href="#demonstracao">
              Demonstração
            </a>
            <a className="hover:text-zinc-950" href="#preco">
              Planos
            </a>
            <a className="hover:text-zinc-950" href="#faq">
              FAQ
            </a>
          </div>

          <a
            className="inline-flex h-10 items-center justify-center rounded-lg bg-black px-4 text-sm font-medium text-white shadow-softer transition hover:bg-zinc-800 active:scale-95"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hidden sm:inline">Diagnóstico no WhatsApp</span>
            <span className="sm:hidden">Diagnóstico</span>
          </a>
        </div>
      </header>

      <section
        id="top"
        aria-label="Hero"
        className="relative overflow-visible bg-black text-white"
        ref={heroRef}
      >
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
        <div
          className="pointer-events-none absolute left-1/2 -top-24 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-white/10 blur-[100px]"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center px-6 pb-24 pt-20 md:pt-28 text-center">
          <motion.p
            className="text-xs font-semibold tracking-[0.24em] text-white/50"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            A NOVA ERA DA GESTÃO JURÍDICA
          </motion.p>
          <motion.h1
            className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-[5rem]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.05 }}
          >
            Pare de apagar incêndios. Veja só o que exige ação <span className="text-white/60">agora.</span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-pretty text-lg text-white/70 md:text-xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.12 }}
          >
            Integramos suas intimações (DJEN) diretamente com o seu atendimento (WhatsApp). Uma visão implacável onde o urgente sobrepõe o irrelevante.
          </motion.p>

          <motion.div
            className="relative z-50 mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.18 }}
          >
            <a
              className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 text-sm font-semibold text-black shadow-soft transition hover:bg-zinc-100 active:scale-95"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com Consultor
            </a>
            <a
              className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-white/10 bg-white/0 px-8 text-sm font-semibold text-white transition hover:bg-white/5 active:scale-95"
              href={demoLink}
            >
              Ver Teste Prático
            </a>
          </motion.div>

          <div className="relative mt-24 w-full [perspective:1200px]">
            <motion.div
              style={{
                rotateX: reduceMotion ? 0 : rotateX,
                scale: reduceMotion ? 1 : scale,
                y: reduceMotion ? 0 : y,
                opacity: reduceMotion ? 1 : opacity,
                transformStyle: "preserve-3d",
              }}
              className="relative mx-auto w-full max-w-5xl rounded-2xl border border-white/10 bg-zinc-900/50 p-2 shadow-2xl backdrop-blur-xl md:p-4 will-change-transform"
            >
              <div className="flex items-center gap-2 border-b border-white/5 bg-zinc-950 px-4 py-3 rounded-t-xl relative z-10">
                <div className="h-3 w-3 rounded-full bg-[#FF5F56] shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)]" />
                <div className="h-3 w-3 rounded-full bg-[#FFBD2E] shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)]" />
                <div className="h-3 w-3 rounded-full bg-[#27C93F] shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)]" />
                <div className="ml-4 flex-1 text-center">
                  <div className="inline-flex items-center rounded-md bg-white/5 px-24 py-1 text-[11px] text-white/30 truncate">
                    app.atendejuri.com.br
                  </div>
                </div>
              </div>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-b-xl bg-zinc-950">
                <Image
                  src="/prints/desktop/dashboard.png"
                  alt="Tela do AtendeJuri no desktop"
                  fill
                  priority
                  unoptimized
                  className="object-cover opacity-90 transition duration-700 hover:opacity-100 hover:scale-[1.02]"
                />
              </div>

              {/* Floating Parallax Fragments (Movidos para fora do overflow-hidden) */}
              <motion.div 
                className="absolute right-2 bottom-6 max-w-[280px] sm:max-w-max md:-right-12 md:-bottom-8 z-20"
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, -80]) }}
              >
                <motion.div
                  className="rounded-xl border border-white/10 bg-black/60 p-4 shadow-2xl backdrop-blur-xl"
                  initial={{ opacity: 0, x: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 100 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20 text-red-400">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Prazo Vencendo Hoje</p>
                      <p className="text-xs text-white/60">Processo n° 00214...</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                className="absolute left-2 top-12 max-w-[280px] sm:max-w-max md:-left-12 md:top-24 z-20"
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, 60]) }}
              >
                <motion.div
                  className="rounded-xl border border-white/10 bg-black/60 p-4 shadow-2xl backdrop-blur-xl"
                  initial={{ opacity: 0, x: -30, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 0.8, type: "spring", stiffness: 100 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Nova Mensagem WhatsApp</p>
                      <p className="text-xs text-white/60">"Doutor, e a audiência?"</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <main>
        <section id="produto" className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <FadeIn>
              <p className="text-xs font-medium tracking-[0.24em] text-zinc-500">
                O PRODUTO
              </p>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Um painel para parar de trabalhar no escuro.
              </h2>
              <p className="mt-3 max-w-2xl text-pretty text-base text-zinc-600 md:text-lg">
                O AtendeJuri mostra o que mudou hoje, destaca risco de prazo e
                coloca sua carteira em ordem com prioridade clara. E quando o
                cliente pergunta, sua equipe responde com contexto.
              </p>
            </FadeIn>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-center">
              <FadeIn className="md:col-span-7">
                <BrowserMockup contentClassName="aspect-[90/49] bg-zinc-100">
                  <Image
                    src="/prints/desktop/Processos.png"
                    alt="Exemplo de atendimento e organização no desktop"
                    fill
                    sizes="(max-width: 768px) 100vw, 700px"
                    className="object-contain"
                  />
                </BrowserMockup>
              </FadeIn>
              <FadeIn className="md:col-span-5" delay={0.05}>
                <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-softer">
                  <h3 className="text-lg font-semibold">Triagem que vira ação</h3>
                  <p className="mt-2 text-sm text-zinc-600">
                    Em vez de apagar incêndio, sua equipe recebe prioridade,
                    próxima ação e contexto para agir rápido no que importa.
                  </p>
                  <ul className="mt-5 space-y-3 text-sm text-zinc-700">
                    {[
                      "O que mudou hoje em cada processo",
                      "Intimação e prazo com prioridade",
                      "Audiência com data, hora e local",
                      "Carteira com fila clara (sem 200 parados)",
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      className="inline-flex h-11 items-center justify-center rounded-lg bg-black px-5 text-sm font-medium text-white shadow-softer transition hover:bg-zinc-800 active:scale-95"
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quero meu diagnóstico
                    </a>
                    <a
                      className="inline-flex h-11 items-center justify-center rounded-lg border border-black/15 px-5 text-sm font-medium text-black transition hover:bg-black/5 active:scale-95"
                      href={demoLink}
                    >
                      Ver demonstração
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section id="demonstracao" className="bg-white py-16 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <FadeIn className="text-center">
              <p className="text-xs font-semibold tracking-[0.24em] text-zinc-400">
                A PRÁTICA DO CONTROLE
              </p>
              <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight md:text-5xl text-zinc-900">
                Pare de buscar informações. Deixe que elas cheguem prontas.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-zinc-600">
                Acompanhamento processual, follow-ups de clientes e disparo ágil de mensagens centralizados no mesmo lugar.
              </p>
            </FadeIn>

            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
              {/* Bento Box 1: Desktop Principal */}
              <FadeIn className="md:col-span-2 overflow-hidden rounded-3xl bg-zinc-50 border border-black/5 ring-1 ring-black/5 pt-12 px-6 sm:px-12 flex flex-col items-center">
                <div className="max-w-xl text-center mb-10">
                  <h3 className="text-2xl font-bold tracking-tight text-zinc-900">Dashboard de Acompanhamento Integral</h3>
                  <p className="mt-2 text-zinc-600">Visualize todas as movimentações e petições do dia em uma única interface inteligente, otimizada para Desktop.</p>
                </div>
                <div className="w-full max-w-4xl translate-y-4 sm:translate-y-8 rounded-t-xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] relative ring-1 ring-black/10">
                  <BrowserMockup className="rounded-t-xl" contentClassName="aspect-[90/49] bg-zinc-100">
                    <Image
                      src="/prints/desktop/dashboard.png"
                      alt="Exemplo de acompanhamento no desktop"
                      fill
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      unoptimized
                      className="object-cover object-top"
                    />
                  </BrowserMockup>
                </div>
              </FadeIn>

              {/* Bento Box 2: Mobile Triage */}
              <FadeIn className="overflow-hidden rounded-3xl bg-zinc-50 border border-black/5 ring-1 ring-black/5 pt-10 flex flex-col items-center">
                <div className="px-8 text-center mb-8">
                  <h3 className="text-xl font-bold tracking-tight text-zinc-900">Triagem na Palma da Mão</h3>
                  <p className="mt-2 text-sm text-zinc-600">Toda a operação do escritório ao alcance de 1 tap. Não atrase retornos ao cliente por estar fora da mesa.</p>
                </div>
                <div className="mt-auto w-[240px] translate-y-6 sm:translate-y-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] relative">
                  <PhoneMockup className="mx-auto" contentClassName="aspect-[215/466] bg-zinc-900">
                    <Image
                      src="/prints/mobile/dashboard2.jpeg"
                      alt="Exemplo de painel no celular"
                      fill
                      sizes="240px"
                      unoptimized
                      className="object-cover object-top"
                    />
                  </PhoneMockup>
                </div>
              </FadeIn>

              {/* Bento Box 3: Atendimento Contextualizado */}
              <FadeIn className="overflow-hidden rounded-3xl bg-zinc-50 border border-black/5 ring-1 ring-black/5 pt-10 flex flex-col justify-end">
                <div className="px-10 text-center sm:text-left mb-8 md:mt-4">
                  <div className="mb-4 inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 shadow-sm">
                    <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2" />
                    <span className="text-xs font-semibold text-zinc-800">WhatsApp Vinculado</span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-zinc-900">Resposta com Contexto Perfeito</h3>
                  <p className="mt-2 text-sm text-zinc-600">Cliente pede andamento? O fluxo do AtendeJuri traz o resumo consolidado instantaneamente da base.</p>
                </div>
                <div className="mt-auto w-full md:w-[120%] lg:w-[110%] md:translate-x-8 lg:translate-x-12 translate-y-6 lg:translate-y-12 sm:rounded-tl-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] relative ring-1 ring-black/10">
                  <BrowserMockup className="sm:rounded-tl-xl" contentClassName="aspect-[90/49] bg-zinc-100">
                    <Image
                      src="/prints/desktop/Chat.png"
                      alt="Exemplo do chat e atendimento no desktop"
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      unoptimized
                      className="object-cover object-top"
                    />
                  </BrowserMockup>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section id="preco" className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <FadeIn>
                <p className="text-xs font-medium tracking-[0.24em] text-zinc-500">
                  PLANOS
                </p>
                <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                  Pronto para escalar o seu escritório?
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-pretty text-base text-zinc-600 md:text-lg">
                  14 dias grátis para testar. Sem cartão de crédito. Economize 17% assinando o plano anual (equivalente a 2 meses grátis).
                </p>
              </FadeIn>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
              <FadeIn delay={0.05} className="flex flex-col">
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex flex-1 flex-col rounded-2xl border border-black/10 bg-white p-7 shadow-softer hover:shadow-xl relative z-10"
                >
                  <p className="text-sm font-semibold text-zinc-900">Starter</p>
                  <p className="mt-2 text-sm text-zinc-500">Para profissionais solo e pequenas equipes.</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-semibold tracking-tight">R$ 197</span>
                    <span className="text-sm font-medium text-zinc-500">/ mês</span>
                  </div>
                  <ul className="mt-8 flex flex-1 flex-col gap-4 text-sm text-zinc-700">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                      <span className="font-medium text-black">Usuários de equipe ilimitados</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                      <span>Até 150 processos ativos e 200 clientes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                      <span>1 OAB monitorada (DJEN)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                      <span>1 WhatsApp conectado</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                      <span>400 conversas IA por mês (template fixo)</span>
                    </li>
                  </ul>
                  <a
                    className="mt-8 inline-flex h-11 w-full items-center justify-center rounded-lg border border-black/15 bg-white px-5 text-sm font-medium text-black transition hover:bg-black/5 active:scale-95"
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Começar grátis
                  </a>
                </motion.div>
              </FadeIn>

              <FadeIn delay={0.1} className="flex flex-col md:-mt-4 lg:-mt-6 md:mb-4 lg:mb-6">
                <motion.div 
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex flex-1 flex-col rounded-2xl border-2 border-black bg-white p-7 shadow-soft ring-4 ring-black/5 relative z-20 hover:shadow-2xl hover:shadow-black/20"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-zinc-900">Operacional</p>
                    <span className="rounded-full bg-black/5 px-2.5 py-0.5 text-xs font-medium text-black">
                      Recomendado
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-zinc-500">Tudo que seu escritório precisa para crescer.</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-semibold tracking-tight">R$ 497</span>
                    <span className="text-sm font-medium text-zinc-500">/ mês</span>
                  </div>
                  <ul className="mt-8 flex flex-1 flex-col gap-4 text-sm text-zinc-700">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                      <span className="font-medium text-black">Usuários de equipe ilimitados</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                      <span>Até 500 processos ativos e 500 clientes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                      <span>3 OABs monitoradas (DJEN)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                      <span>3 WhatsApps conectados</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                      <span>1.500 conversas IA / mês com persona editável</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                      <span>Até 5 playbooks de IA e roteiros</span>
                    </li>
                  </ul>
                  <a
                    className="mt-8 inline-flex h-11 w-full items-center justify-center rounded-lg bg-black px-5 text-sm font-medium text-white shadow-softer transition hover:bg-zinc-800 active:scale-95"
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Começar grátis
                  </a>
                </motion.div>
              </FadeIn>

              <FadeIn delay={0.15} className="flex flex-col">
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex flex-1 flex-col rounded-2xl border border-black/10 bg-white p-7 shadow-softer hover:shadow-xl relative z-10"
                >
                  <p className="text-sm font-semibold text-zinc-900">Premium</p>
                  <p className="mt-2 text-sm text-zinc-500">Para departamentos e bancas de alta performance.</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-semibold tracking-tight">R$ 1.297</span>
                    <span className="text-sm font-medium text-zinc-500">/ mês</span>
                  </div>
                  <ul className="mt-8 flex flex-1 flex-col gap-4 text-sm text-zinc-700">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                      <span className="font-medium text-black">Usuários de equipe ilimitados</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                      <span>Processos ativos e clientes ilimitados</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                      <span>10 OABs monitoradas e 10 WhatsApps</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                      <span>10.000 conversas IA por mês</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                      <span>BI Avançado, API Pública e SSO/SAML</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                      <span>Plataforma White-label (sua marca/domínio)</span>
                    </li>
                  </ul>
                  <a
                    className="mt-8 inline-flex h-11 w-full items-center justify-center rounded-lg border border-black/15 bg-white px-5 text-sm font-medium text-black transition hover:bg-black/5 active:scale-95"
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Falar com consultor
                  </a>
                </motion.div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="bg-zinc-50 py-16 md:py-24" id="formulario">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-start">
              <FadeIn className="md:col-span-6">
                <p className="text-xs font-medium tracking-[0.24em] text-zinc-500">
                  CONTATO
                </p>
                <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                  Se hoje esta no caos, vamos colocar ordem.
                </h2>
                <p className="mt-3 text-pretty text-base text-zinc-600 md:text-lg">
                  O caminho mais rápido é WhatsApp. Em poucos minutos você
                  entende como organizar atendimento e parar de perder contato.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    className="inline-flex h-11 items-center justify-center rounded-lg bg-black px-5 text-sm font-medium text-white shadow-softer transition hover:bg-zinc-800 active:scale-95"
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Quero falar no WhatsApp
                  </a>
                  <a
                    className="inline-flex h-11 items-center justify-center rounded-lg border border-black/15 px-5 text-sm font-medium text-black transition hover:bg-black/5 active:scale-95"
                    href={demoLink}
                  >
                    Quero agendar demonstração
                  </a>
                </div>
              </FadeIn>

              <FadeIn className="md:col-span-6" delay={0.05}>
                <form
                  className="rounded-2xl border border-black/10 bg-white p-7 shadow-soft"
                  action={formAction}
                  method="post"
                >
                  <div className="grid gap-5">
                    <div>
                      <label className="text-sm font-medium text-zinc-900" htmlFor="name">
                        Nome
                      </label>
                      <input
                        className="mt-2 h-11 w-full rounded-lg border border-black/10 bg-white px-3 text-sm outline-none ring-0 transition focus:border-black/30 focus:ring-2 focus:ring-black/10"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Seu nome"
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="text-sm font-medium text-zinc-900"
                        htmlFor="whatsapp"
                      >
                        WhatsApp
                      </label>
                      <input
                        className="mt-2 h-11 w-full rounded-lg border border-black/10 bg-white px-3 text-sm outline-none ring-0 transition focus:border-black/30 focus:ring-2 focus:ring-black/10"
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        placeholder="(00) 00000-0000"
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="text-sm font-medium text-zinc-900"
                        htmlFor="challenge"
                      >
                        O que mais te preocupa hoje?
                      </label>
                      <select
                        className="mt-2 h-11 w-full rounded-lg border border-black/10 bg-white px-3 text-sm outline-none ring-0 transition focus:border-black/30 focus:ring-2 focus:ring-black/10"
                        id="challenge"
                        name="challenge"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          Selecione uma opção
                        </option>
                        <option value="responder-rapido">Responder mais rápido</option>
                        <option value="nao-sei-o-que-mudou">Não sei o que mudou nos processos hoje</option>
                        <option value="medo-de-prazo">Medo de perder prazo e intimação</option>
                        <option value="audiencia-ultima-hora">Descobrir audiência em cima da hora</option>
                        <option value="status-carteira">Não tenho visão real da carteira</option>
                        <option value="cliente-sem-resposta">Cliente pergunta e eu não tenho resposta</option>
                      </select>
                    </div>
                    <button
                      className="inline-flex h-11 items-center justify-center rounded-lg bg-black px-5 text-sm font-medium text-white shadow-softer transition hover:bg-zinc-800 active:scale-95"
                      type="submit"
                    >
                      Receber contato
                    </button>
                    <p className="text-xs text-zinc-500">
                      Retorno comercial. Sem compromisso.
                    </p>
                  </div>
                </form>
              </FadeIn>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-black py-16 text-white md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <FadeIn>
              <p className="text-xs font-medium tracking-[0.24em] text-white/65">
                FAQ
              </p>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Perguntas diretas para decidir hoje.
              </h2>
            </FadeIn>

            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                {
                  q: "A IA substitui minha equipe?",
                  a: "Não. Ela tira peso da operação e organiza prioridade. A decisão continua com sua equipe.",
                },
                {
                  q: "Vou conseguir saber o que mudou hoje?",
                  a: "Sim. A proposta é abrir o painel e enxergar rapidamente o que mexeu, o que pede ação e o que pode esperar.",
                },
                {
                  q: "E sobre intimacao, prazo e audiencia?",
                  a: "O fluxo destaca riscos e prioridades para sua equipe agir antes. Na demo, mostramos como isso entra na rotina do seu escritório.",
                },
                {
                  q: "Cliente pediu andamento. Vou responder melhor?",
                  a: "Sim. Com o fluxo configurado, fica mais facil responder status com clareza, sem prometer analise juridica definitiva.",
                },
                {
                  q: "E se o escritório crescer e passar dos limites do plano?",
                  a: "Não se preocupe com mudanças forçadas. O plano Operacional cresce com você através de pacotes avulsos extras (Add-ons) de WhatsApp, limites de IA ou novas contas OAB monitoradas. Você expande apenas o que precisa.",
                },
              ].map((item, idx) => (
                <motion.details
                  key={item.q}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, ease: easeOut, delay: Math.min(idx * 0.05, 0.2) }}
                >
                  <summary className="cursor-pointer list-none rounded-lg text-base font-medium transition outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-sm text-white/70">{item.a}</p>
                </motion.details>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-5 text-sm font-medium text-black shadow-soft transition hover:bg-zinc-100 active:scale-95"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero diagnóstico no WhatsApp
              </a>
              <a
                className="inline-flex h-11 items-center justify-center rounded-lg border border-white/20 bg-white/0 px-5 text-sm font-medium text-white transition hover:bg-white/10 active:scale-95"
                href={demoLink}
              >
                Agendar demonstração
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-black pb-10 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <div className="border-t border-white/10 pt-10">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
                <div>
                  <p className="text-sm font-medium">AtendeJuri</p>
                  <p className="mt-1 text-sm text-white/60">
                    Atendimento inteligente no WhatsApp para escritórios de advocacia.
                  </p>
                </div>
                <div className="flex gap-6 text-sm text-white/70">
                  <a className="hover:text-white" href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                  <a className="hover:text-white" href={demoLink}>
                    Demonstração
                  </a>
                </div>
              </div>
              <p className="mt-8 text-xs text-white/55">
                <a href="https://www.agenciajuri.com.br/" target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-white hover:underline transition-colors">
                  AgenciaJuri
                </a> * Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
