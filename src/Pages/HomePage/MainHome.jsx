import HeroSection from "../../Components/HeroSection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "../../Components/About/index.jsx";
import CounterSection from "../../Components/FunSection/CounterSection.jsx";
import BrandsSlider from "../../Components/BrandsSection/index.jsx";
import ProjectSection from "../../Components/ProjectSection/index.jsx";
import CtaSection1 from "../../Components/CtaSection.jsx/CtaSection1.jsx";
import MedicalTabSection from "../../Components/MedicalTabSection/index.jsx";
import BlogSection from "../../Components/BlogsSection/index.jsx";
import Section from "../../Components/Section/index.jsx";
import ContactSection2 from "../../Components/ContactSection/ContactSection2.jsx";
import AwardsAchievements from "../../Components/AwardsAchievements/index.jsx";

const heroData = {
  primarySlider: [
    {
      bgImageUrl: "assets/img/hero_slider_1.jpg",
      titles: [
        "Transforming Diagnostics with AI-Powered Precision",
        "Empowering Healthcare with Smart AI Tools",
        "Next-Gen Medical AI Solutions",
      ],
      contactSubtitle:
        "Empowering Pathologists & Radiologists with a Complete Ecosystem - powered by our state-of-the-art AI models",
      btnText1: "Microscope Portal",
      link: "https://microscopepraid-ai.com/",
      btnText2: "VLM Portal",
      link2: "https://vlmpraid-ai.com/",
      btnText3:"Annotation Portal",
      link3:"https://annotationspraid-ai.com",

    },
  ],
};

const aboutData = {
  sectionSubtitle: "What We Do",
  sectionTitle: "Shaping the Future of Healthcare with AI Innovation",
  aboutText:
    "At PRAID, we provide customizable AI-driven diagnostic tools tailored to the needs of medical professionals. Our platform seamlessly integrates into clinical workflows, speeding up diagnosis and reducing the chances of errors. With a focus on diseases like cancer, as well as medical imaging techniques such as X-rays, MRIs, CT scans, Ultrasound, and PET Scans, along with fields like Hematology, Cytology, and Histopathology. PRAID acts as a comprehensive diagnostic assistant, delivering end-to-end support for healthcare providers.",
  videoUrl: "https://www.youtube.com/embed/oSZSOUPlo1Q",
  videoText: "What We Do",
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
  // sectionImgUrl: "assets/img/about_section_img_1.png",
  headImgUrl: "assets/img/about_img_1.jpg",
};

const countersData = [
  {
    iconUrl: "/assets/img/icons/counter_icon_2.png",
    number: "5000+",
    title: "X-rays Analyzed",
  },
  {
    iconUrl: "/assets/img/icons/counter_icon_1.png",
    number: "21000+",
    title: "Pathology Cases Per Year Accessed",
  },
  {
    iconUrl: "/assets/img/icons/counter_icon_3.png",
    number: "45",
    title: "New Histopathology Cases Every Day",
  },
  {
    iconUrl: "/assets/img/icons/counter_icon_4.png",
    number: "15",
    title: "New Cytology Cases Every Day",
  },
];

