import { useContext } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import useSWR from 'swr';
import fetch from '../../util/fetch';
import MetaContext from '../../context/meta';
// import { ButtonLink } from '../UI/Buttons';

const FeaturedProjects = ({ divider }) => {
  const { activeEdition } = useContext(MetaContext);

  // eslint-disable-next-line react/prop-types
  const renderProject = ({ name, description, logo, id }) => (
    <div key={id} className="small-6 medium-6 large-3 cell c-projects-project">
      <Link
        href="/editions/[year]/[project]"
        as={`/editions/${activeEdition}/${id}`}
        className="c-projects-image"
      >
        <img src={logo} alt="Logo of project Bike4Brussels" />
      </Link>
      <div className="c-projects-content">
        <h2 className="h5">
          <Link href="/editions/[year]/[project]" as={`/editions/${activeEdition}/${id}`}>
            {name}
          </Link>
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );

  const { data: projects } = useSWR(`/editions/${activeEdition}/projects.json`, fetch);

  if (!projects || projects.length === 0) return <></>;

  const $projects = projects.filter((p) => p.featured).map(renderProject);
  return (
    <div className={`u-padding-x-large--tb c-projects-old ${divider}`}>
      <div className="grid-x grid-padding-x align-center">
        {$projects}
        {/* <ButtonLink
          className="medium-7 large-4 c-projects-old__project align-center text-center u-margin-large--t"
          href="/editions/2020"
        >
          View last year&apos;s projects
        </ButtonLink> */}
      </div>
    </div>
  );
};

FeaturedProjects.propTypes = {
  divider: PropTypes.string.isRequired,
};

export default FeaturedProjects;
