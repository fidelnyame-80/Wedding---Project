
import Reveal from "../components/Reveal";

export default function Story() {
  return (
    <div>
      <section className="max-w-4xl mx-auto px-6 py-16">

        <Reveal>
          <h2 className="section-title mb-12 text-5xl">
            Our Story
          </h2>
        </Reveal>

        <Reveal className="space-y-8 text-xl leading-9 text-[#5f535a]" delay={0.08}>

          <h3 className="text-3xl font-semibold text-center text-[#4c3f46]">
            How I Met Portia
          </h3>

          <p>
            I first met Portia — well, I first saw her in a lecture hall.
            She walked in late to class, and I was instantly dazzled.
            Her beauty wasn’t just striking… it was disrespectful.
            Like, the kind of beauty that makes you forget what subject
            you’re studying.
          </p>

          <p>
            I couldn’t focus. I couldn’t even pretend to focus.
            So naturally, I turned to the class forum and typed the only
            thing my love-struck brain could manage:
          </p>

          <blockquote className="border-l-4 border-[#D4AF37] pl-5 italic text-[#8f5f7f]">
            "I’m in love with a beautiful fair lady, but I don’t know her name."
          </blockquote>

          <p>
            And then, like a scene straight out of a movie, someone replied
            with her name: Portia.
          </p>

          <p>
            But here’s the twist: I didn’t know that was her name.
            So I scrolled past it, thinking the search for this mystery
            woman had just begun.
          </p>

          <p>
            Turns out, fate had other plans. During our end-of-first-year
            hangout at Laboma Beach, as I sat lonely at the entrance,
            there she was, late to another gathering.
          </p>

          <p>
            I quickly offered her a seat just beside me.
            The rest, they say, is history.
          </p>

          <p>
            And now, here we are. Still late to things, sometimes.
            Still dazzling. But this time, walking in together.
          </p>

        </Reveal>

        <Reveal className="mt-20" delay={0.12}>

          <h2 className="section-title mb-12 text-5xl">
            Q & A
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="font-semibold text-2xl text-[#4c3f46]">
                How did you two first meet?
              </h3>

              <p className="mt-2 text-xl text-[#5f535a]">
                Read Our Story!
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-2xl text-[#4c3f46]">
                Who made the first move – and how?
              </h3>

              <p className="mt-2 text-xl text-[#5f535a]">
                He made the first move by offering me a seat beside him at our
                end of first year party at Laboma Beach.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-2xl text-[#4c3f46]">
                Who's taking out the bin?
              </h3>

              <p className="mt-2 text-xl text-[#5f535a]">
                Whoever's nearest the bin :)
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-2xl text-[#4c3f46]">
                What was your most memorable date?
              </h3>

              <p className="mt-2 text-xl text-[#5f535a]">
                One of our first dates was spent at Zen Gardens.
                Our favourite band ADAHA was performing.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-2xl text-[#4c3f46]">
                What’s your favourite thing to do together?
              </h3>

              <p className="mt-2 text-xl text-[#5f535a]">
                We love movies and going out for ice-cream together.
              </p>
            </div>

          </div>

        </Reveal>

      </section>
    </div>
  );
}