const serviceData = {
  subtitle: "OUR BEST SERVICE",
  title: "High-Quality Services This Doctor",
  description:
    "We are privileged to work with hundreds of future-thinking medial,<br> including many of the world’s top hardware, software, and<br> brands, feel safe and comfortable in establishing.",
  services: [
    {
      backgroundImage: "/assets/img/service_bg.jpg",
      iconUrl: "/assets/img/icons/service_icon_1.png",
      index: "01",
      title: "Pharmacology",
      subtitle: "Medical competitor research startup to financial",
      link: "/#service",
    },
    {
      backgroundImage: "/assets/img/service_bg.jpg",
      iconUrl: "/assets/img/icons/service_icon_2.png",
      index: "02",
      title: "Orthopedic",
      subtitle: "Medical competitor research startup to financial",
      link: "/#service",
    },
    // {
    //   backgroundImage: "/assets/img/service_bg.jpg",
    //   iconUrl: "/assets/img/icons/service_icon_3.png",
    //   index: "03",
    //   title: "Hematology",
    //   subtitle: "Medical competitor research startup to financial",
    //   link: "/service/service-details",
    // },
    {
      backgroundImage: "/assets/img/service_bg.jpg",
      iconUrl: "/assets/img/icons/service_icon_4.png",
      index: "04",
      title: "Plastic Surgery",
      subtitle: "Medical competitor research startup to financial",
      link: "/#service",
    },
    {
      backgroundImage: "/assets/img/service_bg.jpg",
      iconUrl: "/assets/img/icons/service_icon_5.png",
      index: "05",
      title: "Neurology",
      subtitle: "Medical competitor research startup to financial",
      link: "/#service",
    },
    {
      backgroundImage: "/assets/img/service_bg.jpg",
      iconUrl: "/assets/img/icons/service_icon_6.png",
      index: "06",
      title: "Ophthalmology",
      subtitle: "Medical competitor research startup to financial",
      link: "/#service",
    },
    {
      backgroundImage: "/assets/img/service_bg.jpg",
      iconUrl: "/assets/img/icons/service_icon_7.png",
      index: "07",
      title: "Dental Care",
      subtitle: "Medical competitor research startup to financial",
      link: "/#service",
    },
    {
      backgroundImage: "/assets/img/service_bg.jpg",
      iconUrl: "/assets/img/icons/service_icon_8.png",
      index: "08",
      title: "Cardiology",
      subtitle: "Medical competitor research startup to financial",
      link: "/#service",
    },
  ],
  footerIcon: "/assets/img/icons/service_footer_icon_1.png",
  footerText:
    "Delivering tomorrow’s health care for your family.<br>medical this View",
  footerLink: "/",
  footerLinkText: "SEE MORE",
};
const brandData = [
  { image: "/assets/img/brand4.png", altText: "Brand 1" },
  { image: "/assets/img/brand5.png", altText: "Brand 2" },
  { image: "/assets/img/brand3.png", altText: "Brand 3" },
  { image: "/assets/img/brand4.png", altText: "Brand 4" },
  { image: "/assets/img/brand5.png", altText: "Brand 5" },
];

const sectionData = {
  subtitle: "WHY CHOOSE Praid AI",
  title: "AI-Powered Healthcare for a Smarter Future",
  services: [
    {
      iconUrl: "/assets/img/icons/service_icon_9.png",
      title: "Advanced Diagnostics",
      subtitle:
        "Revolutionizing medical diagnostics with AI-powered precision and real-time analysis.",
    },
    {
      iconUrl: "/assets/img/icons/service_icon_10.png",
      title: "Smart Emergency Response",
      subtitle:
        "AI-driven predictive analytics to assist in emergency situations with rapid decision-making.",
    },
    {
      iconUrl: "/assets/img/icons/service_icon_11.png",
      title: "AI-Trained Healthcare Experts",
      subtitle:
        "Empowering doctors with AI insights for faster, more accurate treatments.",
    },
    {
      iconUrl: "/assets/img/icons/service_icon_12.png",
      title: "Personalized Medical Insights",
      subtitle:
        "Utilizing AI to provide customized healthcare recommendations and early disease detection.",
    },
    {
      iconUrl: "/assets/img/icons/service_icon_13.png",
      title: "Cutting-Edge Medical Research",
      subtitle:
        "Enhancing research with AI-driven data analysis, enabling breakthroughs in medicine.",
    },
    {
      iconUrl: "/assets/img/icons/service_icon_14.png",
      title: "Cost-Effective Solutions",
      subtitle:
        "Reducing healthcare costs through automation and intelligent medical predictions.",
    },
  ],
};

