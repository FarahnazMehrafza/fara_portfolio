import Skills from "../components/about/Skills.js";
import Layout from "../components/Layout.js";

export default function About() {
  return (
    <Layout metaTitle="About Me - Phyu Phyu Toe">
      <>
        <section className="w-11/12 mx-auto mt-6 mb-12 sm:w-5/6 lg:w-2/3 xl:w-[54rem]">
          <p className="text-center text-4xl font-semibold capitalize">
            <span className="font-poppins font-medium text-lg uppercase text-green dark:text-mustard">
              about me
            </span>
            <br />
            here&#39;s my story
          </p>
          <div className="mt-6 leading-7">
            <p className="mb-6">
              Hi, I&#39;m *Farahnaz Mehrafza*. I&#39;m a FullStack developer. 
              I enjoy seeking out creative solutions to complex problems.
              Fast forward to today, I developed and implemented high-preformance
              web applications using cutting-edge technologies.  am passionate
               about technology, innovation and big challenging tasks on my to do list.
            </p>
            <p className="mb-6">
              I love programming because it is so practical, and I can solve
              real-world challenges with it. For me, programming is a tool to
              express myself in a creative way. Plus, there is so much to
              explore that always keeps me excited!
            </p>
            <p className="mb-6">
              In my free time, I get inspiration from other people&#39;s work
              and try out new technologies to build side projects. 
            </p>
            <p className="mb-6">
              Feel free to reach out and say hello at:{" "}
              <a
                href="mailto:farahmehr1@gmail.com"
                rel="noreferrer"
                target="_blank"
                className="text-green underline font-medium dark:text-mustard"
              >
                farahmehr1@gmail.com
              </a>
            </p>
          </div>
          <Skills />
        </section>
      </>
    </Layout>
  );
}
