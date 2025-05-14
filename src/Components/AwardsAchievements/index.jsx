import { Link } from "react-router-dom";
import SectionHeading from "../SectionHeading";

const AwardsAchievements = () => {
  const achievements = [
    { number: "15+", text: "Publications in Top-Tier Venues" },
    { number: "90+", text: "Citations" },
  ];

  return (
    <section className="cs_awards cs_style_1 position-relative py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Image */}
          <div className="col-lg-6 text-center">
            <img
              src="/assets/img/praid-challenge.jpg"
              alt="Awards & Achievements"
              className="img-fluid rounded shadow-sm"
            />
          </div>

          {/* Right Side - Achievements */}
          <div className="col-lg-6 text-center">
          <Link
                    to={
                       "/publications"
                    }
          >
            <SectionHeading
              SectionSubtitle="World Recognized AI"
              SectionTitle="Our Contributions to AI & Research"
            />
            <div className="row justify-content-center cs_gap_y_40 mt-4">
              {achievements.map((item, index) => (
                <div className="col-md-6" key={index}>
                    <div className="cs_award_item p-4 rounded shadow-sm bg-white">
                      <h3 className="cs_award_number text-primary mb-2">
                        {item.number}
                      </h3>
                      <p className="cs_award_text m-0 text-muted">
                        {item.text}
                      </p>
                    </div>
                  
                </div>
              ))}
            </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsAchievements;
