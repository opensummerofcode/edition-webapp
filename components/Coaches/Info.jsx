import React from 'react';
import Link from 'next/link';
import ExternalLink from '../UI/ExternalLink';
import { applicationTallyURL } from '../Common/ApplyLink';

const Info = () => {
  return (
    <React.Fragment>
      <div className="grid-x grid-padding-x u-margin-large--tb align-middle">
        <div className="small-12 medium-10 large-6 cell">
          <h2>
            Every student needs someone to teach them what cannot be taught in school.{' '}
            <a href="mailto:info@osoc.be?subject=Regarding osoc Coaching" title="Coach at osoc">
              {/* className="link--strikethrough" */}
              Mail&nbsp;us
            </a>
          </h2>
          <ul className="u-margin hero-text">
            <li>
              This is your chance to <strong>share your knowledge</strong> and give back to
              community.
            </li>
            <li>
              In the meantime you will grow your own abilities to{' '}
              <strong>lead a diverse team</strong>.
            </li>
            <li>
              #osoc has a powerful network you can benefit from for{' '}
              <strong>future opportunities</strong>.
            </li>
            <li>
              Do not underestimate what these students can teach you either; their{' '}
              <strong>fresh perspectives and energy</strong> are addictive.
            </li>
          </ul>
          <p>
            Apply now for osoc 2024 via the{' '}
            <ExternalLink href={applicationTallyURL} title="osoc 2024 application">
              following link
            </ExternalLink>
          </p>
        </div>
        <div className="medium-8 large-6 cell">
          <img
            src="/img/pictures/osoc16-coaches-student-happy.jpg"
            className="u-margin--b"
            alt="A happy coach and a happy student"
          />
          <p>
            <small>Open summer of code 2016 &mdash; a proud coach and a happy student</small>
          </p>
        </div>
      </div>

      <div className="grid-x grid-padding-x u-margin-large--tb" id="support-partners">
        <div className="medium-8 large-7 cell">
          <h2>Guide a team of motivated students to success for one month.</h2>
        </div>
        <div className="medium-12 large-10 large-offset-1 cell">
          <table className="c-pricing u-hide-for-medium-down">
            <thead>
              <tr>
                <th className="c-package" width="25%">
                  <span className="c-package__name">
                    <img
                      src="../img/logo/logo-osoc-o.svg"
                      alt=""
                      className="c-package__fruit--lemon"
                    />{' '}
                    Half-time
                    <br />
                    coach
                  </span>
                  <p className="c-package__info">Help one team bring their project to life.</p>
                </th>
                <th className="c-package" width="25%">
                  <span className="c-package__name">
                    <img
                      src="../img/logo/logo-osoc-o-small.svg"
                      alt=""
                      className="c-package__fruit--strawberry"
                    />{' '}
                    Full-time
                    <br />
                    coach
                  </span>
                  <p className="c-package__info">Help 2 teams achieve their goals.</p>
                </th>
                <th className="c-package" width="25%">
                  <span className="c-package__name">
                    <img
                      src="../img/logo/logo-osoc-c.svg"
                      alt=""
                      className="c-package__fruit--lemon"
                    />{' '}
                    Volunteer or councillor
                  </span>
                  <p className="c-package__info">
                    You&apos;re awesome and you just want to contribute, in your way!
                  </p>
                </th>
                <th className="c-package" width="25%">
                  <span className="c-package__name">
                    <img
                      src="../img/logo/logo-osoc-s.svg"
                      alt=""
                      className="c-package__fruit--snake"
                    />{' '}
                    Partner <br /> coach
                  </span>
                  <p className="c-package__info">
                    Get a discount as a partner if you&apos;re coaching your own team.
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p className="c-package__price">€&thinsp;2&thinsp;880</p>
                  Excluding VAT.
                </td>
                <td>
                  <p className="c-package__price">€&thinsp;5&thinsp;760</p>
                  Excluding VAT.
                </td>
                <td>
                  <p className="c-package__price">Let&apos;s talk!</p>
                  Let&apos;s see what we can mean to each other.
                </td>
                <td>
                  <p className="c-package__price">
                    Discover our <br />
                    <Link href="/partners">partner deals</Link>{' '}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          <section className="c-pricing u-padding--rl u-hide-for-medium-up">
            <article>
              <h2 className="c-package__name">
                <img src="../img/logo/logo-osoc-o.svg" alt="" className="c-package__fruit--lemon" />
                Half-time coach
                <br />
                <span className="c-package__price">Earn €&thinsp;2&thinsp;880</span>
              </h2>
              <p className="c-package__info">Help one team bring their project to life.</p>
            </article>
            <article>
              <h2 className="c-package__name">
                <img
                  src="../img/logo/logo-osoc-o-small.svg"
                  alt=""
                  className="c-package__fruit--lemon"
                />
                Full-time coach
                <br />
                <span className="c-package__price">Earn €&thinsp;5&thinsp;760</span>
              </h2>
              <p className="c-package__info">Help 2 teams achieve their goals.</p>
            </article>
            <article className="u-margin-large--b">
              <h2 className="c-package__name">
                <img src="../img/logo/logo-osoc-c.svg" alt="" className="c-package__fruit--melon" />
                Volunteer or councillor
                <br />
                <span className="c-package__price">Let&apos;s talk!</span>
              </h2>
              <p className="c-package__info">
                You&apos;re awesome and you just want to contribute, in your way!
              </p>
            </article>
            <article className="u-margin-large--b">
              <h2 className="c-package__name">
                <img src="../img/logo/logo-osoc-s.svg" alt="" className="c-package__fruit--snake" />
                Partner coach
                <br />
                <span className="c-package__price">
                  Discover our <Link href="/partners">partner deals</Link> .
                </span>
              </h2>
              <p className="c-package__info">
                Get a discount as a partner if you&apos;re coaching your own team.
              </p>
            </article>
          </section>
        </div>
      </div>

      <div className="grid-x grid-padding-x u-margin-large--tb">
        <div className="medium-8 large-4 cell large-offset-1">
          <p>The coaching job includes:</p>
          <ul>
            <li>1 or 2 student selection nights</li>
            <li>1 or 2 brainstorm sessions with the partner</li>
            <li>During: kick-off day, 14 (half) days of coaching &amp; Demo Day.</li>
          </ul>
          <p>
            Want to discover more about what the coaching job entails? Visit our{' '}
            <Link href="https://help.osoc.be/global/coaches/the-coaching-job/soft-skills-and-expectations">
              wiki
            </Link>{' '}
            .
          </p>
          <p>
            <Link href="/practical">Visit our FAQ</Link> to learn more, or send us{' '}
            <a href="mailto:info@osoc.be?subject=Regarding osoc Coaching" title="Coach at osoc">
              a message
            </a>
            .
          </p>
          <p className="u-margin-large--tb">
            <a
              className="button"
              href="mailto:info@osoc.be?subject=Regarding osoc Coaching"
              title="Coach at open summer of code"
            >
              Mail us to apply
            </a>
          </p>
        </div>
        <div className="medium-8 large-6 cell">
          <img
            src="/img/pictures/osoc16-harry-roberts.jpg"
            className="u-margin--b"
            alt="Students working out"
          />
          <p>
            <small>
              Harry Roberts{' '}
              <ExternalLink
                href="https://twitter.com/csswizardry"
                title="Harry Roberts Twitter handle @csswizardry"
              >
                @csswizardry
              </ExternalLink>{' '}
              showing our students how CSS is done at open summer of code 2016.
            </small>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Info;
