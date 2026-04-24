"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
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
  const [state, setState] = useState<"desktop" | "mobile">("desktop");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;

    let mounted = true;

    const cycle = () => {
      if (!mounted) return;
      setIsTransitioning(false);

      window.setTimeout(() => {
        if (!mounted) return;
        setIsTransitioning(true);
        setState((prev) => (prev === "desktop" ? "mobile" : "desktop"));

        window.setTimeout(() => {
          if (!mounted) return;
          setIsTransitioning(false);
        }, HERO_TRANSITION_MS);
      }, HERO_HOLD_MS);
    };

    const interval = window.setInterval(
      cycle,
      HERO_HOLD_MS + HERO_TRANSITION_MS
    );
    cycle();

    return () => {
      mounted = false;
      window.clearInterval(interval);
    };
  }, [reduceMotion]);

  const isDesktopFront = state === "desktop";

  return (
    <div className="min-h-dvh">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:shadow-soft"
        href="#conteudo"
      >
        Pular para o conteudo
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
            <a className="hover:text-zinc-950" href="#prints">
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
            className="inline-flex h-10 items-center justify-center rounded-lg bg-black px-4 text-sm font-medium text-white shadow-softer transition hover:bg-zinc-800"
            href={whatsappLink}
          >
            Quero diagnostico no WhatsApp
          </a>
        </div>
      </header>

      <section
        id="top"
        aria-label="Hero"
        className="relative overflow-hidden bg-black text-white"
      >
        <div className="absolute inset-0 bg-grid opacity-70" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -left-32 top-24 h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-32 -top-20 h-[520px] w-[520px] rounded-full bg-white/8 blur-3xl"
          aria-hidden="true"
        />

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 pb-16 pt-12 md:grid-cols-12 md:items-center md:pb-24 md:pt-16">
          <div className="md:col-span-5" id="conteudo">
            <motion.p
              className="text-xs font-medium tracking-[0.24em] text-white/70"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOut }}
            >
              FEITO PARA ESCRITORIOS DE ADVOCACIA
            </motion.p>
            <motion.h1
              className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.05 }}
            >
              Pare de adivinhar. Veja hoje o que mudou, o que vence e o que
              exige acao agora.
            </motion.h1>
            <motion.p
              className="mt-4 max-w-xl text-pretty text-base text-white/70 md:text-lg"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.12 }}
            >
              Se voce vive apagando incendio em intimacao, prazo, audiencia e
              status, o AtendeJuri te da uma visao clara da carteira e organiza
              o atendimento para sua equipe agir antes do risco virar problema.
            </motion.p>

            <motion.p
              className="mt-4 text-sm font-medium text-white/75"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.16 }}
            >
              Se voce sofre com isso, essa ferramenta e para voce.
            </motion.p>

            <motion.div
              className="mt-7 flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.18 }}
            >
              <a
                className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-5 text-sm font-medium text-black shadow-soft transition hover:bg-zinc-100"
                href={whatsappLink}
              >
                Quero parar de perder prazo
              </a>
              <a
                className="inline-flex h-11 items-center justify-center rounded-lg border border-white/20 bg-white/0 px-5 text-sm font-medium text-white transition hover:bg-white/10"
                href={demoLink}
              >
                Ver o painel funcionando
              </a>
            </motion.div>

            <motion.p
              className="mt-5 text-sm text-white/55"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.25 }}
            >
              Linguagem simples. Acao rapida. Controle total da rotina.
            </motion.p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                {
                  title: "Resposta sem demora",
                  text: "Primeiro retorno e triagem para nao perder quem chegou agora.",
                },
                {
                  title: "Fila com prioridade",
                  text: "O que e urgente sobe. O que pode esperar nao te interrompe.",
                },
                {
                  title: "Andamento com clareza",
                  text: "Quando o cliente pergunta, voce responde com contexto e proximo passo.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: easeOut, delay: 0.28 + idx * 0.06 }}
                >
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="mt-1 text-sm text-white/60">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative md:col-span-7">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.85, ease: easeOut, delay: 0.1 }}
            >
              <div className="relative h-[520px] sm:h-[560px] md:h-[520px] lg:h-[560px]">
                <div className="relative h-full w-full [perspective:1200px]">
                  {/* Desktop wrapper: center-anchored, then offset left/up via margins (no size changes). */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -ml-2 mt-4 sm:-ml-4 sm:mt-2 md:ml-10 md:mt-0 lg:ml-14 lg:-mt-2 xl:ml-20">
                    <motion.div
                      className="will-change-transform"
                      initial={{ opacity: 0, y: 14 }}
                      animate={
                        reduceMotion
                          ? { opacity: 1, y: 0 }
                          : {
                            y: isDesktopFront ? -40 : 40,
                            scale: isDesktopFront ? 1.05 : 0.85,
                            opacity: isDesktopFront ? 1 : 0.6,
                            filter: isDesktopFront
                              ? "blur(0px)"
                              : "blur(2px)",
                            rotateY: -15,
                            zIndex: isDesktopFront ? 2 : 1,
                          }
                      }
                      transition={{
                        duration: HERO_TRANSITION_MS / 1000,
                        ease: easeInOut,
                      }}
                    >
                      <div className="w-[min(720px,92vw)]">
                        <BrowserMockup
                          className="relative"
                          contentClassName="aspect-[90/49] bg-zinc-100"
                          browserUrl="app.atendejuri.com.br"
                        >
                          <Image
                            src="/prints/desktop/dashboard.png"
                            alt="Tela do AtendeJuri no desktop"
                            fill
                            priority
                            sizes="(max-width: 768px) 92vw, 720px"
                            unoptimized
                            className="object-contain"
                          />
                        </BrowserMockup>
                      </div>
                    </motion.div>
                  </div>

                  {/* Mobile wrapper: center-anchored, then offset right/up via margins (no size changes). */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ml-48 mt-0 sm:ml-52 sm:-mt-4 md:ml-72 md:-mt-8 lg:ml-80 lg:-mt-10 xl:ml-88">
                    <motion.div
                      className="will-change-transform"
                      initial={{ opacity: 0, y: 16 }}
                      animate={
                        reduceMotion
                          ? { opacity: 1, y: 0 }
                          : {
                            y: !isDesktopFront ? -40 : 40,
                            scale: !isDesktopFront ? 1 : 0.8,
                            opacity: !isDesktopFront ? 1 : isTransitioning ? 0.35 : 0,
                            filter: !isDesktopFront ? "blur(0px)" : "blur(2px)",
                            rotateY: 15,
                            zIndex: !isDesktopFront ? 2 : 1,
                          }
                      }
                      transition={{
                        duration: !isDesktopFront ? 0.55 : 0.35,
                        ease: easeInOut,
                      }}
                    >
                      <div className="w-[180px] sm:w-[200px] md:w-[220px]">
                        <PhoneMockup contentClassName="aspect-[215/466] bg-zinc-900">
                          <div className="relative h-full w-full">
                            <Image
                              src="/prints/mobile/dashboard.jpg"
                              alt="Tela do AtendeJuri no celular"
                              fill
                              priority
                              sizes="(max-width: 768px) 100vw, 320px"
                              unoptimized
                              className="object-contain"
                            />
                          </div>
                        </PhoneMockup>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
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
                    alt="Exemplo de atendimento e organizacao no desktop"
                    fill
                    sizes="(max-width: 768px) 100vw, 700px"
                    className="object-contain"
                  />
                </BrowserMockup>
              </FadeIn>
              <FadeIn className="md:col-span-5" delay={0.05}>
                <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-softer">
                  <h3 className="text-lg font-semibold">Triagem que vira acao</h3>
                  <p className="mt-2 text-sm text-zinc-600">
                    Em vez de apagar incendio, sua equipe recebe prioridade,
                    proxima acao e contexto para agir rapido no que importa.
                  </p>
                  <ul className="mt-5 space-y-3 text-sm text-zinc-700">
                    {[
                      "O que mudou hoje em cada processo",
                      "Intimacao e prazo com prioridade",
                      "Audiencia com data, hora e local",
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
                      className="inline-flex h-11 items-center justify-center rounded-lg bg-black px-5 text-sm font-medium text-white shadow-softer transition hover:bg-zinc-800"
                      href={whatsappLink}
                    >
                      Quero meu diagnostico
                    </a>
                    <a
                      className="inline-flex h-11 items-center justify-center rounded-lg border border-black/15 px-5 text-sm font-medium text-black transition hover:bg-black/5"
                      href={demoLink}
                    >
                      Ver demonstracao
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section id="prints" className="bg-zinc-50 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <FadeIn>
              <p className="text-xs font-medium tracking-[0.24em] text-zinc-500">
                PRINTS
              </p>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Nao e so bonito. E para responder e agir mais rapido.
              </h2>
              <p className="mt-3 max-w-2xl text-pretty text-base text-zinc-600 md:text-lg">
                Do atendimento ao andamento: tudo pensado para voce ver, decidir
                e responder sem se perder.
              </p>
            </FadeIn>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12">
              <FadeIn className="md:col-span-8">
                <BrowserMockup contentClassName="aspect-[90/49] bg-zinc-100">
                  <Image
                    src="/prints/desktop/dashboard.png"
                    alt="Exemplo de acompanhamento e follow-up no desktop"
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-contain"
                  />
                </BrowserMockup>
              </FadeIn>
              <FadeIn className="md:col-span-4" delay={0.05}>
                <PhoneMockup
                  className="mx-auto max-w-[320px]"
                  contentClassName="aspect-[215/466] bg-zinc-900"
                >
                  <div className="relative h-full w-full">
                    <Image
                      src="/prints/mobile/dashboard2.jpeg"
                      alt="Exemplo de painel no celular"
                      fill
                      sizes="(max-width: 768px) 100vw, 320px"
                      unoptimized
                      className="object-contain"
                    />
                  </div>
                </PhoneMockup>
              </FadeIn>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-center">
              <FadeIn className="md:col-span-5">
                <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-softer">
                  <h3 className="text-lg font-semibold">Resposta de andamento</h3>
                  <p className="mt-2 text-sm text-zinc-600">
                    Quando o cliente pergunta e sua equipe trava, o fluxo ajuda
                    a devolver resposta objetiva com mais agilidade.
                  </p>
                  <div className="mt-5 rounded-xl border border-black/10 bg-zinc-50 p-4 text-sm text-zinc-700">
                    Cliente: &quot;Tem novidade?&quot;
                    <span className="block text-zinc-500">
                      Resumo claro do contexto e do proximo passo.
                    </span>
                  </div>
                </div>
              </FadeIn>
              <FadeIn className="md:col-span-7" delay={0.05}>
                <BrowserMockup contentClassName="aspect-[90/49] bg-zinc-100">
                  <Image
                    src="/prints/desktop/Chat.png"
                    alt="Exemplo de area de processos no desktop"
                    fill
                    sizes="(max-width: 768px) 100vw, 700px"
                    className="object-contain"
                  />
                </BrowserMockup>
              </FadeIn>
            </div>
          </div>
        </section>

        <section id="preco" className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-start">
              <FadeIn className="md:col-span-7">
                <p className="text-xs font-medium tracking-[0.24em] text-zinc-500">
                  IMPLANTACAO
                </p>
                <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                  Em poucos dias, seu escritorio sai do modo reativo.
                </h2>
                <p className="mt-3 max-w-2xl text-pretty text-base text-zinc-600 md:text-lg">
                  A implantacao e guiada para sua rotina: perguntas iniciais,
                  triagem, prioridades e quando sua equipe assume.
                </p>
                <ul className="mt-6 grid grid-cols-1 gap-3 text-sm text-zinc-700 sm:grid-cols-2">
                  {[
                    "Perguntas iniciais e captura de dados",
                    "Prioridade por tipo e urgencia",
                    "Fila de follow-up e retorno",
                    "Equipe assume com contexto",
                  ].map((item) => (
                    <li
                      key={item}
                      className="rounded-xl border border-black/10 bg-zinc-50 p-4"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn className="md:col-span-5" delay={0.05}>
                <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-soft">
                  <p className="text-xs font-medium tracking-[0.24em] text-zinc-500">
                    A PARTIR DE
                  </p>
                  <div className="mt-3 text-5xl font-semibold tracking-tight">
                    R$ 297
                    <span className="ml-2 text-base font-medium text-zinc-500">
                      / mes
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-zinc-600">
                    Para comecar com atendimento, triagem e organizacao.
                  </p>
                  <a
                    className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-lg bg-black px-5 text-sm font-medium text-white shadow-softer transition hover:bg-zinc-800"
                    href={whatsappLink}
                  >
                    Conversar no WhatsApp
                  </a>
                  <a
                    className="mt-3 inline-flex h-11 w-full items-center justify-center rounded-lg border border-black/15 px-5 text-sm font-medium text-black transition hover:bg-black/5"
                    href={demoLink}
                  >
                    Agendar demonstracao
                  </a>
                </div>
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
                  O caminho mais rapido e WhatsApp. Em poucos minutos voce
                  entende como organizar atendimento e parar de perder contato.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    className="inline-flex h-11 items-center justify-center rounded-lg bg-black px-5 text-sm font-medium text-white shadow-softer transition hover:bg-zinc-800"
                    href={whatsappLink}
                  >
                    Quero falar no WhatsApp
                  </a>
                  <a
                    className="inline-flex h-11 items-center justify-center rounded-lg border border-black/15 px-5 text-sm font-medium text-black transition hover:bg-black/5"
                    href={demoLink}
                  >
                    Quero agendar demo
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
                        className="mt-2 h-11 w-full rounded-lg border border-black/10 bg-white px-3 text-sm outline-none ring-0 transition focus:border-black/25"
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
                        className="mt-2 h-11 w-full rounded-lg border border-black/10 bg-white px-3 text-sm outline-none ring-0 transition focus:border-black/25"
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
                        className="mt-2 h-11 w-full rounded-lg border border-black/10 bg-white px-3 text-sm outline-none ring-0 transition focus:border-black/25"
                        id="challenge"
                        name="challenge"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          Selecione uma opcao
                        </option>
                        <option value="responder-rapido">Responder mais rapido</option>
                        <option value="nao-sei-o-que-mudou">Nao sei o que mudou nos processos hoje</option>
                        <option value="medo-de-prazo">Medo de perder prazo e intimacao</option>
                        <option value="audiencia-ultima-hora">Descobrir audiencia em cima da hora</option>
                        <option value="status-carteira">Nao tenho visao real da carteira</option>
                        <option value="cliente-sem-resposta">Cliente pergunta e eu nao tenho resposta</option>
                      </select>
                    </div>
                    <button
                      className="inline-flex h-11 items-center justify-center rounded-lg bg-black px-5 text-sm font-medium text-white shadow-softer transition hover:bg-zinc-800"
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
                  a: "Nao. Ela tira peso da operacao e organiza prioridade. A decisao continua com sua equipe.",
                },
                {
                  q: "Vou conseguir saber o que mudou hoje?",
                  a: "Sim. A proposta e abrir o painel e enxergar rapidamente o que mexeu, o que pede acao e o que pode esperar.",
                },
                {
                  q: "E sobre intimacao, prazo e audiencia?",
                  a: "O fluxo destaca riscos e prioridades para sua equipe agir antes. Na demo, mostramos como isso entra na rotina do seu escritorio.",
                },
                {
                  q: "Cliente pediu andamento. Vou responder melhor?",
                  a: "Sim. Com o fluxo configurado, fica mais facil responder status com clareza, sem prometer analise juridica definitiva.",
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
                  <summary className="cursor-pointer list-none text-base font-medium">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-sm text-white/70">{item.a}</p>
                </motion.details>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-5 text-sm font-medium text-black shadow-soft transition hover:bg-zinc-100"
                href={whatsappLink}
              >
                Quero diagnostico no WhatsApp
              </a>
              <a
                className="inline-flex h-11 items-center justify-center rounded-lg border border-white/20 bg-white/0 px-5 text-sm font-medium text-white transition hover:bg-white/10"
                href={demoLink}
              >
                Agendar demonstracao
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
                    Atendimento inteligente no WhatsApp para escritorios de advocacia.
                  </p>
                </div>
                <div className="flex gap-6 text-sm text-white/70">
                  <a className="hover:text-white" href={whatsappLink}>
                    WhatsApp
                  </a>
                  <a className="hover:text-white" href={demoLink}>
                    Demonstracao
                  </a>
                </div>
              </div>
              <p className="mt-8 text-xs text-white/45">
                AtendeJuri. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
