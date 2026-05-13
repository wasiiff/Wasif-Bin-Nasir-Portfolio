import { Dispatch, SetStateAction } from "react";

import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { MailIcon, XIcon } from "lucide-react";

import ContactForm from "@/components/contact-form/contact-form";

export interface ContactFormModelProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export default function ContactFormModal({
  showModal,
  setShowModal,
}: ContactFormModelProps) {
  return (
    <Transition show={showModal}>
      <Dialog className="z-[999999]" onClose={() => setShowModal(false)}>
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-muted/30 backdrop-blur-md" />
        </TransitionChild>
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-full"
            enterTo="opacity-100 translate-y-0"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-full"
          >
            <DialogPanel className="absolute m-4 w-[95%] max-w-xl overflow-y-auto rounded-2xl border-2 border-accent/20 bg-accent px-6 py-8 shadow-lg shadow-accent/10 md:px-10 md:py-16">
              <div className="flex items-center justify-between">
                <DialogTitle className="flex items-center gap-1 text-2xl font-semibold text-background sm:gap-2 md:text-4xl">
                  <MailIcon className="h-8 w-8 sm:h-10 sm:w-10" />
                  <span>Send Message</span>
                </DialogTitle>
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent bg-background p-2 text-sm text-accent transition-transform hover:scale-[1.05] hover:bg-background"
                  onClick={() => setShowModal(false)}
                >
                  <XIcon className="h-full w-full text-accent" />
                </button>
              </div>
              <ContactForm />
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}
