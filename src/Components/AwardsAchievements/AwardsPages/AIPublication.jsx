import SectionHeading from "../../SectionHeading";

const AIPublication = () => {
  const aiPublications = [
    {
      conference: "NeurIPS",
      title: "AI-Driven Diagnostic Assistance for Healthcare",
      year: "2023",
    },
    {
      conference: "ICML",
      title: "Deep Learning Techniques in Medical Imaging",
      year: "2022",
    },
    {
      conference: "CVPR",
      title: "Real-time AI Models for Medical Analysis",
      year: "2024",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <SectionHeading
          SectionSubtitle="AI Publications"
          SectionTitle="Latest AI Research Contributions"
        />

        <div className="row cs_gap_y_30 mt-4">
          {aiPublications.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="p-4 rounded shadow-sm bg-white h-100">
                <h4 className="text-primary mb-2">{item.conference}</h4>
                <p className="mb-1">{item.title}</p>
                <span className="badge bg-primary">{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIPublication;
