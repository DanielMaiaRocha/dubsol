import Check from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";

const featuresData = [
  {
    title: "Manage your workflow!",
    popular: false,
    inverse: false,
    price: "0",
    buttonText: "Get a quotation!",
    features: [
      "Manage your project workflow wherever you are.",
      "See your project scheadules.",
      "Watch your production progress in real time.",
    ],
  },
  {
    title: "Record your projects remotely",
    popular: true,
    inverse: true,
    buttonText: "Get a quotation!",
    price: "0",
    features: [
      "Get our latest generation recorder.",
      "Dont lose your audio quality.",
      "Audio Sync.",
      "Manage your timeline in real time.",
    ],
  },
  {
    title: "Other tools included:",
    popular: false,
    inverse: false,
    price: "0",
    buttonText: "Get a quotation!",
    features: [
      <>
        Hire your cast on{" "}
        <a
          href="https://react-site-alca.vercel.app"
          target="_blank"
          className="section-dubber"
        >
          Dubber
        </a>
      </>,
      "AI voice-over dubbing.",
      "Complete support with your project.",
      "Worldwide acess.",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="Features" className="py-24 bg-white">
      <div className="container">
        <div className="section-title-word-config">
          <h2 className="section-title ">Features</h2>
          <p className="section-desc mt-5">
            See our completely free features to improve at the max your projects
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-center gap-6 items-center mt-10">
          {featuresData.map(
            (
              { title, features, buttonText, price, inverse, popular },
              index
            ) => (
              <div
                key={index}
                className={twMerge(
                  "card",
                  inverse === true && "border-gray-400 bg-gray-400 text-white"
                )}
              >
                <h3
                  className={twMerge(
                    "text-lg font-bold text-black/50",
                    inverse === true && "text-white"
                  )}
                >
                  {title}
                </h3>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-2xl font-bold tracking-tighter leading-none">
                    ${price}
                  </span>
                  <span
                    className={twMerge(
                      "tracking-tight font-bold text-black/50",
                      inverse === true && "text-white"
                    )}
                  >
                    /month
                  </span>
                </div>
                <button
                  className={twMerge(
                    "btn btn-primary w-full mt-[30px]",
                    inverse === true && ""
                  )}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-sm flex items-center gap-4"
                    >
                      <Check className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
