import PageHeading from "../../Components/PageHeading";
import ContactSection from "../../Components/ContactSection";
import Section from "../../Components/Section";
import LocationMap from "../../Components/LocationMap/Index";

const headingData = {
  backgroundImage: "/assets/img/page_heading_bg.jpg",
  title: "Contact Us",
};

const contactData = {
  sectionSubtitle: "CONTACT US",
  SectionTitle: "Meet Our Specialist This <br />Doctor Meet",
  teethShapeImg: "assets/img/icons/hero_shape_3.png",
  contactImg: "assets/img/contact_2.png",
  iconBox: {
    style: "cs_style_4",
    icon: "assets/img/icons/call_icon_1.png",
    title: "Emergency Call",
    subtitle: "24/7 – Support and easy",
  },
};

const mapData = {
  mapSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.427004059732!2d73.05522507619409!3d33.71190443562369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfbb539ddeaf%3A0x858d300eddf99ba5!2sIslamabad%20Stock%20Exchange%20Tower%2C%20Block%20J%20F%207%2F1%20Blue%20Area%2C%20Islamabad%2C%20Pakistan!5e1!3m2!1sen!2s!4v1739778861416!5m2!1sen!2s",
};
const ContactPage = () => {
  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <ContactSection reverseOrder={true} data={contactData} />
      </Section>

      <Section bottomSpaceLg="0" bottomSpaceMd="0">
        <LocationMap mapSrc={mapData.mapSrc} />
      </Section>
    </>
  );
};

export default ContactPage;
