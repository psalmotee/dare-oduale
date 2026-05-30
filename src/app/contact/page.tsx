import {ContactHero} from "@/components/contact/ContactHero";
import {Quote} from "@/components/contact/QuoteSection";
import { ConnectDirectlyInfo } from "@/components/contact/ConnectDirectlyInfo";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <Quote />
      <ConnectDirectlyInfo />
    </>
  );
}