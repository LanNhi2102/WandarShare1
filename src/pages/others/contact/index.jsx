
import Contact from "@/components/contact";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Contact || WandarShare',
  description:

    'WandarShare - Timeshare',
}

const ContactPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Contact />
    </>
  );
};

export default ContactPage
