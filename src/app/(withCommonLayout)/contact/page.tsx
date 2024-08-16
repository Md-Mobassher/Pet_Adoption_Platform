import Title from "@/components/ui/Title";
import ContactInfo from "./components/ContactInfo";
import SubTitle from "@/components/ui/SubTitle";

const ContactPage = () => {
  return (
    <div className="mt-5 mb-10">
      <Title title="Contact Information" />
      <SubTitle
        title="We would love to hear from you! Reach out to us through any of the
          following channels"
      />

      <ContactInfo />
    </div>
  );
};

export default ContactPage;
