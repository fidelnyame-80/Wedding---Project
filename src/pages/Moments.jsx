import Reveal from "../components/Reveal";

function getOptimizedImageUrl(url) {
  return `${url}?auto=format&fit=crop&w=720&q=75`;
}

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
    <section className="max-w-6xl mx-auto px-6 py-20">
      <Reveal>
        <h2 className="section-title mb-4 text-5xl">
          Moments
        </h2>

        <p className="text-center text-xl text-[#5f535a] mb-12">
          A collection of memories from our journey together.
        </p>
      </Reveal>

      <Reveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" delay={0.08}>
        {photos.map((photo, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-md bg-white border border-[#ead9e3]"
          >
            <img
              src={getOptimizedImageUrl(photo.image)}
              alt={photo.title}
              loading="lazy"
              decoding="async"
              className="w-full h-80 object-cover hover:scale-105 transition duration-500"
            />

            <div className="p-4">
              <h3 className="text-2xl font-semibold text-center text-[#4c3f46]">
                {photo.title}
              </h3>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