const projectData = {
  title: "Our AI PORTFOLIO",
  subtitle: "AI GENERATED ANALYSIS",
  description:
    "We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, software, and brands, feel safe and comfortable in establishing.",
  tabs: [
    // { id: "pathology", label: "Pathology" },
    { id: "radiology", label: "Radiology" },
    { id: "histopathology", label: "HistoPathology" },
    { id: "vlm", label: "Gen AI - PRAID VLM (beta)" },
    
  ],
  tabData: [
    {
      id: "radiology",
      items: [
        {
          imgUrl: "/assets/img/radio1.jpg",
          hoverImgUrl: "/assets/img/radio1_hover.jpg",
          // title: "Medical Of Working",
          // subtitle:
          //   "We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.",
          index: 1,
        },
        {
          imgUrl: "/assets/img/radio2.jpg",
          hoverImgUrl: "/assets/img/radio2_hover.jpg",
          // title: "Laboratory Technologist",
          // subtitle:
          //   "We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.",
          index: 3,
        },
        {
          imgUrl: "/assets/img/radio3.jpg",
          hoverImgUrl: "/assets/img/radio3_hover.jpg",
          // title: "Medical Of Dental",
          // subtitle:
          //   "We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.",
          index: 2,
        },
      ],
    },
    {
      id: "histopathology",
      items: [
        {
          imgUrl: "/assets/img/94_annots.png",
          hoverImgUrl: "/assets/img/94_mitotic.png",
          title: "Medical Of Working",
          subtitle:
            "We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.",
          index: 1,
        },
        {
          imgUrl: "/assets/img/034_annots.png",
          hoverImgUrl: "/assets/img/034_mitotic.png",
          title: "Medical Of Working",
          subtitle:
            "We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.",
          index: 1,
        },
        {
          imgUrl: "/assets/img/134_annots.png",
          hoverImgUrl: "/assets/img/134_mitotic.png",
          title: "Medical Of Working",
          subtitle:
            "We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.",
          index: 1,
        },
      ],
    },
    {
      id: "vlm",
      items: [
        {
          imgUrl: "/assets/img/vlm01.jpg",
          hoverImgUrl: "/assets/img/vlm01.jpg",
          title: "Medical Of Working",
          subtitle:
            "We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.",
          index: 1,
        },
        {
          imgUrl: "/assets/img/vlm02.jpg",
          hoverImgUrl: "/assets/img/vlm03.jpg",
          title: "Medical Of Working",
          subtitle:
            "We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.",
          index: 1,
        },
        {
          imgUrl: "/assets/img/vlm03.jpg",
          hoverImgUrl: "/assets/img/vlm04.jpg",
          title: "Medical Of Working",
          subtitle:
            "We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.",
          index: 1,
        },
      ],
    },
    
  ],
};

const ctaData1 = {
  videoLink: "https://www.youtube.com/embed/ZSuFenv8ORE",
  videoButtonText: "WATCH VIDEO",
  subtitle: "OUR VISION IN ACTION",
  title: "AI-Driven Healthcare for a Smarter Tomorrow",
  description:
    "We are revolutionizing healthcare by integrating cutting-edge AI with medical expertise. Our technology enhances diagnostics, optimizes patient care, and empowers medical professionals with real-time insights.",
  buttonLink: "/#contact",
  buttonText: "Video More",
  brandImage: "assets/img/medical_brand.png",
};

