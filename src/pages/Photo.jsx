import Reveal from "../components/Reveal";

export default function Photo() {
  return (
    <section
      id="photo"
      className="max-w-4xl mx-auto px-6 py-20"
    >
      <Reveal>
        <h2 className="section-title mb-12 text-5xl">
          Photo
        </h2>
      </Reveal>

      <Reveal className="bg-[#fbf6f9] border border-[#ead9e3] rounded-3xl p-10 text-center" delay={0.08}>

        <div className="space-y-3">

          <p className="text-xl text-[#5f535a]">
            Guest Help
          </p>

          <p className="text-xl text-[#5f535a]">
            About
          </p>

          <p className="text-xl text-[#5f535a]">
            Browse Designs
          </p>

        </div>

        <div className="my-10">
          <h3 className="text-4xl font-semibold text-[#8f5f7f]">
            20th June 2026
          </h3>
        </div>

        <button
          className="rounded-full bg-[#8f5f7f] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#D4AF37]"
        >
          Unlock Guest Detail
        </button>

      </Reveal>
    </section>
  );
}
