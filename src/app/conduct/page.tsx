import React from 'react';
import Navbar from '../components/Navbar';

const CodeOfConduct = () => {
  const lastUpdated = new Date('April 21, 2026').toLocaleDateString();
  return (
    <div className="landing-body">
      <Navbar />
      <main className="flex min-h-screen flex-col justify-center p-4">
        <h1 className="text-4xl text-center font-bold">Women Coders Network (WCN) Code of Conduct</h1>
        <section className="px-7 flex flex-col gap-4">
          <p className="mt-4 text-lg">
            Last updated: {lastUpdated}
          </p>
          <h2 className="text-3xl font-bold">Our Commitment</h2>
          <article className="px-4">
            We are dedicated to fostering an inclusive and supportive community that empowers women and gender minorities in 
            technology. We commit to providing an environment that is respectful and encouraging, where all members can thrive free from harassment, discrimination,
             and intolerance. This commitment covers all our activities and platforms, including our Discord server, events, and collaborative projects.
          </article>
          <h2 className="text-3xl font-bold">Expected Behavior</h2>
          <article className="px-4">
            We expect all community members to:
            <ul className="mt-4 list-disc">
              <li>Be respectful of differing viewpoints and experiences</li>
              <li>Gracefully accept constructive criticism</li>
              <li>Support and uplift each other</li>
              <li>Speak out against harassment, discrimination, and exclusionary behaviors.</li>
              <li>Prioritize community over individual conflicts or competitiveness.</li>
            </ul>
          </article>
          <h2 className="text-3xl font-bold">Unacceptable Behavior</h2>
          <article className="px-4">
            Unacceptable behaviors include, but are not limited to:
            <ul className="mt-4 list-disc">
            <li>Harassment in any form, including derogatory language and unwelcome attention related to any characteristic such as gender, gender identity and 
              expression, sexual orientation, disability, physical appearance, body size, race, ethnicity, age, religion, or socioeconomic status.</li>
            <li>Disrespect towards differences of opinion; intimidating, threatening, or hostile conduct.</li>
            <li>The use or display of harmful or offensive imagery or content, especially in community spaces.</li>
            <li>The dissemination of private information without consent.</li>
            <li>Encouragement or endorsement of any of the above behaviors.</li>
            </ul>
          </article>
          <h2 className="text-3xl font-bold">Responsibilities of Community Leaders</h2>
          <article className="px-4">
            Our leaders are tasked with upholding these standards and will take appropriate actions to ensure a welcoming environment for all. This includes:
            <ul className="mt-4 list-disc">
              <li>Addressing any behavior not in line with this code.</li>
              <li>Providing a clear and accessible process for reporting issues.</li>
              <li>Taking prompt action in response to reports of unacceptable behavior.</li>
            </ul>
          </article>
          <h2 className="text-3xl font-bold">Scope of This Code</h2>
          <article className="px-4">
            This Code of Conduct applies to all community spaces, including the Discord server, social media, meetings, events, and one-on-one interactions 
            conducted in the context of community activities.
          </article>
          <h2 className="text-3xl font-bold">Enforcement Procedures</h2>
          <article className="px-4">
            To report behavior that violates this code, please contact the designated community leaders at womencodersnetwork@gmail.com.  
            All complaints will be reviewed and investigated according to our policies. Consequences for violating these standards may include temporary suspension or 
            permanent expulsion from community spaces.
          </article>
          <h2 className="text-3xl font-bold">Attribution</h2>
          <article className="px-4">This Code of Conduct is inspired by the Contributor Covenant, version 1.4, adapted to reflect the values and practices of the Women Coders Network,
             and available at <a href="https://www.contributor-covenant.org/version/1/4/code-of-conduct/" target="_blank">Contributor Covenant</a>.
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CodeOfConduct;
