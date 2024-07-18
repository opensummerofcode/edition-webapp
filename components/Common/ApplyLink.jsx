import Link from 'next/link';
import useSWR from 'swr';
import fetcher from '../../util/fetch';
import ExternalLink from '../UI/ExternalLink';

const geoJsonFetcher = () => fetcher('http://www.geoplugin.net/json.gp');

export const applicationTallyURL = 'https://tally.so/r/wQ5Xv7';

// Generates an "Apply" link based on the location of the visitor.
// This geolocation info is requested client-side.
//
// If the visitor is in a EEA/Switzerland country, this link redirects them to
// the Tally application form.

// If they are outside these countries, it redirects them to a warning page about
// oSoc not being able to support visas ("non-EU warning").
//
// Reason: non-EEA/Swiss students can not work with a "student job contract" in Belgium:
//
// NL: https://werk.belgie.be/nl/themas/arbeidsovereenkomsten/bijzondere-arbeidsovereenkomsten/overeenkomst-voor-tewerkstelling-van
// FR: https://emploi.belgique.be/fr/themes/contrats-de-travail/contrats-de-travail-particuliers/contrat-doccupation-detudiants
// > "De buitenlandse studenten afkomstig uit een land van de Europese Economische Ruimte
// >  of uit Zwitserland hebben dezelfde rechten en verplichtingen als de Belgische studenten,
// >  zelfs als ze geen onderwijs volgen in België of hier niet verblijven."
const ApplyLink = () => {
  const { data, error } = useSWR('/geo-info.json', geoJsonFetcher);
  // TODO: set timeout

  const buttonContent = (
    <>
      Apply as a student
      <span className="button__info">Before April 29th 2024</span>
    </>
  );

  const validCountryButton = (
    <ExternalLink href={applicationTallyURL} target="_blank" className="button">
      {buttonContent}
    </ExternalLink>
  );

  const invalidCountryButton = (
    <Link href="/non-eu-warning" className="button">
      {buttonContent}
    </Link>
  );

  // If there is an error, or if the location data is still loading,
  // then never redirect to the warning page.
  if (error != null || data == null) {
    return validCountryButton;
  }

  if (
    data.geoplugin_continentCode != null &&
    data.geoplugin_countryName != null &&
    !(
      // EEA are the EU countries + Iceland, Liechtenstein & Norway.
      (
        data.geoplugin_inEU === 1 ||
        /Iceland|Liechtenstein|Norway|Switzerland/.test(data.geoplugin_countryName)
      )
    )
  ) {
    return invalidCountryButton;
  }

  return validCountryButton;
};

export default ApplyLink;
