// import { useState, useEffect } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import slugify from 'slugify';
import { ButtonLink } from '../UI/Buttons';

// const BREAKOUT_UNSTARTED = 1;
// const BREAKOUT_IN_PROGRESS = 2;
// const BREAKOUT_ENDED = 3;

const Project = ({ edition, project }) => {
  // isDemoDay
  const { name, description, logo, id } = project;

  const slug = slugify(name, { lower: true });

  // const determineBreakoutState = () => {
  //   // if (!isDemoDay) return null;
  //   return null;
  // };

  // const [breakoutStatus, setBreakoutStatus] = useState(determineBreakoutState());

  useEffect(() => {
    const interval = () => {};
    return () => clearInterval(interval);
  }, []);

  let $buttonContent;
  const buttonDisabled = true;

  return (
    // ${isDemoDay ? 'on-demo-day' : ''}
    <>
      <div className="c-projects-project">
        <Link
          href="/editions/[year]/[project]"
          as={`/editions/${edition}/${id ?? slug}`}
          className="c-projects-image"
        >
          <img
            src={logo ?? `/editions/${edition}/projects/${slug}.svg`}
            alt={`Crest of the ${name} project`}
          />
        </Link>
        <h2 className="c-projects__title h5">
          <Link href="/editions/[year]/[project]" as={`/editions/${edition}/${id ?? slug}`}>
            {name}
          </Link>
        </h2>
        <p>{description}</p>
        {/* // isDemoDay && ( */}
        {false && (
          <ButtonLink disabled={buttonDisabled} isExternal href={project.breakout.room}>
            {$buttonContent}
          </ButtonLink>
        )}
      </div>
    </>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    logo: PropTypes.string,
    breakout: PropTypes.shape({
      startsAt: PropTypes.string,
      endsAt: PropTypes.string,
      room: PropTypes.string,
    }),
  }).isRequired,
  edition: PropTypes.number.isRequired,
  // isDemoDay: PropTypes.bool.isRequired,
};

export default Project;
