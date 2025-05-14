const CounterSection = ({ data }) => {
  return (
    <div className="container">
      {/* Heading */}
      {/* <div className="text-center mb-5">
        <h2 className="cs_section_title text-dark">Our Impact in Numbers</h2>
        <p className="cs_section_subtitle text-muted">
          Delivering measurable results every day
        </p>
      </div> */}

      {/* Counter Content */}
      {/* <h2>Access to real-world data from our partners</h2> */}
      <div className="cs_counter_content cs_blue_bg position-relative">
        
        <div className="cs_counter_shape position-absolute">
          <img src="assets/img/counter_shape.png" alt="Shape" />
        </div>

        <div className="cs_counter_1_wrap">
          {data.map((counter, index) => (
            <div className="cs_counter cs_style_1" key={index}>
              <div className="cs_counter_icon cs_center">
                <img src={counter.iconUrl} alt="Icon" />
              </div>
              <div className="cs_counter_nmber">{counter.number}</div>
              <p className="cs_counter_title mb-0">{counter.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
