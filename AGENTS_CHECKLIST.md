# AGENTS CHECKLIST (OBRIGATORIO)

## Regra obrigatoria para qualquer agente

1. **LER este arquivo por completo antes de qualquer alteracao.**
2. **Nao produzir codigo sem antes registrar o status inicial no checklist.**
3. **Ao finalizar, registrar tudo que foi feito** (arquivos, mudancas, o que funcionou e o que nao funcionou).
4. **Novos agentes tambem devem seguir esta regra** sem excecao.
5. Sempre atualizar este arquivo com linguagem objetiva e tecnica.

## Fluxo padrao (sempre)

1. Ler `AGENTS_CHECKLIST.md`.
2. Ver ultimo bloco em `Historico de alteracoes`.
3. Executar somente o escopo pedido.
4. Atualizar checklist ao terminar:
   - O que foi alterado
   - O que deu certo
   - O que deu errado
   - Comandos de validacao executados
   - Proximo passo recomendado

## Template obrigatorio por execucao

Copiar e preencher:

```md
### [AAAA-MM-DD HH:mm] Agente: <nome>

- Escopo recebido:
- Arquivos alterados:
- Alteracoes realizadas:
- O que deu certo:
- O que deu errado:
- Validacao executada:
- Status final:
- Proximo passo recomendado:
```

---

## Historico de alteracoes

### [2026-04-21 13:35] Agente: OpenCode (hero mobile image refresh)

- Escopo recebido: corrigir atualizacao da imagem do mock do celular no hero, sem alterar outras partes.
- Arquivos alterados: `app/Landing.tsx`, `AGENTS_CHECKLIST.md`.
- Alteracoes realizadas:
  - No `Image` do mock mobile do hero, adicionado `unoptimized` para evitar cache do otimizador do Next nessa imagem.
  - Adicionado `priority` no mesmo `Image` do hero.
- O que deu certo:
  - Ajuste aplicado somente no mock do celular no hero.
  - Build passou apos alteracao.
- O que deu errado:
  - Nada.
- Validacao executada:
  - `npm run build`.
- Status final: concluido.
- Proximo passo recomendado: hard refresh no navegador para garantir exibicao da nova imagem.

### [2026-04-21 13:20] Agente: OpenCode (ajuste brilho mock desktop)

- Escopo recebido: reduzir o brilho do mock do computador no hero sem alterar mais nada.
- Arquivos alterados: `app/Landing.tsx`, `AGENTS_CHECKLIST.md`.
- Alteracoes realizadas:
  - Removido `brightness/contrast` aplicado no mock desktop quando em foco no hero.
  - Filtro do estado em foco ajustado para `blur(0px)`.
- O que deu certo:
  - Linhas e divisoes da imagem do mock desktop ficam mais visiveis, sem excesso de brilho.
- O que deu errado:
  - Nada.
- Validacao executada:
  - `npm run build`.
- Status final: concluido.
- Proximo passo recomendado: validar visualmente as linhas/divisoes da imagem do mock desktop no hero.

### [2026-04-21 13:12] Agente: OpenCode (reversao cards hero)

- Escopo recebido: reverter apenas os cards do hero (os que estavam com "Nao sei o que aconteceu...") para a versao anterior.
- Arquivos alterados: `app/Landing.tsx`, `AGENTS_CHECKLIST.md`.
- Alteracoes realizadas:
  - Cards do hero voltaram para 3 blocos originais: "Resposta sem demora", "Fila com prioridade", "Andamento com clareza".
  - Grid dos cards voltou para `sm:grid-cols-3`.
- O que deu certo:
  - Reversao aplicada apenas no trecho solicitado.
- O que deu errado:
  - Nada.
- Validacao executada:
  - pendente nesta etapa.
- Status final: concluido.
- Proximo passo recomendado: revisar visualmente o hero para confirmar que voltou ao estado esperado.

### [2026-04-21 13:05] Agente: OpenCode (ajuste fino hero)

- Escopo recebido: manter o texto principal do hero e voltar o texto abaixo dos botoes para a versao anterior.
- Arquivos alterados: `app/Landing.tsx`, `AGENTS_CHECKLIST.md`.
- Alteracoes realizadas:
  - Hero (microcopy abaixo dos botoes) alterado de "Linguagem simples. Sem enrolacao. Sua equipe no controle." para "Linguagem simples. Acao rapida. Controle total da rotina.".
  - Nenhuma alteracao estrutural foi realizada.
- O que deu certo:
  - Ajuste aplicado apenas no texto solicitado.
- O que deu errado:
  - Nada.
- Validacao executada:
  - pendente nesta etapa.
- Status final: concluido.
- Proximo passo recomendado: validar visualmente no hero se o tom ficou como esperado.

