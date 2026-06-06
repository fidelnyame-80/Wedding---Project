
import Reveal from "../components/Reveal";

export default function ColorTheme() {
  return (
    <div>
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">

        <Reveal>
          <h2 className="section-title mb-6 text-5xl">
            Color Theme
          </h2>

          <p className="text-xl text-[#5f535a] mb-12">
            Our colors for the day
          </p>
        </Reveal>

        <Reveal className="flex justify-center gap-10 flex-wrap" delay={0.08}>

          <div className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full bg-[#D4AF37] shadow-md border border-[#ead9e3]"></div>

            <h3 className="mt-4 text-2xl font-semibold text-[#4c3f46]">
              Gold
            </h3>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full bg-[#B784A7] shadow-md border border-[#ead9e3]"></div>

            <h3 className="mt-4 text-2xl font-semibold text-[#4c3f46]">
              Mauve
            </h3>
          </div>

        </Reveal>

        <Reveal className="mt-16 bg-[#fbf6f9] rounded-2xl p-8 max-w-2xl mx-auto border border-[#ead9e3]" delay={0.12}>
          <p className="text-xl text-[#5f535a] leading-9">
            We kindly invite our family and friends to join us in celebrating
            our special day dressed in shades of <strong>Gold</strong> and{" "}
            <strong>Mauve</strong>.
          </p>
        </Reveal>

      </section>
    </div>
  );
}
