
export default function ColorTheme() {
  return (
    <div>
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">

        <h2 className="text-5xl font-serif mb-6 text-[#6d5d4b]">
          Color Theme
        </h2>

        <p className="text-lg text-gray-600 mb-12">
          Our colors for the day
        </p>

        <div className="flex justify-center gap-10 flex-wrap">

          <div className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full bg-[#D4AF37] shadow-md border"></div>

            <h3 className="mt-4 text-xl font-semibold">
              Gold
            </h3>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full bg-[#B784A7] shadow-md border"></div>

            <h3 className="mt-4 text-xl font-semibold">
              Mauve
            </h3>
          </div>

        </div>

        <div className="mt-16 bg-[#f8f6f2] rounded-2xl p-8 max-w-2xl mx-auto">
          <p className="text-gray-700 leading-8">
            We kindly invite our family and friends to join us in celebrating
            our special day dressed in shades of <strong>Gold</strong> and{" "}
            <strong>Mauve</strong>.
          </p>
        </div>

      </section>
    </div>
  );
}