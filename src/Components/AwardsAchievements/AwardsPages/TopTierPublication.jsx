import SectionHeading from "../../SectionHeading";

const TopTierPublication = () => {
  const publications = [
    {
      journal: "Nature Medicine",
      title: "AI Powered Cancer Detection",
      year: "2023",
    },
    {
      journal: "The Lancet Digital Health",
      title: "Deep Learning for Medical Imaging",
      year: "2022",
    },
    {
      journal: "IEEE Transactions on Medical Imaging",
      title: "AI Automation in Radiology",
      year: "2024",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <SectionHeading
          SectionSubtitle="Top-Tier Publications"
          SectionTitle="Our Published Research in Renowned Journals"
        />

        <div className="row cs_gap_y_30 mt-4">
          {publications.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="p-4 rounded shadow-sm bg-white h-100">
                <h4 className="text-primary mb-2">{item.journal}</h4>
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

export default TopTierPublication;
