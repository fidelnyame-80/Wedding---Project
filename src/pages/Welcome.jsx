import { useEffect, useState } from "react";
import Reveal from "../components/Reveal";
import heroVideo from "../assets/hero-video.mp4";

const EVENT_DATE = new Date("2026-06-20T08:00:00");
const HERO_TITLE = "Welcome to our wedding.";

function getCountdown() {
  const difference = Math.max(EVENT_DATE.getTime() - Date.now(), 0);
  const totalSeconds = Math.floor(difference / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}

export default function Welcome() {
  const [countdown, setCountdown] = useState(getCountdown);
  const [typedHeroTitle, setTypedHeroTitle] = useState("");
  const [heroVideoLoaded, setHeroVideoLoaded] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!heroVideoLoaded) return undefined;

    let index = 0;
    let interval;
    setTypedHeroTitle("");

    const timeout = window.setTimeout(() => {
      interval = window.setInterval(() => {
        index += 1;
        setTypedHeroTitle(HERO_TITLE.slice(0, index));

        if (index >= HERO_TITLE.length) {
          window.clearInterval(interval);
        }
      }, 70);
    }, 4000);

    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
    };
  }, [heroVideoLoaded]);

  return (
    <div>
      <section className="text-center px-6 pb-12 pt-0 sm:py-12">

        <Reveal
          className="relative left-1/2 h-[520px] w-screen max-w-none -translate-x-1/2 overflow-hidden text-left shadow-md sm:left-auto sm:h-[560px] sm:w-full sm:translate-x-0 sm:rounded-lg"
          y={18}
        >
          <video
            src={heroVideo}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            onCanPlay={() => setHeroVideoLoaded(true)}
            aria-label="Wedding hero video"
          >
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-gradient-to-t from-[#2b1725]/90 via-[#2b1725]/45 to-black/10" />

          <div className="absolute bottom-12 left-7 right-7 sm:bottom-16 sm:left-12">
            <h2
              className="max-w-xs text-5xl font-medium leading-[0.95] text-[#fff7e8] drop-shadow-[0_2px_10px_rgba(43,23,37,0.8)] sm:text-6xl"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              {typedHeroTitle}
              <span
                className="typewriter-cursor ml-1 inline-block h-[0.85em] w-px translate-y-1 bg-[#D4AF37] align-baseline"
                aria-hidden="true"
              />
            </h2>

            <div className="mt-6 h-px w-16 bg-[#D4AF37]" />

            <button
              className="mt-8 inline-flex items-center gap-7 border border-[#D4AF37] px-8 py-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#fff7e8] transition hover:bg-[#B784A7]/25"
              style={{
                fontFamily: "'Cinzel', serif",
              }}
            >
              Celebrate with us
              <span aria-hidden="true">-&gt;</span>
            </button>
          </div>
        </Reveal>

        <Reveal className="mt-10 space-y-4" delay={0.08}>

          <p className="text-3xl font-semibold text-[#8f5f7f]">
            Saturday, 20 June 2026
          </p>

          <p className="text-2xl leading-8 text-[#5f535a]">
            VILLA CASA, Anyaa-Awoshie Road, Accra, Ghana
          </p>

          <div className="mt-8">
            <h2 className="text-5xl font-semibold leading-tight text-[#4c3f46]">
              {countdown.days} days {countdown.hours} hrs{" "}
              {countdown.minutes} mins {countdown.seconds} secs
            </h2>
          </div>

          <button className="mt-6 rounded-full bg-[#8f5f7f] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#D4AF37]">
            Unlock Guest Details
          </button>

          <p className="max-w-2xl mx-auto mt-8 text-xl leading-9 text-[#5f535a]">
            We can't wait to celebrate our Traditional Marriage
            and Baby Christening day with you. Help us capture
            every moment with Joy.
          </p>

        </Reveal>

      </section>
    </div>
  );
}
