import { SiBehance } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";

import ContactButton from "@/components/contact-form/contact-button";
import { MailIcon } from "@/components/icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-20 bg-transparent px-6 py-8 sm:px-14 md:px-20">
      <div className="paper-grain relative mx-auto flex w-full max-w-7xl flex-col gap-8 overflow-hidden rounded-2xl bg-accent p-8 text-accent-foreground sm:p-12 md:gap-12 lg:p-20">
        <div className="text-center">
          <span className="inline-block rounded-full bg-accent-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground/80 ring-1 ring-accent-foreground/20 md:text-sm">
            Get in touch
          </span>
        </div>
        <a
          href={`mailto:${siteMetadata.email}`}
          target="_blank"
          className="mb-6 cursor-pointer text-center text-2xl font-bold underline decoration-accent-foreground/40 underline-offset-4 transition-colors duration-200 hover:decoration-accent-foreground sm:text-4xl lg:text-6xl xl:text-7xl"
        >
          <span>{siteMetadata.email}</span>
        </a>
        <div className="flex justify-center">
          <ContactButton />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-8 text-center  md:flex-row md:justify-between lg:mx-auto lg:max-w-7xl">
        <span className="text-foreground">©2025 Omer Abdul Rehman Sabir</span>
        <div className="flex gap-8">
          <a
            href={siteMetadata.behance}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Behance"
          >
            <SiBehance className="h-full w-full text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </a>
          <a
            href={`mailto:${siteMetadata.email}`}
            className="h-6 w-6"
            aria-label="send an email"
          >
            <MailIcon className="h-full w-full text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </a>
          <a
            href={`tel:${siteMetadata.phone.replace(/\s/g, "")}`}
            className="h-6 w-6"
            aria-label="call phone number"
          >
            <FaPhone className="h-full w-full text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </a>
        </div>
      </div>
    </footer>
  );
}
