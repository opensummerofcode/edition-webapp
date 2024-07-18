import PropTypes from 'prop-types';
import Image from 'next/image';
import ExternalLink from '../UI/ExternalLink';

const HeadShot = ({ data, socials = {}, picture, roleShown = true }) => {
  const { name, isCoach } = data;
  const { twitter, linkedin, github, behance, instagram, mastodon, photos } = socials;

  return (
    <article className="small-10 medium-4 large-3 cell headshot-detail">
      <div className="headshot-detail__wrapper">
        {picture && <Image layout="intrinsic" width="400" height="400" src={picture} alt={name} />}
      </div>
      <h2 className="h4 headshot-detail__name">{name}</h2>
      {roleShown && (isCoach ? <p>Coach</p> : <p>Student</p>)}
      <div className="student-social">
        {twitter && (
          <ExternalLink href={twitter}>
            <i className="fab fa-twitter" />
          </ExternalLink>
        )}
        {instagram && (
          <ExternalLink href={instagram}>
            <i className="fab fa-instagram" />
          </ExternalLink>
        )}
        {linkedin && (
          <ExternalLink href={linkedin}>
            <i className="fab fa-linkedin" />
          </ExternalLink>
        )}
        {github && (
          <ExternalLink href={github}>
            <i className="fab fa-github" />
          </ExternalLink>
        )}
        {behance && (
          <ExternalLink href={behance}>
            <i className="fab fa-behance" />
          </ExternalLink>
        )}
        {mastodon && (
          <ExternalLink href={mastodon}>
            <i className="fab fa-mastodon" />
          </ExternalLink>
        )}
        {photos && (
          <ExternalLink href={photos}>
            <i className="fa fa-camera" />
          </ExternalLink>
        )}
      </div>
    </article>
  );
};

HeadShot.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    isCoach: PropTypes.bool,
  }).isRequired,
  socials: PropTypes.shape({
    behance: PropTypes.string,
    github: PropTypes.string,
    instagram: PropTypes.string,
    linkedin: PropTypes.string,
    twitter: PropTypes.string,
    mastodon: PropTypes.string,
    photos: PropTypes.string,
  }),
  picture: PropTypes.string.isRequired,
  roleShown: PropTypes.bool,
};

export default HeadShot;
