export default function Photo() {
  return (
    <section
      id="photo"
      className="max-w-4xl mx-auto px-6 py-20"
    >
      <h2 className="text-5xl font-serif text-center mb-12 text-[#6d5d4b]">
        Photo
      </h2>

      <div className="bg-[#faf8f4] border border-[#e9e3d8] rounded-3xl p-10 text-center">

        <div className="space-y-3">

          <p className="text-gray-600">
            Guest Help
          </p>

          <p className="text-gray-600">
            About
          </p>

          <p className="text-gray-600">
            Browse Designs
          </p>

        </div>

        <div className="my-10">
          <h3 className="text-3xl font-semibold text-[#6d5d4b]">
            20th June 2026
          </h3>
        </div>

        <button
          className="px-8 py-3 bg-[#6d5d4b] text-white rounded-full hover:opacity-90 transition"
        >
          Unlock Guest Detail
        </button>

      </div>
    </section>
  );
}