import PropTypes from 'prop-types';
import Head from 'next/head';
import ProjectsHeader from '../../components/Editions/ProjectsHeader';
import ProjectsGallery from '../../components/Editions/ProjectsGallery';
import Partners from '../../components/Partners/Partners';

const EditionOverview = ({ editions, partners, participants, projects }) => {
  // const year = parseInt(router.query.year, 0);

  // const edition = editions.find((e) => e.year === year);
  // const editionExists = !!edition;

  // useEffect(() => {
  //   if (edition.external) {
  //     window.location = edition.url;
  //   } else if (!editionExists) {
  //     router.push('/404');
  //   }
  // }, []);

  const sortAlphabetically = (a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;
  };

  // if (!editionExists || !projects || !participants || !partners) return <></>;

  // const coaches = participants.filter((p) => p.coach);
  // const students = participants.filter((p) => !p.coach);

  // const today = new Date();
  // const demoDayDate = new Date(edition.demoDayDate) || null;
  // const isDemoDay =
  //   !!demoDayDate &&
  //   demoDayDate.getDate() === today.getDate() &&
  //   demoDayDate.getMonth() === today.getMonth() &&
  //   demoDayDate.getFullYear() === today.getFullYear();

  let projectOrder = projects.sort(sortAlphabetically);
  // if (isDemoDay) {
  if (false) {
    // group by break-out time slot
    const groupedProjects = projects.reduce((group, p) => {
      const exists = group[p.breakout.startsAt];
      group[p.breakout.startsAt] = exists ? [...exists, p] : [p];
      return group;
    }, {});

    // sort time-slots ascending and projects alphabetically
    projectOrder = Object.keys(groupedProjects)
      .sort((slot1, slot2) => new Date(slot2) - new Date(slot1))
      .reduce((group, groupSlot) => {
        const p = groupedProjects[groupSlot];
        return [p.sort(sortAlphabetically), ...group];
      }, [])
      .flat();
  }

  return (
    <>
      {[2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022].map((year) => (
        <>
          <Head>
            <title>{year} projects | Open Summer of Code</title>
          </Head>
          <ProjectsHeader />
          <ProjectsGallery edition={year} isDemoDay={false} projects={projectOrder} />
        </>
      ))}
      {/* <StudentsHeader />
      <StudentsGallery edition={year} students={students.sort(sortAlphabetically)} />
      <CoachesHeader />
      <CoachesGallery edition={year} coaches={coaches.sort(sortAlphabetically)} /> */}
      <Partners partners={partners} />
    </>
  );
};

export async function getStaticPaths() {
  const { default: editions } = await import(`../../public/editions/index.json`);
  return {
    paths: editions
      .filter((e) => !e.external)
      .map((e) => ({ params: { year: e.year.toString() } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // const queue = [
  //   import(`../../../public/editions/${year}/partners.json`),
  //   import(`../../../public/editions/${year}/participants.json`),
  //   import(`../../../public/editions/${year}/projects.json`),
  // ];
  // get all editions
  const editions = [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];
  const queue = editions.map((year) => {
    return Promise.all([
      import(`../../public/editions/${year}/partners.json`),
      import(`../../public/editions/${year}/participants.json`),
      import(`../../public/editions/${year}/projects.json`),
    ]);
  });
  const [partners, participants, projects] = await Promise.all(queue);
  return {
    props: {
      partners: partners.default,
      participants: participants.default,
      projects: projects.default,
    },
  };
}

EditionOverview.propTypes = {
  editions: PropTypes.arrayOf(PropTypes.shape).isRequired,
  partners: PropTypes.arrayOf(PropTypes.shape).isRequired,
  participants: PropTypes.arrayOf(PropTypes.shape).isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default EditionOverview;
