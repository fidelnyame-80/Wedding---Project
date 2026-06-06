import Reveal from "../components/Reveal";

export default function Schedule() {
  return (
    <div>
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">

        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            Saturday, 20 June 2026
          </p>

          <h2 className="section-title text-5xl">
            Schedule
          </h2>

        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-2xl" delay={0.08}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9a7a36]">
            8:00 AM to 10:00 PM
          </p>

          <h3 className="mt-8 text-4xl font-semibold leading-tight text-[#4c3f46]">
            Marriage and Baby Christening
          </h3>

          <p className="mt-8 text-xl leading-9 text-[#5f535a]">
            Surrounded by our dear families and friends, we are excited to
            begin a new chapter as husband and wife, and to welcome our
            beautiful baby girl.
          </p>

          <p className="mt-6 text-xl leading-9 text-[#5f535a]">
            Join us as we say "I do" and create memories that will last a
            lifetime.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-14 max-w-xl border-y border-[#ead9e3] py-8" delay={0.12}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Venue
          </p>

          <h4 className="mt-4 text-3xl font-semibold text-[#8f5f7f]">
            Classy and Elegant
          </h4>

          <p className="mt-3 text-lg leading-8 text-[#5f535a]">
            JPC2+64W, Anyaa-Awoshie Rd, Accra, Ghana
          </p>
        </Reveal>

        <Reveal className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-semibold uppercase tracking-[0.22em]" delay={0.16}>
          <a
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Marriage+and+Baby+Christening&dates=20260620T080000/20260620T220000&location=VILLA+CASA,+Anyaa-Awoshie+Road,+Accra,+Ghana"
            target="_blank"
            rel="noreferrer"
            className="text-[#8f5f7f] underline decoration-[#D4AF37] underline-offset-8 transition hover:text-[#D4AF37]"
          >
            Add to Calendar
          </a>

          <a
            href="https://www.airbnb.com/s/Accra--Ghana/homes"
            target="_blank"
            rel="noreferrer"
            className="text-[#8f5f7f] underline decoration-[#D4AF37] underline-offset-8 transition hover:text-[#D4AF37]"
          >
            Where to Stay
          </a>

          <a
            href="https://maps.google.com/?q=VILLA+CASA+Anyaa-Awoshie+Road+Accra+Ghana"
            target="_blank"
            rel="noreferrer"
            className="text-[#8f5f7f] underline decoration-[#D4AF37] underline-offset-8 transition hover:text-[#D4AF37]"
          >
            Directions
          </a>
        </Reveal>

      </section>
    </div>
  );
}
