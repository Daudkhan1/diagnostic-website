import { BsTwitter } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaPinterestP,
  FaRegClock,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const data = {
    backgroundImage: "/assets/img/footer_bg.jpg",
    logo: "/assets/img/footer_logo.png",
    contactText: "Open Hours: <br /> Mon - Fri: 8.00 am. - 12.00 am",
    contactText2: "10th floor south side, ise tower islamabad",
    contactText3: "0092 51 2895034",
    facebookHref: "/",
    pinterestHref: "/",
    twitterHref: "/",
    instagramHref: "/",
    widgets: [
      {
        title: "Service",
        links: [
          { href: "/#service", text: "Radiology" },
          { href: "/#service", text: "HistoPathology" },
          { href: "/#service", text: "Gen AI - PRAID VLM (beta)" },
          { href: "/#portfolio", text: "Digitization" },
          { href: "/#portfolio", text: "AI Assistant" },
          { href: "/#portfolio", text: "Teaching Portal" },
        ],
      },
      {
        title: "Quick Link",
        links: [
          { href: "/", text: "Home" },
          //{ href: "/#about", text: "About Us" },
          { href: "/#service", text: "Our Services" },
          { href: "/#portfolio", text: "Our Portfolio" },
          { href: "/#contact", text: "Contact" },
        ],
      },
    ],
    copyrightText: "Copyright © 2025 Praid AI, All Rights Reserved.",
    footerMenu: [
      { href: "/#about", text: "About Us" },
      { href: "/#events", text: "Events" },
      { href: "/#events", text: "News" },
      { href: "/#service", text: "Service" },
    ],
  };

  return (
    <footer
      className="cs_footer cs_blue_bg cs_bg_filed cs_white_color"
      style={{ backgroundImage: `url(${data.backgroundImage})` }}
    >
      <div className="container">
        <div className="cs_footer_row">
          <div className="cs_footer_col">
            <div className="cs_footer_highlight_col cs_accent_bg">
              <div className="cs_footer_logo">
                <img src={data.logo} alt="Logo" />
              </div>
              <ul className="cs_footer_contact cs_mp_0">
                <li>
                  <i
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <FaRegClock />
                  </i>
                  <span
                    dangerouslySetInnerHTML={{ __html: data.contactText }}
                  />
                </li>
                <li>
                  <i
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <FaLocationDot />
                  </i>
                  <span
                    dangerouslySetInnerHTML={{ __html: data.contactText2 }}
                  />
                </li>
                <li>
                  <i
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <FaPhoneAlt />
                  </i>
                  <span
                    dangerouslySetInnerHTML={{ __html: data.contactText3 }}
                  />
                </li>
              </ul>
              <div className="cs_social_btns cs_style_1">
                <Link to={data.facebookHref} className="cs_center">
                  <i>
                    <FaFacebookF />
                  </i>
                </Link>
                <Link to={data.pinterestHref} className="cs_center">
                  <i>
                    <FaPinterestP />
                  </i>
                </Link>
                <Link to={data.twitterHref} className="cs_center">
                  <i>
                    <BsTwitter />
                  </i>
                </Link>
                <Link to={data.instagramHref} className="cs_center">
                  <i>
                    <FaInstagram />
                  </i>
                </Link>
              </div>
            </div>
          </div>

          {/* Service Section */}
          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <h2 className="cs_footer_widget_title">Service</h2>
              <ul className="cs_footer_widget_nav_list cs_mp_0">
                {data.widgets[0].links.map((link, index) => (
                  <li key={index}>
                    <Link to={link.href}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Spacer Column for Gap */}
          <div className="cs_footer_col" style={{ width: "10px" }}></div>

          {/* Quick Link Section */}
          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <h2 className="cs_footer_widget_title">Quick Link</h2>
              <ul className="cs_footer_widget_nav_list cs_mp_0">
                {data.widgets[1].links.map((link, index) => (
                  <li key={index}>
                    <Link to={link.href}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="cs_footer_bottom cs_primary_bg">
        <div className="container">
          <div className="cs_footer_bottom_in">
            <p className="cs_footer_copyright mb-0">{data.copyrightText}</p>
            <ul className="cs_footer_menu cs_mp_0">
              {data.footerMenu.map((item, index) => (
                <li key={index}>
                  <Link to={item.href}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
