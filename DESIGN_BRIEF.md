# AtendeJuri LP - Design/CRO Brief

## Objetivo
Maximizar conversao para WhatsApp (CTA primario) e agendamento de demonstracao (CTA secundario), com linguagem simples, humana e direta.

## Produto (resumo)
AtendeJuri: centraliza mensagens do WhatsApp (trafego pago e direto), a IA faz o primeiro atendimento e classifica contatos. Modulo avancado: respostas sobre andamento/situacao do processo via integracao (DataJudi).

## Publico
Escritorios de advocacia (nao uma area especifica).

## Regras de copy
- Linguagem simples, sem termos tecnicos.
- Sem promessa juridica definitiva.
- Soar humano (nao robotico).

## Regras de design
- Visual premium preto/branco (monocromatico).
- Foco em escaneabilidade: titulos curtos, paragrafo curto, listas curtas.
- CTA primario sempre visivel no topo e repetido ao longo da pagina.
- Evitar secoes "genericas" e texto longo sem funcao de conversao.

## Stack atual (na pasta da LP)
- Next.js App Router
- Motion (animacoes de reveal)
- Lenis (scroll suave e anchors)

Arquivos principais:
- `app/page.tsx` (estrutura/copy)
- `app/globals.css` (tema e UI)
- `app/ScrollEffects.tsx` (Lenis + Motion + parallax)

## O que melhorar (prioridade)
1. Hero: clareza de valor em 5 segundos, CTA forte, prova visual de "produto" (sem parecer mock aleatorio).
2. CTA: reforcar acoes e reduzir friccao (texto do botao, microcopy de apoio, repeticao).
3. Formulario: reduzir campos se necessario, labels mais claros, feedback de confianca (sem inventar provas sociais).
4. Ritmo: espacamento, densidade, hierarquia visual; menos "decoracao", mais sinal.
5. Motion: animacoes com intencao (entrada + parallax suave), sem exagero.

## Nao fazer
- Nao adicionar prova social fake.
- Nao adicionar secao de seguranca/privacidade (por enquanto).
- Nao trocar o foco do produto para um nicho especifico.
- Nao mexer fora da pasta `LP-Juri-Atende/`.

## Aceitacao (check rapido)
- `npm run build` passa.
- Mobile OK (sem overflow, CTA visivel).
- Desktop OK (hero forte, hierarquia clara).
- CTA WhatsApp aparece: header + hero + pelo menos 2 reforcos.

