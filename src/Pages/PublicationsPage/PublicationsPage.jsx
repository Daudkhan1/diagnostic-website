// src/pages/PublicationsPage.jsx
import PublicationItem from '../../Components/PublicationItem';
import { publicationsData } from '../../data/PublicationsData';
import '../../sass/PublicationsPage.scss'; 

function PublicationsPage() {
  return (
    <div className="publications-page-container">
      {/* You can add a page title here if needed */}
      {/* <h1>Our Publications</h1> */}
      <section className="publications-list">
        {publicationsData.length > 0 ? (
          publicationsData.map((pub) => (
            <PublicationItem
              key={pub.id} // Important for list rendering
              title={pub.title}
              description={pub.description}
              authors={pub.authors}
              year={pub.year}
              citations={pub.citations}
              imageUrl={pub.imageUrl}
              webURL={pub.webURL}
            />
          ))
        ) : (
          <p>No publications to display.</p> // Fallback message
        )}
      </section>
    </div>
  );
}

export default PublicationsPage;