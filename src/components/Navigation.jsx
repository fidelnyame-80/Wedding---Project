import { useEffect, useState } from "react";

export default function Navigation() {
  const [active, setActive] = useState("welcome");

  const links = [
    { id: "welcome", name: "Welcome" },
    { id: "story", name: "Our Story" },
    { id: "schedule", name: "Schedule" },
    { id: "theme", name: "Color Theme" },
    { id: "qa", name: "Q & A" },
    { id: "photo", name: "Photo" },
    { id: "moments", name: "Moments" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) =>
        document.getElementById(link.id)
      );

      let current = "welcome";

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 150;

        if (window.scrollY >= top) {
          current = section.id;
        }
      });

      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <nav className="sticky top-0 bg-white z-50 hidden py-5 md:block">
      <div className="flex flex-wrap justify-center gap-8">

        {links.map((link) => (
          <button
            key={link.id}
            onClick={() =>
              scrollToSection(link.id)
            }
            className={`pb-1 transition-all ${
              active === link.id
                ? "border-b-2 border-[#D4AF37] text-[#8f5f7f]"
                : "border-b-2 border-transparent text-[#5c4a54] hover:text-[#8f5f7f]"
            }`}
          >
            {link.name}
          </button>
        ))}

      </div>
    </nav>
  );
}
