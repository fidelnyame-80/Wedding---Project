import Navigation from "./Navigation";


export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-[#f8f6f2]">



      {/* Main Content */}
      <div className="relative z-20 max-w-5xl mx-auto bg-white min-h-screen shadow-sm">

        <div className="text-center pt-12 pb-6">
          <h1
            className="text-6xl text-[#6d5d4b]"
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