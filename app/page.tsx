import { Landing } from "./Landing";
import { ScrollEffects } from "./ScrollEffects";

const whatsappLink = process.env.NEXT_PUBLIC_WHATSAPP_LINK ?? "#WHATSAPP_LINK";
const demoLink = process.env.NEXT_PUBLIC_DEMO_LINK ?? "#DEMO_LINK";
const formAction = process.env.NEXT_PUBLIC_FORM_ACTION ?? "#FORM_ACTION";

export default function Page() {
  return (
    <>
      <ScrollEffects />
      <Landing whatsappLink={whatsappLink} demoLink={demoLink} formAction={formAction} />
    </>
  );
}

