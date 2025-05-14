import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { FaAnglesRight, FaLocationDot } from "react-icons/fa6";
// No longer need HiMiniMagnifyingGlass if search isn't used here
// import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { Link } from "react-router-dom"; // Keep Link for the logo

const Header = ({ isTopBar, variant }) => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const [openMobileSubmenuIndex, setOpenMobileSubmenuIndex] = useState([]);
  // const [isSearchActive, setIsSearchActive] = useState(false); // Keep if search is implemented elsewhere
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isSticky, setIsSticky] = useState();

  // --- Updated Menu Object ---
  const menu = {
    email: "info@praid-ai.com",
    location: "10th floor south side, ISE Tower, ISB",
    logoUrl: "/assets/img/logo.png",
    logoLink: "/", // Keep as '/' if logo should go to top/reload, or change to "#top" or "#home" for scrolling
    navItems: [
      {
        label: "Home",
        href: "/", // Changed from "/"
      },
      { label: "About", href: "/#about" }, // Changed from "/about"
      {
        label: "Service",
        href: "/#service", // Changed from "/service"
        // subItems remain commented out, if needed they would likely link to different pages or specific sub-sections
      },
      // Pages menu remains commented out
      { label: "Publications", href: "/publications" }, // Changed from "/contact"
    ],
    btnUrl: "/#contact", // Changed from "/contact" - assuming button goes to contact section
    btnText: "Request Demo",
  };
  // --- End of Updated Menu Object ---

  const handleOpenMobileSubmenu = (index) => {
    if (openMobileSubmenuIndex.includes(index)) {
      setOpenMobileSubmenuIndex((prev) => prev.filter((f) => f !== index));
    } else {
      setOpenMobileSubmenuIndex((prev) => [...prev, index]);
    }
  };

  // Function to handle menu clicks (close mobile menu)
  const handleMenuClick = () => {
    if (isShowMobileMenu) {
      setIsShowMobileMenu(false);
    }
    // Reset open submenus if desired when any main link is clicked
    // setOpenMobileSubmenuIndex([]);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      // Add a threshold (e.g., 50) to prevent sticky activating on minor scrolls
      const threshold = 50;
      if (currentScrollPos > threshold && currentScrollPos > prevScrollPos) {
        setIsSticky("cs_gescout_sticky"); // Scrolling down below threshold
      } else if (currentScrollPos > threshold && currentScrollPos < prevScrollPos) {
        setIsSticky("cs_gescout_sticky cs_gescout_show"); // Scrolling up below threshold
      } else if (currentScrollPos <= threshold) {
         setIsSticky(""); // At the top or near top
      } else {
         // Fallback if needed, though above conditions should cover most cases
         setIsSticky("cs_gescout_sticky");
      }

      setPrevScrollPos(currentScrollPos <= 0 ? 0 : currentScrollPos); // Update previous scroll position, handle negative values
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]); // Dependency remains prevScrollPos

  return (
    <>
      <header
        className={`cs_site_header cs_style_1 ${
          variant ? variant : ""
        } cs_primary_color cs_sticky_header ${isSticky ? isSticky : ""}`}
      >
        {isTopBar && (
          <div className="cs_top_header cs_blue_bg cs_white_color">
            <div className="container">
              <div className="cs_top_header_in">
                <div className="cs_top_header_left">
                  <ul className="cs_header_contact_list cs_mp_0">
                    <li>
                      <i>
                        <FaEnvelope />
                      </i>
                      {/* Use <a> for mailto links */}
                      <a href={`mailto:${menu.email}`}>{menu.email}</a>
                    </li>
                    <li>
                      <i>
                        <FaLocationDot />
                      </i>
                      {menu.location}
                    </li>
                  </ul>
                </div>
                <div className="cs_top_header_right">
                  <div className="cs_social_btns cs_style_1">
                    {/* Use <a> for external/social links, update hrefs as needed */}
                    <a href="/" target="_blank" rel="noopener noreferrer" className="cs_center">
                      <i><FaFacebookF /></i>
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer" className="cs_center">
                      <i><FaPinterestP /></i>
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer" className="cs_center">
                      <i><FaTwitter /></i>
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer" className="cs_center">
                      <i><FaInstagram /></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                {/* Keep Link for logo if it goes to the base URL, or change to <a> if it scrolls */}
                <Link className="cs_site_branding" to={menu.logoLink}>
                  <img src={menu.logoUrl} alt="Logo" />
                </Link>
                {/* Or use <a> if logo should scroll to top/home section:
                <a className="cs_site_branding" href="#home" onClick={handleMenuClick}>
                  <img src={menu.logoUrl} alt="Logo" />
                </a>
                */}
              </div>
              <div className="cs_main_header_right ">
                <div className="cs_nav cs_primary_color ">
                  <ul
                    className={`cs_nav_list ${isShowMobileMenu && "cs_active"}`}
                  >
                    {menu.navItems.map((item, index) => (
                      <li
                        className={
                          item.subItems ? "menu-item-has-children" : ""
                        }
                        key={index}
                      >
                        {/* --- Use <a> tag instead of Link --- */}
                        <a
                          href={item.href}
                          onClick={handleMenuClick} // Use the combined handler
                        >
                          {item.label}
                        </a>
                        {/* --- End of <a> tag change --- */}

                        {item.subItems && (
                          <ul
                            style={{
                              display: openMobileSubmenuIndex.includes(index)
                                ? "block"
                                : "none",
                            }}
                          >
                            {item.subItems.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                {/* --- Subitems likely still need Link if they go to different pages --- */}
                                {/* If subitems also scroll on the same page, change them to <a> too */}
                                <Link
                                  to={subItem.href}
                                  onClick={handleMenuClick} // Close mobile menu on subitem click too
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                        {item.subItems?.length && (
                          <span
                            className={`cs_menu_dropdown_toggle ${
                              openMobileSubmenuIndex.includes(index)
                                ? "active"
                                : ""
                            }`}
                            onClick={() => handleOpenMobileSubmenu(index)}
                          >
                            <span></span>
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                  <span
                    className={`cs_menu_toggle ${
                      isShowMobileMenu && "cs_toggle_active"
                    }`}
                    onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
                  >
                    <span></span>
                  </span>
                </div>
                {/* --- Use <a> tag for the button as well --- */}
                <a href={menu.btnUrl} className="cs_btn cs_style_1 cs_color_1" onClick={handleMenuClick}>
                  <span>{menu.btnText}</span>
                  <i>
                    <FaAnglesRight />
                  </i>
                </a>
                 {/* --- End of <a> tag change for button --- */}
              </div>
            </div>
          </div>
        </div>
        {variant === "cs_type_1" && (
          <div className="cs_main_header_shape">
            {/* SVG remains the same */}
             <svg width={1679} height={112} viewBox="0 0 1679 112" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M0 0L1679 0.014C1679 0.014 1639 23.128 1639 48.261V111.014H40V47.351C40 22.567 0 0 0 0Z" fill="#2EA6F7"/>
               <path d="M10 0L1669 0.014C1669 0.014 1629 23.128 1629 48.261V111.014H50V47.351C50 22.567 10 0 10 0Z" fill="white"/>
             </svg>
          </div>
        )}
      </header>
      {/* This spacing div might need adjustment based on whether the top bar is present and the final header height */}
      {isTopBar && <div className="cs_site_header_spacing_150" />}
      {/* If no top bar, you might need a different spacing or none depending on layout */}
      {/* {!isTopBar && <div className="cs_site_header_spacing_XXX" />}  */}
    </>
  );
};

export default Header;