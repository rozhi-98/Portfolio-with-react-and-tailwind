import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';

const MySkills = () => {
  const isAboveLarge = useMediaQuery('(min-width: 1060px)');
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            I learned most of the skills below from this amazing bootcamp
            called: Bitprogram.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img alt="skills" className="z-10" src="assets/Slice.png" />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/Slice.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                HTML, CSS and JavaScript
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            HTML, CSS, and JavaScript are the building blocks of the modern web,
            and I have extensive experience working with all three. My HTML
            skills allow me to structure content effectively, while my CSS
            knowledge enables me to design beautiful and responsive layouts. I
            also have a deep understanding of JavaScript, which I use to add
            interactivity and dynamic functionality to my projects. Whether you
            need a website built from scratch or have an existing site that
            needs updates, I can help bring your vision to life with these
            essential web development skills.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Frontend Libraries
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            As a frontend developer, I'm skilled in using popular libraries such
            as React and Tailwind to create beautiful and functional user
            interfaces. With React, I can build complex web applications using
            reusable components that help streamline development and ensure
            consistency. Additionally, my proficiency in Tailwind allows me to
            quickly and efficiently create stylish, responsive designs that look
            great on any device. Whether you need a new feature added to your
            React app or a website built from scratch with Tailwind, I have the
            expertise and experience to deliver high-quality results that meet
            your needs.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Backend Development
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            I have extensive experience in backend development using Node.js and
            Express.js. With these powerful tools, I can build robust and
            scalable web applications that can handle large amounts of traffic
            and complex functionality. My proficiency in Node.js allows me to
            work with JavaScript on both the front and back ends of a project,
            which can help streamline development and reduce code complexity.
            Additionally, my knowledge of Express.js enables me to create APIs
            and integrate with databases, making it easier to manage and
            manipulate data. Whether you need to create a new API, integrate
            with an existing one, or build a custom backend solution from
            scratch, I have the skills and expertise to deliver high-quality
            results that meet your needs
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
