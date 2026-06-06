import Navigation from "./Navigation";
import TitleSvgBackground from "./TitleSvgBackground";


export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-[#faf7f9]">

      {/* Main Content */}
      <div className="relative z-20 max-w-5xl mx-auto bg-white min-h-screen shadow-sm">

        <div className="relative overflow-hidden text-center pt-12 pb-6">
          <TitleSvgBackground />

          <h1
            className="relative z-10 text-6xl text-[#8f5f7f]"
            style={{
              fontFamily: "'Great Vibes', cursive",
            }}
          >
            Jeffrey & Portia
          </h1>
        </div>

        <Navigation />

        {children}  

      </div>
    </div>
  );
}
