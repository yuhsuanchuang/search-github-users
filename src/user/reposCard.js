import React from 'react';
import PropTypes from 'prop-types';

export function ReposCard({ data }) {
  const {
    html_url: htmlUrl,
    name,
    description,
    updated_at: updatedAt,
    language,
  } = data;
  return (
    <>
      <div className='user-details-card'>
        <a href={htmlUrl} className='title'>
          {name}
        </a>
        <p>{description}</p>
        {!!language && <span className='repo-attribute'>{language}</span>}
        {!!updatedAt && (
          <span className='repo-attribute'>{`Updated On ${new Date(
            updatedAt,
          )}`}</span>
        )}
      </div>
      <hr />
    </>
  );
}

ReposCard.propTypes = {
  data: PropTypes.shape({
    html_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    updated_at: PropTypes.string.isRequired,
    language: PropTypes.string,
  }).isRequired,
};
