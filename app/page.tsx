import { Landing } from "./Landing";
import { ScrollEffects } from "./ScrollEffects";

const whatsappLink = process.env.NEXT_PUBLIC_WHATSAPP_LINK ?? "https://wa.me/5562996903303?text=Olá, tenho interesse em saber mais sobre a ferramenta!,";
const demoLink = process.env.NEXT_PUBLIC_DEMO_LINK ?? "#demonstracao";
const formAction = process.env.NEXT_PUBLIC_FORM_ACTION ?? "#FORM_ACTION";
const redirectLink = process.env.NEXT_PUBLIC_REDIRECT_LINK ?? "https://teste.agenciajuri.com.br/signup";

export default function Page() {
  return (
    <>
      <ScrollEffects />
      <Landing whatsappLink={whatsappLink} demoLink={demoLink} formAction={formAction} redirectLink={redirectLink} />
    </>
  );
}

