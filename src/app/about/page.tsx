import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Nazarbayev Intellectual School of Physics and Math Almaty",
};

const About = () => {
  return (
    <section className="pb-24">
      <h1 className="text-2xl">About us</h1>

      <div className="mt-5 prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          NIS PM Almaty is an international school that provides educational
          opportunities for gifted students through{" "}
          <b>International Baccalaureate</b> programs and is committed to
          fostering intellectual community, intercultural understanding, and an
          appreciation of lifelong learning.
        </p>
        <h2>Our advantages</h2>
        <ul>
          <li>CIS Accreditation</li>
          <li>Compliance with international standards</li>
          <li>Multilingualism</li>
          <li>Additional Education</li>
        </ul>
        <h2>Statistics</h2>
        <ul>
          <li>23 NIS schools</li>
          <li>1023 students</li>
          <li>165 teachers</li>
          <li>1020 alumni</li>
        </ul>
        <p>
          We strongly believe that the future of our country depends on the
          quality of education we provide to our children today. We are
          committed to providing our students with the best possible
          opportunities to become confident, thoughtful, and responsible young
          adults, ready to take their place in the world.
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          <a
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
            href="mailto:info@fmalm.nis.edu.kz"
          >
            Email
          </a>
          <a
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
            href="tel:87273310104"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
          <a
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
            href="https://go.2gis.com/dvoxj"
            target="_blank"
            rel="noopener noreferrer"
          >
            Location
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
