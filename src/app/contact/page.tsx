import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { BookingConnectSection } from "@/components/booking/BookingConnectSection";
import { BookingForm } from "@/components/booking/BookingForm";

export const metadata: Metadata = {
  title: "Contact | Dare Oduale",
  description:
    "Book a strategy call or make an enquiry. Start your transformation today.",
};

const INFO_ITEMS = [
  {
    icon: (
      <Clock
        size={14}
        className="mt-0.5 shrink-0 text-secondary"
        aria-hidden="true"
      />
    ),
    label: "OPENING HOURS",
    lines: ["Sunday - Wednesday", "Wednesday - Saturday"],
  },
  {
    icon: (
      <Mail
        size={14}
        className="mt-0.5 shrink-0 text-secondary"
        aria-hidden="true"
      />
    ),
    label: "EMAIL",
    lines: ["dare@dareoduale.com", "inquiry@dareoduale.com"],
  },
  {
    icon: (
      <MapPin
        size={14}
        className="mt-0.5 shrink-0 text-secondary"
        aria-hidden="true"
      />
    ),
    label: "ADDRESS",
    lines: ["London, United Kingdom", "W1S 2JA"],
  },
  {
    icon: (
      <Phone
        size={14}
        className="mt-0.5 shrink-0 text-secondary"
        aria-hidden="true"
      />
    ),
    label: "PHONE NUMBERS",
    lines: ["+44 20 3456 7800", "+44 77 1234 5678"],
  },
];

export default function ContactPage() {
  return (
    <div className="w-full">
      <div className="px-6 pb-8 pt-6 text-center md:pb-10 md:pt-8">
        <h1
          id="booking-heading"
          className="font-heading text-4xl font-bold tracking-[-0.03em] text-primary md:text-5xl"
        >
          Let&apos;s have a Chat
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div
          className="hidden items-stretch justify-center overflow-hidden bg-black lg:flex"
          aria-hidden="true"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/phone-mockup.png"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div
          className="flex justify-center bg-black py-6 lg:hidden"
          aria-hidden="true"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/phone-mockup.png"
            alt=""
            className="w-full max-w-sm object-contain"
          />
        </div>

        <div className="flex flex-col justify-center bg-white px-8 py-12 md:px-14 md:py-16">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-secondary">
            Inquiry
          </p>
          <h2 className="mb-10 font-heading text-2xl font-semibold tracking-[-0.02em] text-primary md:text-3xl">
            Start Your Transformation
          </h2>
          <BookingForm />
        </div>
      </div>

      <div className="bg-primary px-6 py-14 text-center md:px-14 md:py-20">
        <blockquote className="mx-auto max-w-3xl font-heading text-xl font-light italic leading-snug tracking-[-0.02em] text-primary-foreground md:text-2xl">
          &ldquo;If you&apos;re not sure whether this is the right fit - that&apos;s
          exactly what the first call is for.&rdquo;
        </blockquote>
      </div>

      <BookingConnectSection infoItems={INFO_ITEMS} />
    </div>
  );
}