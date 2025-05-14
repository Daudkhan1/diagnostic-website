import About from "../../Components/About";
import CtaSection1 from "../../Components/CtaSection.jsx/CtaSection1";
import CounterSection2 from "../../Components/FunSection/CounterSection2";
import PageHeading from "../../Components/PageHeading";
import Section from "../../Components/Section";
import TeamSection from "../../Components/TeamSection";

const headingData = {
  title: "About Page",
};

const aboutData = {
  sectionSubtitle: "OUR ABOUT US",
  sectionTitle: "Shaping the Future of Healthcare with AI Innovation",
  aboutText:
    "PRAID AI enhances clinical workflows with AI-driven tools for faster, more accurate diagnostics in cancer, hematology, cytology, histopathology, and medical imaging.",
  service:
    "There are many variations of pass available this medical service the team <a href='#''>READ MORE +</a>",
  experienceYears: "6+",
  experienceTitle: "Experience",
  videoUrl: "https://www.youtube.com/embed/oSZSOUPlo1Q",
  videoText: "How We Work",
  iconboxes: [
    // {
    //   imgUrl: "/assets/img/icons/about_icon_1.png",
    //   title: "Teaching Portal",
    //   subtitle: "AI-driven learning with case studies & training.",
    // },
    // {
    //   imgUrl: "/assets/img/icons/about_icon_2.png",
    //   title: "Digitization",
    //   subtitle: "Seamless digital workflows for smarter diagnostics.",
    // },
  ],

  btnUrl: "/about",
  btnText: "About More",
  sectionImgUrl: "assets/img/about_section_img_1.png",
  headImgUrl: "assets/img/about_img_1.jpg",
};

const counterData = [
  {
    iconSrc: "/assets/img/icons/counter_icon_1.png",
    countTo: 567,
    suffix: "+",
    title: "Pathologist",
  },
  {
    iconSrc: "/assets/img/icons/counter_icon_2.png",
    countTo: 23,
    suffix: "K+",
    title: "Radiologist",
  },
  {
    iconSrc: "/assets/img/icons/counter_icon_3.png",
    countTo: 241,
    suffix: "+",
    title: "Hematologist",
  },
  {
    iconSrc: "/assets/img/icons/counter_icon_4.png",
    countTo: 16,
    suffix: "K+",
    title: "HistoPathologist",
  },
];

// const teamData = {
//   subtitle: "OUR TEAM MEMBER",
//   title: " Meet Our Specialist This <br />Doctor Meeting",
//   sliderData: [
//     {
//       name: "Dr. Humera Waqar",
//       profession: "Neurologist",
//       imageUrl: "/assets/img/team_1.jpg",
//       link: "/doctors/doctor-details",
//       facebook: "/",
//       pinterest: "/",
//       twitter: "/",
//       instagram: "/",
//     },
//     {
//       name: "Waqar Khan",
//       profession: "Founder",
//       imageUrl: "/assets/img/team_3.jpg",
//       link: "/doctors/doctor-details",
//       facebook: "/",
//       pinterest: "/",
//       twitter: "/",
//       instagram: "/",
//     },
//     {
//       name: "Dr. Manal",
//       profession: "Hematology",
//       imageUrl: "/assets/img/team_4.jpg",
//       link: "/doctors/doctor-details",
//       facebook: "/",
//       pinterest: "/",
//       twitter: "/",
//       instagram: "/",
//     },
//     {
//       name: "Dr. Hammad Naveed",
//       profession: "Cheif Consultant",
//       imageUrl: "assets/img/team_5.jpg",
//       link: "/doctors/doctor-details",
//       facebook: "/",
//       pinterest: "/",
//       twitter: "/",
//       instagram: "/",
//     },
//     {
//       name: "Ahmed Nadeem",
//       profession: "Technical Director",
//       imageUrl: "/assets/img/team_6.jpg",
//       link: "/doctors/doctor-details",
//       facebook: "/",
//       pinterest: "/",
//       twitter: "/",
//       instagram: "/",
//     },
//   ],
// };

const ctaData = {
  videoLink: "https://www.youtube.com/embed/rRid6GCJtgc",
  videoButtonText: "WATCH VIDEO",
  subtitle: "OUR VISION IN ACTION",
  title: "AI-Driven Healthcare for a Smarter Tomorrow",
  description:
    "We are revolutionizing healthcare by integrating cutting-edge AI with medical expertise. Our technology enhances diagnostics, optimizes patient care, and empowers medical professionals with real-time insights.",
  buttonLink: "/contact",
  buttonText: "Video More",
  brandImage: "assets/img/medical_brand.png",
};

const AboutPage = () => {
  return (
    <div className="about-page-area">
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>
      {/* Start About Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={"cs_about cs_style_1 position-relative"}
      >
        <About data={aboutData} />
      </Section>
      {/* End About Section */}

      {/* Start Counter Section */}

      <Section
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_counter_area_2"
      >
        <CounterSection2 data={counterData} />
      </Section>

      {/* End Counter Section */}

      {/* Start CTA Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={"cs_cta cs_style_2 cs_blue_bg cs_bg_filed cs_center"}
        backgroundImage="/assets/img/cta_bg_1.jpeg"
      >
        <CtaSection1 data={ctaData} />
      </Section>
      {/* End CTA Section */}

      {/* Start Team Section */}
      {/* <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="0"
      >
        <TeamSection
          hr={true}
          variant={"cs_pagination cs_style_2"}
          data={teamData}
        />
      </Section> */}
      {/* End Team Section */}
    </div>
  );
};

export default AboutPage;
