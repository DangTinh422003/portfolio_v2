"use client";
import { ContactForm } from "@/components/ContactForm";
import ContactInfoGroup from "@/components/ContactInfoGroup";
import ContentWrapper from "@/components/ContentWrapper";

const ContactPage = () => {
  return (
    <ContentWrapper>
      <div className="grid grid-cols-3 gap-x-10 gap-y-4 xl:gap-16">
        <div
          className="xl:col-span-1 col-span-3"
          data-aos-delay="400"
          data-aos="fade-up-right"
        >
          <ContactInfoGroup />
        </div>
        <div
          className="xl:col-span-2 col-span-3 pb-24 lg:pb-5 xl:pb-0"
          data-aos-delay="400"
          data-aos="fade-up-left"
        >
          <ContactForm />
        </div>
      </div>
    </ContentWrapper>
  );
};

export default ContactPage;
