export default function Moments() {
  const photos = [
    {
      title: "Pregnancy Journey",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552",
    },
    {
      title: "Baby Bump Shoot",
      image:
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf",
    },
    {
      title: "Couple Moments",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
    },
    {
      title: "Engagement",
      image:
        "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8",
    },
    {
      title: "Family",
      image:
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
    },
    {
      title: "Our Journey",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    },
  ];

  return (
    <section
      id="moments"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <h2 className="text-5xl font-serif text-center mb-4 text-[#6d5d4b]">
        Moments
      </h2>

      <p className="text-center text-gray-600 mb-12">
        A collection of memories from our journey together.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-md bg-white"
          >
            <img
              src={photo.image}
              alt={photo.title}
              className="w-full h-80 object-cover hover:scale-105 transition duration-500"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold text-center">
                {photo.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}