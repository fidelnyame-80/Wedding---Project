
export default function Welcome() {
  return (
    <div>
      <section className="text-center px-6 py-12">

        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552"
          alt="Couple"
          className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
        />

        <div className="mt-10 space-y-4">

          <p className="text-lg text-gray-700">
            Saturday, 20 June 2026
          </p>

          <p className="text-gray-600">
            VILLA CASA, Anyaa-Awoshie Road, Accra, Ghana
          </p>

          <div className="mt-8">
            <h2 className="text-3xl font-semibold">
              14 days 13 hrs 17 mins 49 secs
            </h2>
          </div>

          <button className="mt-6 px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Unlock Guest Details
          </button>

          <p className="max-w-2xl mx-auto mt-8 text-gray-600 leading-8">
            We can't wait to celebrate our Traditional Marriage
            and Baby Christening day with you. Help us capture
            every moment with Joy.
          </p>

        </div>

      </section>
    </div>
  );
}