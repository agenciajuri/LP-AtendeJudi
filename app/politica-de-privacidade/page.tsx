import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | AtendeJuri",
  description: "Política de Privacidade e Termos de Uso da plataforma AtendeJuri.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-dvh bg-white px-6 py-16 md:py-24 text-zinc-800">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            &larr; Voltar para a página inicial
          </Link>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl mb-8">
          Política de Privacidade
        </h1>

        <div className="prose prose-zinc max-w-none text-zinc-700">
          <p className="mb-6">
            <strong>Última atualização:</strong> {new Date().toLocaleDateString("pt-BR")}
          </p>

          <p className="mb-6">
            A <strong>AtendeJuri</strong> (doravante referida como "nós", "nosso" ou "plataforma") 
            está comprometida em proteger a sua privacidade e os seus dados pessoais. 
            Esta Política de Privacidade descreve como coletamos, usamos, armazenamos, 
            compartilhamos e protegemos as suas informações, em conformidade com a 
            Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) e com as diretrizes 
            das plataformas de integração, incluindo a <strong>Google API Services User Data Policy</strong>.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4">
            1. Escopo e Aceitação
          </h2>
          <p className="mb-6">
            Esta Política de Privacidade aplica-se a todos os usuários ("Usuário" ou "Você") 
            da plataforma AtendeJuri, seja pelo acesso via website, seja pela utilização de 
            nossas integrações e serviços. Ao utilizar nossos serviços, você concorda com 
            a coleta e o processamento de suas informações conforme estabelecido neste documento.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4">
            2. Que dados coletamos
          </h2>
          <p className="mb-4">
            Podemos coletar as seguintes categorias de informações:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Informações de Cadastro:</strong> Nome, e-mail, telefone (WhatsApp), 
              nome do escritório e número de inscrição na OAB.
            </li>
            <li>
              <strong>Dados de Integração (APIs Google):</strong> Caso você opte por integrar 
              a AtendeJuri à sua conta Google (por exemplo, Gmail, Google Agenda, Google Drive, 
              Google Contacts), solicitaremos permissões de acesso (OAuth). A coleta 
              limita-se estritamente aos escopos que você autorizar, como ler e-mails para 
              identificar andamentos processuais, ler/gravar eventos na agenda ou acessar contatos.
            </li>
            <li>
              <strong>Dados de Processos e Clientes:</strong> Informações sobre andamentos 
              processuais (Diários Oficiais), dados de clientes e mensagens trocadas via 
              WhatsApp para fins de registro e automação de atendimento.
            </li>
            <li>
              <strong>Dados de Uso e Navegação:</strong> Endereços IP, tipo de navegador, 
              páginas acessadas e ações realizadas na plataforma (usamos cookies e tecnologias 
              semelhantes).
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4">
            3. Como usamos as suas informações
          </h2>
          <p className="mb-4">
            Utilizamos seus dados estritamente para as seguintes finalidades:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Fornecer, operar, manter e melhorar a plataforma AtendeJuri.</li>
            <li>Realizar a triagem de processos, andamentos e leitura de publicações da OAB.</li>
            <li>Automatizar o envio de mensagens transacionais e de atendimento via WhatsApp.</li>
            <li>Suporte técnico e atendimento ao cliente.</li>
            <li>Fins de cobrança e conformidade fiscal.</li>
          </ul>

          <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4">
            4. Conformidade com as Políticas de Dados do Google (Limited Use)
          </h2>
          <p className="mb-4">
            O uso e a transferência para qualquer outro aplicativo de informações recebidas 
            das APIs do Google por meio da AtendeJuri aderem estritamente à{" "}
            <a 
              href="https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Google API Services User Data Policy
            </a>, 
            incluindo os requisitos de Uso Limitado (Limited Use).
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Uso Restrito:</strong> Os dados obtidos pelas APIs do Google serão 
              utilizados exclusivamente para fornecer as funcionalidades essenciais da AtendeJuri 
              (ex: gestão jurídica e automação).
            </li>
            <li>
              <strong>Não Comercialização de Dados:</strong> Em nenhuma circunstância a 
              AtendeJuri transferirá, venderá ou cederá dados de usuários do Google para terceiros 
              para fins de publicidade, pesquisa de mercado ou rastreamento de e-mail.
            </li>
            <li>
              <strong>Segurança:</strong> Os dados das APIs do Google são tratados com 
              criptografia em repouso e em trânsito. O acesso humano a esses dados só ocorre 
              quando estritamente necessário (ex: suporte técnico solicitado pelo próprio usuário), 
              e mesmo assim de forma revogável e temporária.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4">
            5. Compartilhamento de Informações
          </h2>
          <p className="mb-6">
            Seus dados pessoais não serão vendidos ou alugados. O compartilhamento ocorre apenas:
            (a) com provedores de infraestrutura em nuvem estritamente necessários para a operação 
            do sistema (AWS, Vercel, bancos de dados em nuvem); (b) fornecedores de API para 
            processamento de IA e disparo de WhatsApp, firmados sob rigorosos acordos de 
            confidencialidade; (c) quando exigido por lei ou ordem judicial.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4">
            6. Armazenamento e Segurança
          </h2>
          <p className="mb-6">
            Implementamos medidas técnicas e organizacionais de segurança, incluindo 
            criptografia padrão da indústria e controle de acesso, para proteger as 
            informações contra acessos não autorizados, perdas, destruição ou alteração. 
            Armazenamos os dados apenas pelo tempo necessário para fornecer nossos 
            serviços ou cumprir obrigações legais.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4">
            7. Os Seus Direitos
          </h2>
          <p className="mb-4">
            Você tem o direito de:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Acessar as informações que mantemos sobre você.</li>
            <li>Solicitar a correção de dados incompletos ou inexatos.</li>
            <li>
              <strong>Revogar permissões:</strong> Você pode revogar o acesso à sua conta 
              Google a qualquer momento diretamente na página de configurações de 
              segurança da sua conta Google.
            </li>
            <li>
              <strong>Exclusão de Dados:</strong> Solicitar a deleção de todos os seus 
              dados e os dados dos seus clientes de nossa base (direito ao esquecimento).
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4">
            8. Contato e Exclusão de Dados
          </h2>
          <p className="mb-6">
            Se você tiver dúvidas, quiser revogar algum consentimento ou solicitar a exclusão total 
            da sua conta e dados do nosso sistema, entre em contato através do e-mail:{" "}
            <a href="mailto:contato@agenciajuri.com.br" className="font-medium text-blue-600 hover:underline">
              contato@agenciajuri.com.br
            </a>
            . O prazo de resposta é de até 15 dias.
          </p>

          <h2 className="text-xl font-semibold text-zinc-900 mt-10 mb-4">
            9. Alterações nesta Política
          </h2>
          <p className="mb-6">
            Podemos atualizar esta Política periodicamente. Notificaremos os usuários sobre 
            quaisquer mudanças significativas via e-mail ou aviso na própria plataforma. 
            A continuação do uso dos serviços após essas alterações implica na aceitação 
            da nova versão da Política.
          </p>

        </div>
      </div>
    </div>
  );
}
