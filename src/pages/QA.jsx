
import { useState } from "react";
import Reveal from "../components/Reveal";

export default function QA() {
  const [open, setOpen] = useState(null);

  const questions = [
    {
      question: "Are children welcome?",
      answer:
        "As much as we adore your little ones, we won’t be including them in the ceremony or reception.",
    },
    {
      question: "Where should I park?",
      answer:
        "There’s plenty of free parking near the entrance to the arboretum.",
    },
    {
      question:
        "Are the ceremony and reception venues wheelchair accessible?",
      answer:
        "Yes, and we’ll have a golf buggy available for anyone who needs a hand getting around the grounds!",
    },
    {
      question: "What should I wear?",
      answer:
        "Please see our Schedule for the dress code.",
    },
    {
      question:
        "What sort of shoes should (or shouldn’t) I wear?",
      answer:
        "Ladies, a quick heads-up: please don’t wear stiletto heels. There are plenty of grassy and muddy spots to navigate, so opt for block heels or sandals instead. We’d hate for anyone to ruin their lovely shoes—or twist an ankle!",
    },
    {
      question:
        "Who should I contact if I have questions?",
      answer:
        "If you have any questions, please ring our lovely sisters:\n\nDELPHINA: 0545393447\n\nIRENE: 0248805608",
    },
    {
      question:
        "Is the wedding indoors or outdoors?",
      answer:
        "Our ceremony will be outdoors.",
    },
    {
      question:
        "Is it okay to take photos on our phones and cameras during the wedding?",
      answer:
        "Absolutely! We'd love you to snap some photos and share them with us. However, we kindly ask that you don’t interfere with the official photographer.",
    },
  ];

  return (
    <div>
      <section className="max-w-4xl mx-auto px-6 py-16">

        <h2 className="section-title mb-4 text-5xl">
          Q & A
        </h2>

        <p className="text-center text-xl text-[#5f535a] mb-12">
          If you’ve got questions, friends and family,
          have a look at our Q & A first!
        </p>

        <div className="space-y-4">

          {questions.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden border-b border-[#ead9e3]"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex justify-between items-center px-0 py-5 text-left bg-white hover:text-[#8f5f7f]"
              >
                <span className="text-2xl font-semibold text-[#4c3f46]">
                  {item.question}
                </span>

                <span className="text-2xl text-[#D4AF37]">
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {open === index && (
                <div className="pb-6 text-xl text-[#5f535a] whitespace-pre-line leading-9">
                  {item.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </section>
    </div>
  );
}
