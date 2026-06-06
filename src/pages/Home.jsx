import Layout from "../components/Layout";

import Welcome from "./Welcome";
import Story from "./Story";
import Schedule from "./Schedule";
import ColorTheme from "./ColorTheme";
import QA from "./QA";
import Photo from "./Photo";
import Moments from "./Moments";

export default function Home() {
  return (
    <Layout>
      <section id="welcome">
        <Welcome />
      </section>

      <section id="story">
        <Story />
      </section>

      <section id="schedule">
        <Schedule />
      </section>

      <section id="theme">
        <ColorTheme />
      </section>

      <section id="qa">
        <QA />
      </section>

      <section id="photo">
        <Photo />
      </section>

      <section id="moments">
        <Moments />
      </section>
    </Layout>
  );
}
