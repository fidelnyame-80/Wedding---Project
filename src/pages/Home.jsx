import { Suspense, lazy } from "react";
import Layout from "../components/Layout";

import Welcome from "./Welcome";

const Story = lazy(() => import("./Story"));
const Schedule = lazy(() => import("./Schedule"));
const ColorTheme = lazy(() => import("./ColorTheme"));
const QA = lazy(() => import("./QA"));
const Photo = lazy(() => import("./Photo"));
const Moments = lazy(() => import("./Moments"));

function SectionFallback() {
  return <div className="min-h-32" aria-hidden="true" />;
}

export default function Home() {
  return (
    <Layout>
      <section id="welcome">
        <Welcome />
      </section>

      <Suspense fallback={<SectionFallback />}>
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
      </Suspense>
    </Layout>
  );
}
