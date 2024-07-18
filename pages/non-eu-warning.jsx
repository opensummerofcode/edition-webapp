import Head from 'next/head';
import Link from 'next/link';
import useSWR from 'swr';
import ExternalLink from '../components/UI/ExternalLink';
import fetcher from '../util/fetch';
import { applicationTallyURL } from '../components/Common/ApplyLink';

const geoJsonFetcher = () => fetcher('http://www.geoplugin.net/json.gp');

const NonEUWarning = () => {
  const { data, error } = useSWR('/geo-info.json', geoJsonFetcher);

  let visitorCountry = null;
  if (!error && !!data && !!data.geoplugin_countryName) {
    visitorCountry = data.geoplugin_countryName;
  }

  return (
    <div className="non-eu-container">
      <div className="grid-x grid-margin-x">
        <div className="cell">
          <Head>
            <title>Warning | Open Summer of Code</title>
            <meta name="robots" content="noindex" />
          </Head>
          <h1>
            Warning: oSoc does <span style={{ color: 'red' }}>not support visas </span>
            <span role="img" aria-label="Sad face">
              😞
            </span>
          </h1>
          <p>
            It seems you are visiting us from{' '}
            {visitorCountry ? (
              <>
                <strong>{visitorCountry}</strong>, which is not a country in the European Economic
                Area or Switzerland.
              </>
            ) : (
              <>outside the EU or Switzerland.</>
            )}
          </p>

          <p>
            <strong>
              You are probably <span style={{ color: 'red' }}>not</span> eligible to work at oSoc.
              You will waste your time by starting this application.
            </strong>
          </p>
          <p>We can only process your application if you can prove that:</p>
          <ul>
            <li>
              You are <strong>currently enrolled</strong> in a <strong>full study program</strong>{' '}
              in <strong>Belgium.</strong>
            </li>
            <li>
              You <strong>currently</strong> have a <strong>valid Belgian residence permit.</strong>
            </li>
            <li>You are able to work on-location in Brussels, Belgium in July 2022.</li>
          </ul>
          <div className="actions">
            <div className="go-back-container">
              <p>
                <Link href="/" className="link link--go-back">
                  I understand, back to home.
                </Link>
                <small>
                  <span role="img" aria-label="A tip:">
                    💡
                  </span>{' '}
                  Follow us on{' '}
                  <ExternalLink className="link--twitter" href="https://twitter.com/osocode">
                    Twitter
                  </ExternalLink>{' '}
                  to learn when oSoc comes to {visitorCountry || 'your country'}!
                </small>
              </p>
            </div>
            <hr />
            <ExternalLink>
              <a
                className="link link--continue"
                href={applicationTallyURL}
                target="_blank"
                rel="noreferrer"
              >
                I have the required documents, continue.
              </a>
            </ExternalLink>
          </div>
          <small className="legal-basis">
            Read about the legal basis for these requirements on the website of the Belgian
            government:{' '}
            <ExternalLink href="https://werk.belgie.be/nl/themas/arbeidsovereenkomsten/bijzondere-arbeidsovereenkomsten/overeenkomst-voor-tewerkstelling-van">
              NL
            </ExternalLink>{' '}
            /{' '}
            <ExternalLink href="https://emploi.belgique.be/fr/themes/contrats-de-travail/contrats-de-travail-particuliers/contrat-doccupation-detudiants">
              FR
            </ExternalLink>
          </small>
        </div>
      </div>
    </div>
  );
};

export default NonEUWarning;
