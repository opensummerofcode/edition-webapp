import Link from 'next/link';
// import Demo DayLink from '../UI/Demo DayLink';
// import ExternalLink from '../UI/ExternalLink';
import { ButtonLink } from '../UI/Buttons';

const Info = () => {
  return (
    <>
      <div className="grid-x grid-padding-x u-margin-large--tb">
        <div className="medium-8 large-5 cell">
          <h2>Tap into the next generation&apos;s talent.</h2>
          <p className="hero-text u-margin-large--b">
            #osoc mobilises the next generation to <strong>bring your ideas to life</strong>.
            Experiment, get access to external innovation, find <strong>fresh talent</strong>,
            expand your network and give students the opportunity to get relevant work experience.{' '}
            <a
              href="mailto:info@osoc.be?subject=Regarding osoc Partnership"
              title="Start a partnership with open summer of code"
            >
              {/* className="link--strikethrough" */}
              Mail us
            </a>
            .
          </p>
          <p className="hero-text">Discover our new Open Summer Packages.</p>
        </div>
        <div className="medium-8 large-6 large-offset-1 cell">
          <img
            src="/img/pictures/osoc17-2.jpg"
            className="u-margin--b"
            alt="A coach and his students tackling a problem"
          />
          <p>
            <small>
              Open summer of code 2017 &mdash; the project Prisma. Partner and students
              brainstorm&nbsp;session.
            </small>
          </p>
          {/* <img
            src="/img/pictures/osoc17-3.jpg"
            className="u-margin--b"
            alt="Students working out"
          />
          <p>
            <small>
              Open summer of code 2017 &mdash; making sure our students get some exercise to tackle their projects!
            </small>
          </p> */}
        </div>
        <div className="medium-12 large-10 large-offset-1 cell">
          <h1 className="u-margin-large--tb u-text-align-center u-hide-for-medium-down">
            Innovate with your own team <br />
            of motivated students
          </h1>
          <h1 className="u-margin-large--tb u-hide-for-medium-up">
            Innovate with your own team of motivated students
          </h1>
          <table className="c-pricing u-hide-for-medium-down">
            <thead>
              <tr>
                <th className="c-package__name">
                  <br />
                </th>
                <th width="33%">
                  <p className="c-package__name">
                    <img
                      src="../img/logo/logo-osoc-c.svg"
                      alt=""
                      className="c-package__fruit--melon"
                    />
                    Large <br />
                    Team
                  </p>
                  <p className="c-package__info">
                    Tailor your team with specific profiles to fit your idea.
                  </p>
                </th>
                <th width="33%">
                  <p className="c-package__name">
                    <img
                      src="../img/logo/logo-osoc-o.svg"
                      alt=""
                      className="c-package__fruit--lemon"
                    />
                    Medium <br />
                    Team
                  </p>
                  <p className="c-package__info">
                    Innovate &amp; hack together with a well-rounded team.
                  </p>
                </th>
                <th width="33%">
                  <p className="c-package__name">
                    <img
                      src="../img/logo/logo-osoc-o-small.svg"
                      alt=""
                      className="c-package__fruit--strawberry"
                    />
                    Small <br />
                    Team
                  </p>
                  <p className="c-package__info">
                    Bring a new idea to life with a small but motivated team.
                  </p>
                </th>
                {/* <th>
                  <p className="c-package__name">Custom <br />Team</p>
                  <p className="c-package__info">Get in touch!</p>
                </th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="c-package__condition">Pricing</th>
                <td>
                  <p className="c-package__price">€&thinsp;21&thinsp;000</p>
                </td>
                <td>
                  <p className="c-package__price">€&thinsp;17&thinsp;500</p>
                </td>
                <td>
                  <p className="c-package__price">€&thinsp;14&thinsp;000</p>
                </td>
              </tr>
              <tr>
                <th className="c-package__condition">Students total</th>
                <td className="u-padding-medium--tb">5 students</td>
                <td className="u-padding-medium--tb">4 students</td>
                <td className="u-padding-medium--tb">3 students</td>
              </tr>
              <tr>
                <th className="c-package__condition">
                  Student coach <br />
                  <span className="c-package__info">4th student with more experience</span>
                </th>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-c.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-o.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">-</td>
              </tr>
              <tr>
                <th className="c-package__condition">
                  Topic expert student <br />
                  <span className="c-package__info">5th student</span>
                </th>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-c.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">-</td>
                <td className="c-package__checkmark">-</td>
              </tr>
              <tr>
                <th className="c-package__condition">
                  Project coach
                  <br />
                </th>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-c.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-o.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-o-small.svg" alt="Checkmark" />
                </td>
              </tr>
              <tr>
                <th className="c-package__condition">
                  Development &amp; design coaching
                  <br />
                </th>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-c.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-o.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-o-small.svg" alt="Checkmark" />
                </td>
              </tr>
              <tr className="c-package__price__extra">
                <td colSpan="4">
                  <p className="u-text-align-center">
                    * A customized team tailored to your needs is possible, with pricing calculated
                    on a pro-rata basis.
                    <br />
                    ** When providing your own part-time coach, will also be reflected in the
                    pricing.
                  </p>
                  <p className="c-package__info--small u-text-align-center">
                    Not ready to partner up with a team? Check out our other{' '}
                    <Link href="#support-partners">
                      <strong>partner deals</strong>
                    </Link>{' '}
                    .
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          <section className="c-pricing u-padding--rl u-hide-for-medium-up">
            <article>
              <h2 className="c-package__name">
                <img src="../img/logo/logo-osoc-c.svg" alt="" className="c-package__fruit--melon" />
                Large Team
                <br />
                <span className="c-package__price">€&thinsp;21&thinsp;000</span>
              </h2>
              <p className="c-package__info">
                Tailor your team with specific profiles to fit your idea.
              </p>
              <ul>
                <li>3 students</li>
                <li>1 student coach</li>
                <li>1 extra specific topic student</li>
                <li>1 half-time project coach</li>
                <li>On-demand design &amp; development coaches</li>
              </ul>
            </article>
            <article>
              <h2 className="c-package__name">
                <img src="../img/logo/logo-osoc-o.svg" alt="" className="c-package__fruit--lemon" />
                Medium Team
                <br />
                <span className="c-package__price">€&thinsp;17&thinsp;500</span>
              </h2>
              <p className="c-package__info">Innovate & hack together with a well-rounded team.</p>
              <ul>
                <li>3 students</li>
                <li>1 student coach</li>
                <li>1 half-time project coach</li>
                <li>On-demand design &amp; development coaches</li>
              </ul>
            </article>
            <article>
              <h2 className="c-package__name">
                <img
                  src="../img/logo/logo-osoc-o-small.svg"
                  alt=""
                  className="c-package__fruit--strawberry"
                />
                Small Team
                <br />
                <span className="c-package__price">€&thinsp;14&thinsp;000</span>
              </h2>
              <p className="c-package__info">
                Bring a new idea to life with a small but motivated team.
              </p>
              <ul>
                <li>3 students</li>
                <li>1 half-time project coach</li>
                <li>On-demand design &amp; development coaches</li>
              </ul>
            </article>
            <article>
              <h3 className="u-margin--t">
                <strong>More benefits for each project partner:</strong>
              </h3>

              <ul>
                <li>Online visibility</li>
                <li>Dedicated online project highlight</li>
                <li>Access to a network of young potentials and our #osoc alumni channels</li>
                <li>Project booth during the demo day</li>
                <li>
                  Co-create an open, innovative project with our students and their fresh
                  perspectives.
                </li>
              </ul>

              <p className="c-package__info--small">
                Not ready to partner up with a team? Check out our other{' '}
                <Link href="#support-partners">
                  <strong>partner deals</strong>
                </Link>{' '}
                .
              </p>
            </article>
          </section>
        </div>
      </div>

      <div className="grid-x grid-padding-x u-margin-large--tb" id="support-partners">
        <div className="medium-12 large-10 large-offset-1 cell">
          <h1 className="u-margin-large--tb u-text-align-center u-hide-for-medium-down">
            Become a community partner
          </h1>
          <h1 className="u-margin-large--tb u-hide-for-medium-up">Become a community partner</h1>
          <table className="c-pricing u-hide-for-medium-down">
            <thead>
              <tr>
                <th className="c-package__name" width="10%" />
                <th className="c-package" width="27%">
                  <span className="c-package__name">
                    <img
                      src="../img/logo/logo-osoc-c.svg"
                      alt=""
                      className="c-package__fruit--melon"
                    />{' '}
                    Opportunity <br /> partner
                  </span>
                  <p className="c-package__info">
                    Give students an opportunity, get access to the community.
                  </p>
                </th>
                <th className="c-package" width="27%">
                  <span className="c-package__name">
                    <img
                      src="../img/logo/logo-osoc-o.svg"
                      alt=""
                      className="c-package__fruit--lemon"
                    />{' '}
                    Logistics <br /> partner
                  </span>
                  <p className="c-package__info">
                    Support our community with location or transport means.
                  </p>
                </th>
                <th className="c-package" width="27%">
                  <span className="c-package__name">
                    <img
                      src="../img/logo/logo-osoc-o-small.svg"
                      alt=""
                      className="c-package__fruit--strawberry"
                    />{' '}
                    Support <br /> partner
                  </span>
                  <p className="c-package__info">Show your support and appreciation by donating.</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="c-package__condition">Pricing</th>
                <td>
                  <p className="c-package__price">€&thinsp;3&thinsp;300</p>
                </td>
                <td>
                  <p className="c-package__price">Gift in kind</p>
                </td>
                <td>
                  <p className="c-package__price">€&thinsp;1&thinsp;650</p>
                </td>
              </tr>
              <tr>
                <th>
                  <span className="c-package__condition">Online visibility</span>
                  <br />
                  <span className="c-package__info">Thank you for your support.</span>
                </th>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
              </tr>
              <tr>
                <th>
                  <span className="c-package__condition">Partner highlight</span>
                  <br />
                  <span className="c-package__info">A highlight of your organisation.</span>
                </th>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">-</td>
                <td className="c-package__checkmark">-</td>
              </tr>
              <tr className="c-package__price__extra">
                <td colSpan="4">
                  <p className="u-text-align-center">
                    <Link href="#benefits">
                      <strong>Discover all benefits &darr;</strong>
                    </Link>{' '}
                    <br />
                    All partners are welcome and encouraged to come meet our teams!
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          <section className="c-pricing u-padding--rl u-hide-for-medium-up">
            <article>
              <h2 className="c-package__name">
                <img src="../img/logo/logo-osoc-c.svg" alt="" className="c-package__fruit--melon" />
                Opportunity partner
                <br />
                <span className="c-package__price">€&thinsp;3&thinsp;300</span>
              </h2>
              <p className="c-package__info">
                Give students an opportunity, get access to the community.
              </p>
              <ul>
                <li>Eternal grattitude from our community</li>
                <li>Online visiblity</li>
                <li>A partner highlight of your organisation</li>
                <li>Access a network of young potentials</li>
                <li>Share job opportunities during osoc</li>
              </ul>
            </article>
            <article>
              <h2 className="c-package__name">
                <img src="../img/logo/logo-osoc-o.svg" alt="" className="c-package__fruit--lemon" />
                Logistics partner
                <br />
                <span className="c-package__price">Gift in kind</span>
              </h2>
              <p className="c-package__info">
                Support our community with location or transport means.
              </p>
              <ul>
                <li>Eternal grattitude from our community</li>
                <li>Online visiblity</li>
              </ul>
            </article>
            <article>
              <h2 className="c-package__name">
                <img
                  src="../img/logo/logo-osoc-o-small.svg"
                  alt=""
                  className="c-package__fruit--strawberry"
                />
                Support partner
                <br />
                <span className="c-package__price">€&thinsp;1&thinsp;650</span>
              </h2>
              <p className="c-package__info">Show your support and appreciation by donating.</p>
              <ul>
                <li>Eternal grattitude from our community</li>
                <li>Online visiblity</li>
              </ul>
            </article>
          </section>
        </div>
      </div>

      <div className="grid-x grid-padding-x u-margin-large--tb" id="benefits">
        <div className="medium-12 large-10 large-offset-1 cell u-hide-for-medium-down">
          <h1 className="u-margin-large--tb u-text-align-center">More benefits</h1>
          <table className="c-pricing c-pricing--small">
            <thead>
              <tr>
                <th className="c-package__name" width="10%" />
                <th className="c-package u-text-align-center" width="25%">
                  <span className="c-package__name">
                    Project
                    <br /> partners
                  </span>
                </th>
                <th className="c-package u-text-align-center" width="25%">
                  <span className="c-package__name">
                    Opportunity
                    <br /> partners
                  </span>
                </th>
                <th className="c-package u-text-align-center" width="25%">
                  <span className="c-package__name">
                    Logistics &amp;
                    <br /> Support
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <span className="c-package__condition">Online visibility</span>
                  <br />
                  <span className="c-package__info">
                    Your logo on our website, social media shout-outs and recognition during our
                    Demo Day.
                  </span>
                </th>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
              </tr>
              <tr>
                <th>
                  <span className="c-package__condition">Dedicated project highlight</span>
                  <br />
                  <span className="c-package__info">A long-form highlight of your project.</span>
                </th>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">-</td>
                <td className="c-package__checkmark">-</td>
              </tr>
              <tr>
                <th>
                  <span className="c-package__condition">Dedicated partner highlight</span>
                  <br />
                  <span className="c-package__info">
                    A long-form highlight of your organisation.
                  </span>
                </th>
                <td className="c-package__checkmark">-</td>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">-</td>
              </tr>
              <tr>
                <th>
                  <span className="c-package__condition">Access a network of young potentials</span>
                  <br />
                  <span className="c-package__info">
                    Meet the new lead dev, rockstar designer, communication wizard or CEO of
                    tomorrow.
                  </span>
                </th>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">-</td>
              </tr>
              <tr>
                <th>
                  <span className="c-package__condition">Share job opportunities during osoc</span>
                  <br />
                  <span className="c-package__info">
                    A win-win situation; a possibility to share and find job opportunities. We post
                    your job opportunities on our communication channels for our students.
                  </span>
                </th>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">-</td>
              </tr>
              <tr>
                <th>
                  <span className="c-package__condition">Project booth during the Demo Day</span>
                  <br />
                  <span className="c-package__info">
                    Each project gets presented by the students, with partner visibility.
                  </span>
                </th>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">-</td>
                <td className="c-package__checkmark">-</td>
              </tr>
              <tr>
                <th>
                  <span className="c-package__condition">Open innovation</span>
                  <br />
                  <span className="c-package__info">
                    The opportunity to bring your open innovation idea or project to life.
                  </span>
                </th>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">-</td>
                <td className="c-package__checkmark">-</td>
              </tr>
              <tr>
                <th>
                  <span className="c-package__condition">Fresh ideas</span>
                  <br />
                  <span className="c-package__info">
                    Access to fresh ideas and young brains, selected for motivation and talent.
                  </span>
                </th>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">-</td>
                <td className="c-package__checkmark">-</td>
              </tr>
              <tr>
                <th>
                  <span className="c-package__condition">Co-creation with your own team</span>
                  <br />
                  <span className="c-package__info">
                    Bring your ideas to life with a diverse skilled team.
                  </span>
                </th>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">-</td>
                <td className="c-package__checkmark">-</td>
              </tr>
              <tr>
                <th>
                  <span className="c-package__condition">Access to our #osoc alumni channels</span>
                  <br />
                  <span className="c-package__info">
                    A community to exchange ideas and keep in touch.
                  </span>
                </th>
                <td className="c-package__checkmark">
                  <img src="../img/logo/logo-osoc-s.svg" alt="Checkmark" />
                </td>
                <td className="c-package__checkmark">-</td>
                <td className="c-package__checkmark">-</td>
              </tr>
            </tbody>
          </table>

          {/* <p>
            *Applications are closed! Keep an eye on our{' '}
            <ExternalLink href="https://twitter.com/osocode">Twitter account</ExternalLink> to see
            when applications open for 2022 &mdash; or{' '}
            <Demo DayLink>join us on the Demo Day</Demo DayLink> on the 29th of July.
          </p> */}
        </div>
      </div>

      {/* <!-- info companies --> */}
      <div className="grid-x grid-padding-x u-margin-large--tb">
        {/* <!--<div class="medium-8 large-6 cell">
        <img src="img/pictures/osoc16-coaches-happy.jpg" class="u-margin--b" alt="Image of students working out">
        <p><small>Michael, a really happy coach at open summer of code 2016</small></p></div> --> */}
        {/* <!--<div class="medium-8 large-6 cell">
        <img src="img/pictures/osoc16-coaches-pieter.jpg" class="u-margin--b" alt="Image of students working out">
        <p><small>Pieter, coach &amp; founding father speaking to the crowds</small></p></div> --> */}
        {/* <!-- <div class="medium-8 large-6 cell">
        <img src="img/pictures/osoc16-coaches-sitting.jpg" class="u-margin--b" alt="Image of students working out">
        <p><small>Brainstorming hard for Leuven Leest at open summer of code 2016</small></p></div> --> */}
        <div className="medium-8 large-5 large-offset-1 cell">
          <p>
            <Link href="/practical">Visit our FAQ</Link> if you have any questions, or send us{' '}
            <a
              href="mailto:info@osoc.be?subject=Regarding osoc Partnership"
              title="Partnership at osoc"
            >
              a message
            </a>
            .
          </p>

          <p className="u-margin-large--tb">
            {/* <a
              className="button"
              href="mailto:info@osoc.be?subject=Regarding osoc Partnership"
              title="Start a partnership with open summer of code"
            >
              Mail us to apply
            </a>
            <br /> */}
            {/* <Demo DayLink className="button">Come to the Demo Day</Demo DayLink> */}
            {/* <br /> */}
            <ButtonLink className="button" href="/editions">
              View last edition&apos;s projects
            </ButtonLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Info;
