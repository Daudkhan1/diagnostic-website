// src/components/PublicationItem.jsx
import { Button } from 'bootstrap';
import PropTypes from 'prop-types';

function PublicationItem({ title, description, authors, year, citations, imageUrl, webURL }) {
  return (
    <article className="publication-item">
      <div className="publication-content">
        <h3 className="publication-title">{title}</h3>
        <p className="publication-description">{description}</p>
        <div className="publication-meta">
          <div className="meta-section">
            <span className="meta-label">Author</span>
            <p className="author-list">{authors.join(', ')}</p>
          </div>
          <div className="meta-row">
             <div className="meta-section">
               <span className="meta-label">Year</span>
               <p>{year}</p>
             </div>
             <div className="meta-section">
               <span className="meta-label">Citations</span>
               <p>{citations}</p>
             </div>
             <div className='meta-section'>
                <button type="submit" className="cs_btn cs_style_1 cs_color_2">
                <a href={webURL} target='_blank' rel='noopener noreferrer' className='text-white'>View Publication</a>
                </button>
             </div>
          </div>
        </div>
      </div>
      <div className="publication-image">
        {imageUrl && <img src={imageUrl} alt={`Visual representation for ${title}`} />}
        {/* <img src={"/assets/img/publications/image1.png"} alt="Publications" /> */}
      </div>
      
    </article>
  );
}

// Define prop types for better component documentation and error checking
PublicationItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
  citations: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Allow string or number
  imageUrl: PropTypes.string, // Optional image URL
};

export default PublicationItem;