import { useContext } from 'react';
import useSWR from 'swr';
import MetaContext from '../context/meta';
import fetch from '../util/fetch';
import OsocDescription from '../components/Home/OsocDescription';
import Braggings from '../components/Home/Braggings';
import HomeHeader from '../components/Home/HomeHeader';
import Partners from '../components/Partners/Partners';
// import { ButtonLink } from '../components/UI/Buttons';
// import ExternalLink from '../components/UI/ExternalLink';

const HomeContainer = () => {
  const { previousEdition, showPreviousPartners, activeEdition } = useContext(MetaContext);
  // const [infoNoticeShown, setInfoNoticeShown] = useState(true);

  const partners = showPreviousPartners
    ? useSWR(() => `/editions/${previousEdition.year}/partners.json`, fetch).data
    : useSWR(() => `/editions/${activeEdition.year}/partners.json`, fetch).data;

  console.log({ showPreviousPartners, partners });

  return (
    <>
      <HomeHeader />
      <OsocDescription />
      <Braggings />
      <Partners partners={partners} />
    </>
  );
};

export default HomeContainer;