const medicalTabsData = {
  subtitle: "Redefining Healthcare with Innovation",
  title: "PRAID Offerings",
  tabsTitle: [
    {
      href: "brain_althim",
      iconUrl: "assets/img/icons/tab_link_icon_1.png",
      label: "Digitization",
    },
    {
      href: "emergency",
      iconUrl: "assets/img/icons/tab_link_icon_2.png",
      label: "AI Assistant",
    },
    {
      href: "heart_beat",
      iconUrl: "assets/img/icons/tab_link_icon_3.png",
      label: "Teaching Portal",
    },
  ],
  tabsData: [
    {
      id: "brain_althim",
      imageSrc: "assets/img/post_6.jpeg",
      // title: "Digitization",
      subtitle:
        "To enhance pathology digitization, PRAID AI will provide and integrate high-resolution digital pathology scanning equipment such as microscope and scanner. These scanners will allow for:",
      points: [
        {
          icon: "assets/img/icons/check_icon_1.png",
          text: "Seamless digitization of pathology slides, enabling remote AI analysis and archiving.",
        },
        {
          icon: "assets/img/icons/check_icon_1.png",
          text: "Efficient storage and retrieval, reducing physical handling and associated risks.",
        },
        {
          icon: "assets/img/icons/check_icon_1.png",
          text: "Integration with PRAID AI platform, ensuring high-precision AI-assisted diagnostics.",
        },
        {
          icon: "assets/img/icons/check_icon_1.png",
          text: "Expanded modality support, initially focusing on Histopathology Slides and later extending to Hematology, Cytopathology, and other subspecialties.",
        },
      ],
    },
    {
      id: "emergency",
      imageSrc: "assets/img/post_5.jpeg",
      // title: "Treatment patients in primary care",
      subtitle:
        "PRAID AI seamlessly integrates cutting-edge AI for pathology and radiology diagnostics with existing hospital portals.",
      points: [
        {
          icon: "assets/img/icons/check_icon_1.png",
          text: "Multi-Modality AI Diagnostics: Advanced deep learning models analyze radiology scans such as CT, PET, Ultrasounds, X-rays, MRI, & Pathology slides for histopathology, hematology and cytology slides with high accuracy.",
        },
        {
          icon: "assets/img/icons/check_icon_1.png",
          text: "Predictive Analytics & Case Tracking: AI-driven monitoring, predictive insights, and personalized recommendations enhance patient care.",
        },
        {
          icon: "assets/img/icons/check_icon_1.png",
          text: "Automated Report Generation: LLMs summarize findings into interactive, customizable reports tailored to hospital needs.",
        },
        {
          icon: "assets/img/icons/check_icon_1.png",
          text: "Minimally Invasive & Seamless Integration: Easy PACS/EMR integration via API, with free deployment for five years post-development.",
        },
      ],
      linkHref: "/#contact",
      buttonText: "Read More",
    },
    {
      id: "heart_beat",
      imageSrc: "assets/img/post_1.jpeg",
      // title: "Accreditation within a given specialty",
      subtitle:
        "PRAID AI offers an AI-powered Teaching & Training Portal for junior hospital staff and medical students.",
      points: [
        {
          icon: "assets/img/icons/check_icon_1.png",
          text: "Includes a searchable Case Repository of diagnostic cases for knowledge sharing.",
        },
        {
          icon: "assets/img/icons/check_icon_1.png",
          text: "Provides an Information Retrieval System for quick access to relevant case studies.",
        },
        {
          icon: "assets/img/icons/check_icon_1.png",
          text: "Offers Radiology & Pathology Courses with real-world, AI-assisted case studies.",
        },
        {
          icon: "assets/img/icons/check_icon_1.png",
          text: "Integrates Vision-Language Models (VLMs) to provide AI-driven explanations for predictions, improving learning.",
        },
        {
          icon: "assets/img/icons/check_icon_1.png",
          text: "Hosts Live Classes & Webinars with experienced pathologists and radiologists.",
        },
        {
          icon: "assets/img/icons/check_icon_1.png",
          text: "Features an interactive AI chat interface for junior staff to ask case-specific questions and enhance their learning experience.",
        },
      ],
      linkHref: "/#contact",
      buttonText: "Read More",
    },
    {
      id: "blood_test",
      imageSrc: "assets/img/post_3.jpeg",
      // title: "Better Health While Aging health",
      subtitle:
        "Maanz AI’s PRAID AI platform at Indus Hospital empowers certified doctors with AI-driven diagnostics, predictive analytics, and seamless workflow integration.",
      points: [
        {
          icon: "assets/img/icons/check_icon_1.png",
          text: "AI Diagnostics: Advanced analysis across CT, PET, Ultrasound, X-ray, MRI, and Histopathology slides with high accuracy.",
        },
        {
          icon: "assets/img/icons/check_icon_1.png",
          text: "Predictive Analytics: AI-driven patient monitoring and personalized treatment recommendations.",
        },
        {
          icon: "assets/img/icons/check_icon_1.png",
          text: "Automated Reports: LLM-powered summaries for quick, interactive diagnostic insights.",
        },
        {
          icon: "assets/img/icons/check_icon_1.png",
          text: "Seamless Integration: Plug-and-play API with PACS & EMR systems for smooth adaptation.",
        },
        {
          icon: "assets/img/icons/check_icon_1.png",
          text: "AI Training Portal: Case repository, live classes, and AI-assisted courses for continuous learning.",
        },
      ],
      linkHref: "/#contact",
      buttonText: "Read More",
    },
    // Add other tab data here
  ],
};

