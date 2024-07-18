import Link from 'next/link';
import DemoDayLink from '../UI/DemoDayLink';
import ExternalLink from '../UI/ExternalLink';

const StudentApplication = () => {
  return (
    <div className="grid-x grid-padding-x u-margin-large--tb">
      <div className="cell small-11 medium-8 large-6">
        <div className="c-faq__item">
          <h4 className="c-faq__item__question">Why should I participate in osoc? </h4>
          <div className="c-faq__item__answer">
            <p>
              There are multiple reasons to participate. First of all, you can improve your skills
              under the supervision of several experienced coaches. Secondly, since you’ll be making
              a real product or service, it looks great on your resume and you’ll expand your
              network. Thirdly, you’ll surely make some new friends too.
            </p>
            <p>
              Sounds awesome, no? And we didn’t even get to the best part yet: osoc is completely
              free. Even better, you are getting paid! This programme could replace your summer job.
              Enhancing your skills, making new friends and cashing in some money too? Sounds like a
              good plan, right?
            </p>
          </div>
        </div>
      </div>

      <div className="cell small-11 medium-8 large-6">
        <div className="c-faq__item">
          <h4 className="c-faq__item__question">What will I be doing during osoc?</h4>
          <div className="c-faq__item__answer">
            <p>
              All students will work in teams on different open innovation projects provided by
              partnering organisations, companies and governments. The goal is to complete these
              projects by the end of the programme and turn them into real-world products and
              services. In the end, your team will present the finished product to the partnering
              organisation and the world.
            </p>
          </div>
        </div>
      </div>

      <div className="cell small-11 medium-8 large-6">
        <div className="c-faq__item">
          <h4 className="c-faq__item__question">
            What kind of project can I expect to work on at osoc?
          </h4>
          <div className="c-faq__item__answer">
            <p>
              All projects at osoc are being built open source and aim to create real-world impact.
              Over the last few years, students have got the opportunity to work on open innovation
              projects in different fields such as mobility, education, health, sports and
              biodiversity. Check out{' '}
              <Link href="/editions/[year]" as="/editions/2022" target="_blank">
                last edition
              </Link>{' '}
              to see what kind of projects have been built by osoc students at the latest edition.
            </p>
          </div>
        </div>
      </div>

      <div className="cell small-11 medium-8 large-6">
        <div className="c-faq__item">
          <h4 className="c-faq__item__question">
            How do I apply for osoc? When will I know whether I can participate?{' '}
          </h4>
          <div className="c-faq__item__answer">
            <p>Apply for osoc 2024 via the link in the top bar on the right. </p>
            <p>
              We will send you periodic updates on the status of your application. In May we go over
              all the applications and match the right students with the right projects. You will
              have a final answer by the end of May, but it can be sooner if you were selected in an
              earlier round.
            </p>
          </div>
        </div>
      </div>

      <div className="cell small-11 medium-8 large-6">
        <div className="c-faq__item">
          <h4 className="c-faq__item__question">Can I participate in osoc?</h4>
          <div className="c-faq__item__answer">
            <p>
              Yes, if you meet the following requirements.
              <br />* For international students, check the next question
            </p>
            <ul>
              <li>
                First of all, you’re a student eligible to work under a student contract for 16 full
                days (128 hours).
              </li>
              <li>
                Secondly, you study or have experience in front- or back-end development, design
                (UX, graphic), communication or business modelling.
              </li>
              <li>Thirdly, you should be able to express yourself in English.</li>
            </ul>
            <p>Do you meet these requirements? Congratulations, you could be an osoc student!</p>
          </div>
        </div>
      </div>

      <div className="cell small-11 medium-8 large-6">
        <div className="c-faq__item">
          <h4 className="c-faq__item__question">
            Can I participate if I am not a Belgian citizen?
          </h4>
          <div className="c-faq__item__answer">
            {/* <p>
              Since osoc is remote this year, you don&apos;t necessarily have to be staying in
              Belgium to apply for Open Summer of Code 2020, but you have to be allowed to work as a
              student under the Belgian regulation.
            </p> */}
            <p>
              Students from an EEA member state or from Switzerland are entitled to work in Belgium
              throughout the year under the same terms as Belgian students. EAA member state means
              any of the member states of the European Union, Iceland, Liechtenstein, and Norway.
            </p>
            <p>
              Are you from a country that is not included in the above list? Then you may work in
              Belgium if you:
            </p>
            <ul>
              <li>are registered in education with full curriculum in Belgium</li>
              <li>have a valid residence permit</li>
            </ul>
            <p>You must be able to work from 9 to 5 in the GMT+2 time zone.</p>
          </div>
        </div>
      </div>

      <div className="cell small-11 medium-8 large-6">
        <div className="c-faq__item">
          <h4 className="c-faq__item__question">How are you going to be assessed?</h4>
          <div className="c-faq__item__answer">
            <p>
              In order to apply you need to submit a letter of motivation, explaining why you would
              like to join the movement and what you will bring to the table to make osoc great.
              Make sure to include your portfolio or some examples of your work as well. Based on
              your motivation, portfolio and your CV, a group of experienced osoc volunteers will
              match your unique set of skills and experiences with partner’s desired student
              profiles.
            </p>
          </div>
        </div>
      </div>

      <div className="cell small-11 medium-8 large-6">
        <div className="c-faq__item">
          <h4 className="c-faq__item__question">What if I can&apos;t join osoc?</h4>
          <div className="c-faq__item__answer">
            <p>
              That&apos;s too bad! You can always apply again next year as a student &mdash; or even
              as a coach. You&apos;re also welcome to join us during the{' '}
              <DemoDayLink>demo day</DemoDayLink>. And keep an eye on our{' '}
              <ExternalLink href="https://twitter.com/osocode" target="_blank">
                Twitter account
              </ExternalLink>{' '}
              to see what we&apos;re up to!
            </p>
          </div>
        </div>
      </div>

      <div className="cell small-11 medium-8 large-6">
        <div className="c-faq__item">
          <h4 className="c-faq__item__question">
            What if I didn&apos;t make it through the applications?
          </h4>
          <div className="c-faq__item__answer">
            <p>
              Don&apos;t worry, you can always apply again next year as a student &mdash; or even as
              a coach. Just keep working on yourself and your resumé. We will review your
              application like it&apos;s the first time you applied. Don&apos;t forget to visit us
              during the <DemoDayLink>demo day</DemoDayLink>.
            </p>
          </div>
        </div>
      </div>

      <div className="cell small-11 medium-8 large-6">
        <div className="c-faq__item">
          <h4 className="c-faq__item__question">Reimbursements</h4>
          <div className="c-faq__item__answer">
            <p>
              We compensate all your public transports costs. You are free to come by car or book
              yourself a fancy hotel, but we don&apos;t reimburse those things.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentApplication;
