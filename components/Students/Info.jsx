import Link from 'next/link';
import { applicationTallyURL } from '../Common/ApplyLink';
import ExternalLink from '../UI/ExternalLink';

const Info = () => {
  return (
    <>
      <div className="grid-x grid-padding-x u-margin-large--tb">
        <div className="small-12 medium-10 large-6 cell">
          <h1>
            Open summer of code is for anyone who brings motivation, enthusiasm and talent to
            the&nbsp;table.
          </h1>
          <ul className="hero-text u-margin">
            <li>
              You&apos;ll work in <strong>cross-functional</strong> teams to bring an idea to life.{' '}
              <strong>Experts</strong> in the field guide you to do so with valuable{' '}
              <strong>techniques</strong> and <strong>tools</strong>.
            </li>
            <li>
              You&apos;ll become more <strong>independent and professional</strong> by managing a
              real project for a real client.
            </li>
            <li>
              What you make is <strong>open source</strong>: <strong>spread knowledge</strong> and
              foster <strong>innovation</strong>, by opening up your work.
            </li>
          </ul>
          <p>
            Apply now for osoc 2024 via the{' '}
            <ExternalLink href={applicationTallyURL}>following link</ExternalLink>
          </p>
        </div>

        <div className="medium-8 large-6 cell">
          <img
            src="/img/pictures/osoc17-1.jpg"
            className="u-margin--b"
            alt="Students getting freaky with it"
          />
          {/* <p>
            <small>Open summer of code 2017 &mdash; project B-badges</small>
          </p> */}
        </div>
      </div>

      <div className="grid-x grid-padding-x u-margin-large--tb" id="support-partners">
        <div className="medium-12 large-5 large-offset-1 cell">
          <section className="u-margin--t">
            <article>
              <p>
                Officially you&apos;ll work 4 days a week, 7,6 hours a day for 16 days. You&apos;re
                off during holidays, but still paid!
              </p>
            </article>
          </section>
        </div>
      </div>

      <div className="grid-x grid-padding-x u-margin-large--tb">
        <div className="small-12 large-6 cell">
          <div style={{ padding: '56.25% 0 0 0', position: 'relative', marginBottom: '1rem' }}>
            <iframe
              src="https://player.vimeo.com/video/177368331?title=0&byline=0&portrait=0"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                width: '100%',
                height: '100%',
              }}
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
              title="TODO"
            />
          </div>
          <p>
            <small>The 2016 aftermovie; see us building, pitching &amp; cruising!</small>
          </p>
        </div>

        <div className="medium-8 large-5 cell">
          <h1>The benefits: more than money</h1>
          <p>
            An unforgettable <strong>learning experience</strong>, for any student, as long as
            you&apos;re motivated. Work on real, valuable projects that beef your cv and grow your
            network — all while having fun.
          </p>
          <p>
            <Link href="/practical">Visit our FAQ</Link> to learn more, or send us{' '}
            <a href="mailto:info@osoc.be?subject=Regarding osoc" title="Student at osoc">
              a message
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default Info;
