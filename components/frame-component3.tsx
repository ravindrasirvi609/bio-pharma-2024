import type { NextPage } from "next";
import FrameComponent4 from "./frame-component4";
import Navigation from "./navbar";
import { Router } from "react-router-dom";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[1160px] relative max-w-full text-left text-sm text-crimson-100 font-text-small md:h-auto md:min-h-[1160px] ${className}`}
    >
      <header className="absolute top-0 left-0 backdrop-blur-lg bg-gray-500 w-full flex items-center justify-between py-1 px-40 box-border gap-5 z-10 text-left text-xl text-black font-semibold md:pl-10 md:pr-10 md:flex-wrap md:pl-20 md:pr-20">
        <div className="flex items-center gap-1.5">
          <img
            className="h-8 w-6 object-contain"
            loading="lazy"
            alt="Logo"
            src="/group-1209@2x.png"
          />
          <h1 className="m-0 tracking-tighter font-semibold">NODE</h1>
        </div>
        <div className="flex items-center justify-end gap-12 md:w-60 md:gap-6">
          <Navigation
            navItems={[
              { name: "Home", route: "/" },
              { name: "Speaker", route: "/speaker" },
              { name: "Pricing", route: "/pricing" },
              { name: "Sponsor", route: "/sponsor" },
            ]}
          />
          <button className="cursor-pointer border-none py-2 px-12 bg-crimson-100 hover:bg-crimson-200 text-white font-semibold text-xl">
            CONTACT
          </button>
        </div>
      </header>
      <div className="absolute top-0 right-0 left-auto w-full flex items-end justify-center py-36 pr-5 pl-10 box-border min-h-[1010px]">
        <img
          className="h-full w-full absolute inset-0 object-cover"
          alt="Hero Image"
          src="/heroImage.jpg"
        />
      </div>
      <div className="absolute top-72 left-40 w-[667px] flex flex-col items-start justify-start max-w-full text-5xl text-black font-semibold">
        <div className="flex flex-col items-start justify-start gap-11">
          <h1 className="m-0 leading-tight text-white font-black text-4xl md:text-3xl md:leading-tight sm:text-2xl sm:leading-tight">
            WORLD BIGGEST CONFERENCE FOR DIGITAL TECHNOLOGYS
          </h1>
          <div className="text-lg tracking-tight leading-relaxed font-text-small text-white">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident
          </div>
          <div className="flex items-start justify-start py-0 pr-5 pl-0 text-3xl text-white">
            <div className="bg-crimson-100 py-2 px-6 rounded-lg hover:bg-crimson-200 cursor-pointer text-white">
              <div className="tracking-wide font-semibold">REGISTER NOW</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