### [2026-04-21 12:42] Agente: OpenCode (copy dores juridicas)

- Escopo recebido: sem mudar estrutura, atualizar somente textos para bater direto nas dores reais do escritorio (processos do dia, prazo/intimacao, status da carteira, audiencia/local, fila de prioridade, cliente sem resposta).
- Arquivos alterados: `app/Landing.tsx`, `AGENTS_CHECKLIST.md`.
- Alteracoes realizadas:
  - Hero com mensagem direta de dor e frase explicita: "Se voce sofre com isso, essa ferramenta e para voce".
  - CTAs e microcopy do topo reescritos para conversao direta.
  - Textos das secoes de produto/prints/contato/faq ajustados para dores reais: visao do dia, prazo/intimacao, audiencia/local, carteira sem status e cliente sem resposta.
  - Lista de dores no hero atualizada com linguagem curta e escaneavel.
  - Delegacao aplicada: `Design ` revisou tom/copy; `Codex` atuou como desenvolvedor no ajuste de texto em `app/Landing.tsx`.
- O que deu certo:
  - Copy ficou mais agressiva e alinhada as dores informadas.
  - Build aprovado apos atualizacao.
- O que deu errado:
  - Nada bloqueante nesta rodada.
- Validacao executada:
  - `npm run build`.
- Status final: concluido.
- Proximo passo recomendado: revisar visualmente no navegador e validar CTR do CTA primario em teste A/B.

### [2026-04-21 12:20] Agente: OpenCode (copy CRO)

- Escopo recebido: tornar a copy da LP mais agressiva para conversao, sem linguagem tecnica, batendo nas dores reais dos escritorios listadas pelo solicitante.
- Arquivos alterados: `app/Landing.tsx`, `AGENTS_CHECKLIST.md`.
- Alteracoes realizadas:
  - Hero reescrito com abordagem mais agressiva de dor (lead esfria, perda de contexto, resposta tardia) mantendo linguagem simples.
  - CTAs e microcopys atualizados para intencao de conversao mais direta.
  - Cards do hero ajustados para promessas praticas de operacao (resposta, prioridade, clareza de andamento).
  - Secoes `produto`, `prints`, `implantacao`, `contato` e `faq` reescritas para refletir dores: visao do dia, risco de prazo/intimacao, audiencia de ultima hora, carteira sem status real e cliente sem resposta.
  - Campo de desafio no formulario atualizado com opcoes aderentes as dores reais do escritorio.
  - Delegacao aplicada com equipe: revisao de copy com agente `Design ` e revisao tecnica/build com agente `Codex`.
- O que deu certo:
  - Copy ficou mais orientada a dor e acao, sem tecnicismo desnecessario.
  - Build aprovado apos alteracoes.
  - Fluxo com equipe funcionou para acelerar revisao de linguagem e validacao tecnica.
- O que deu errado:
  - Parte da copy inicial ficou agressiva demais em alguns trechos; foi refinada com feedback do agente de Design para manter tom humano.
- Validacao executada:
  - `npm run build`.
- Status final: concluido.
- Proximo passo recomendado: validar a nova copy em navegacao real (desktop/mobile) e medir impacto em clique no CTA primario.

### [2026-04-21 11:45] Agente: OpenCode/Codex (coordenacao)

- Escopo recebido: ajustar hero da LP (posicionamento dos mocks desktop/celular, troca de imagens, ajuste de animacao de troca de foco) sem mexer em dimensoes.
- Arquivos alterados: `app/Landing.tsx`.
- Alteracoes realizadas:
  - Reposicionamento fino dos wrappers dos mocks por breakpoint (`ml`/`-ml` e `mt`/`-mt`) para evitar sobreposicao no texto e melhorar composicao visual.
  - Ajuste para usar imagem `dashboard` no mock mobile do hero.
  - Ajuste da animacao do mock mobile quando vai para tras: invisivel no estado estavel, visivel durante troca para manter efeito.
  - Ajuste de timing da transicao do mobile para entrada em foco mais lenta e saida mais rapida.
  - Ajuste de visibilidade do mock desktop em foco com `brightness/contrast` no filtro.
- O que deu certo:
  - Build repetidamente aprovado com `npm run build`.
  - Composicao final dos mocks aprovada pelo solicitante.
  - Hero manteve dimensoes dos mocks conforme exigencia.
- O que deu errado:
  - Tentativa inicial de cache-busting com query string em `next/image` falhou por restricao de `images.localPatterns`.
  - Solucao aplicada: remover query string e manter carregamento local apropriado.
- Validacao executada:
  - `npm run build` (multiplas execucoes, todas finais aprovadas).
- Status final: concluido e aprovado pelo solicitante.
- Proximo passo recomendado: manter este checklist atualizado em toda nova tarefa antes/depois de alterar codigo.
