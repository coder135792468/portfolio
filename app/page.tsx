"use client";

import { Header } from "@/components/index";
import { About, Landing, Skills, ProjectContainer } from "@/features/index";

export default function Home() {
  return (
    <html>
      <head>
        <title>Prashant | Front-End Developer</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
      </head>
      <body>
        <Header />
        <section>
          <Landing />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <About />
          <ProjectContainer />
        </section>
      </body>
    </html>
  );
}