const blogsData = {
  sectionTitle: "Events",
  sectionSubtitle: "Latest Engagements",
  postsData: [
    {
      title: "ADGHW 2025",
      subtitle:
        "Join us for a live demo of Praid AI, our groundbreaking solution transforming healthcare.",
      // date: "May 02",
      // category: "Medical",
      author: "Admin",
      thumbnail: "/assets/img/gitex.jpg",
      // btnText: "Read More",
      // postLink: "/blog/blog-details",
      authorIcon: "/assets/img/icons/post_user_icon.png",
      commentIcon: "/assets/img/icons/post_comment_icon.png",
    },
    {
      title: "Leap 2025",
      subtitle:
        "Curious about how PRAID AI can revolutionize your hospital? Join us at Leap 2025 for a live demo.",
      date: "May 02",
      category: "Medical",
      author: "Admin",
      thumbnail: "assets/img/leap.jpg",
      btnText: "Read More",
      // postLink: "/blog/blog-details",
      authorIcon: "/assets/img/icons/post_user_icon.png",
      commentIcon: "/assets/img/icons/post_comment_icon.png",
    },
    {
      title: "Gitex Dubai 2024",
      subtitle:
        "visit us at gitex function to see how PRAID AI is transforming healthcare and meet our team.",
      date: "May 02",
      category: "Medical",
      author: "Admin",
      thumbnail: "assets/img/gitex24.jpg",
      btnText: "Read More",
      // postLink: "/blog/blog-details",
      authorIcon: "/assets/img/icons/post_user_icon.png",
      commentIcon: "/assets/img/icons/post_comment_icon.png",
    },
  ],
};

const MainHome = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);
  return (
    <>
      {/* End Header Section */}
      {/* Start Hero Section */}
      <HeroSection data={heroData} />
      {/* End Hero Section */}
      {/* Start CTA Section */}
      <Section
        className={
          "cs_cta cs_style_1 cs_blue_bg position-relative overflow-hidden"
        }
      >
        {/* <CtaSection data={ctaData} /> */}
      </Section>

      {/* End CTA Section */}
      {/* Start Medical Tab Section */}
      <Section topSpaceLg="70" topSpaceMd="110" id="portfolio">
        <MedicalTabSection data={medicalTabsData} />
      </Section>

      {/* End Medical Tab Section */}
      {/* Start About Section */}
      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_about cs_style_1 position-relative"
        id="about"
      >
        <About data={aboutData} />
      </Section>

      {/* End About Section */}
      <div className="text-center mb-5">
        <h2 className="cs_section_title cs_style_1 text-center">Access to real-world data from our partners</h2>
        {/* <p className="cs_section_subtitle text-muted">
          Delivering measurable results every day
        </p> */}
      </div>
      {/* Start Counter */}
      <Section className="cs_counter_area">
      
        <CounterSection data={countersData} />
      </Section>

      {/* End Counter */}
      {/* Start Brand Section */}
      <Section topSpaceLg="70" topSpaceMd="90" className="cs_brands_section">
        <h2 className="cs_section_title cs_style_1 text-center">
          Our Partners
        </h2>
        <BrandsSlider data={brandData} />
      </Section>

      {/* End Brand Section */}
      {/* Start Projects Section */}
      <Section topSpaceLg="70" topSpaceMd="110" className="cs_tabs" id="service">
        <ProjectSection data={projectData} />
      </Section>

      {/* End Projects Section */}
      {/* Start Service Section */}

      {/* <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={"cs_gray_bg"}
      >
        <Service cardBg={"cs_gray_bg"} data={serviceData} />
      </Section> */}

      {/* End Service Section */}
      {/* Start Team Section */}
      {/* 
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        className={"cs_team_section position-relative"}
      ></Section> */}
      {/* End Team Section */}
      {/* Start Why Choose Us Section */}

      {/* <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_gray_bg cs_bg_filed"
        backgroundImage="/assets/img/service_bg_2.jpg"
      >
        <ChooseUs data={sectionData} />
      </Section> */}

      {/* End Why Choose Us Section */}

      {/* Start Award Section */}

      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_awards cs_style_1 position-relative"
      >
        <AwardsAchievements />
      </Section>
      {/* End Award Section */}
      {/* Start Blog Section */}

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        id="events"
      >
        <BlogSection data={blogsData} />
      </Section>

      {/* Start Contact Solution */}

<Section
      id="contact"
      >
      <ContactSection2></ContactSection2>
</Section>
      {/* End Contact Solution */}
      {/* Start CTA Section */}

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_cta cs_style_2 cs_blue_bg cs_bg_filed cs_center"
        backgroundImage="/assets/img/cta_bg_1.jpeg"
      >
        <CtaSection1 data={ctaData1} />
      </Section>

      {/* End CTA Section */}
    </>
  );
};

export default MainHome;
