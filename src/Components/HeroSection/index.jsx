import { useEffect, useState } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import Button from "../Buttons";
// import ParticleBackground from "./ParticleBackground";

// --- CSS Changes ---
// Updated transition duration from 1s to 1.5s
const heroStyles = `
  .cs_hero_title {
    transition: opacity 1.5s ease-in-out; /* SLOWED DOWN MORE */
    opacity: 1;
  }

  .cs_hero_title.fading-out {
    opacity: 0;
  }
`;
// --- End CSS Changes ---

const HeroSection = ({ data }) => {
  const heroItem = data?.primarySlider?.[0];
  const titles = heroItem?.titles;

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [displayText, setDisplayText] = useState(titles?.[0] || "");

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = heroStyles;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  useEffect(() => {
    if (!titles || titles.length <= 1) {
      setDisplayText(titles?.[0] || "");
      return;
    }

    // --- JS Timing Changes ---
    const intervalDuration = 5000; // Keep interval at 5s (or increase if desired)
    const fadeDuration = 1500;    // Increased fade duration (1.5s = 1500ms) - MUST MATCH CSS
    // --- End JS Timing Changes ---

    const intervalId = setInterval(() => {
      setIsFading(true); // Start fade out

      setTimeout(() => {
        // 1. Calculate next index and update the text state
        const nextIndex = currentTitleIndex === titles.length - 1 ? 0 : currentTitleIndex + 1;
        setCurrentTitleIndex(nextIndex);
        setDisplayText(titles[nextIndex]); // Update the text content

        // 2. Use tiny delay before triggering fade-in
        setTimeout(() => {
          setIsFading(false); // Remove fading class
        }, 20); // Keep tiny delay

      }, fadeDuration); // Use updated (longer) fadeDuration

    }, intervalDuration); // Use intervalDuration

    return () => clearInterval(intervalId);

  }, [titles, currentTitleIndex]);

  if (!heroItem) {
    return null;
  }

  return (
    <section className="position-relative">
      {/* <ParticleBackground /> */}
      <div
        className="cs_hero cs_style_1 cs_center cs_bg_filed"
        style={{ backgroundImage: `url(${heroItem.bgImageUrl})` }}
      >
        <div className="container">
          <div className="cs_hero_text">
            <div className="cs_hero_text_in">
              <h1
                className={`cs_hero_title text-white ${isFading ? "fading-out" : ""}`}
                dangerouslySetInnerHTML={{
                  __html: displayText,
                }}
              />
              {/* <p
                className="cs_hero_subtitle text-white"
                dangerouslySetInnerHTML={{
                  __html: heroItem.contactSubtitle,
                }}
              /> */}
              <div className="cs_hero_btns">
                <Button
                  btnText={heroItem.btnText1}
                  variant={"cs_btn cs_style_1 cs_color_1"}
                  btnUrl={heroItem.link}
                />
                <Button
                  btnText={heroItem.btnText2}
                  variant={"cs_btn cs_style_1 cs_color_2"}
                  // btnIcons={<FaAnglesRight />}
                  btnUrl={heroItem.link2}
                />
                <Button
                  btnText={heroItem.btnText3}
                  variant={"cs_btn cs_style_1 cs_color_3"}
                  // btnIcons={<FaAnglesRight />}
                  btnUrl={heroItem.link3}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;