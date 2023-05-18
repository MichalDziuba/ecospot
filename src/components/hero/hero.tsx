import { ContentWrapper } from "../contentWrapper/contentWrapper";
import { FeatureSection } from "../featureSection/featureSection";
import { FeatureTile } from "../featureTile/featureTile";
import { SlogansCloud } from "../slogansCloud/slogansCloud";
import ElectricCarIcon from "/icons/electricCar.svg";
const heroText = `Do you want to live greener and help the environment? Check out EcoSpot, the app that helps you find eco-friendly places and opportunities near you. With EcoSpot, you can:
- Search for recycling points and drop off your waste responsibly
- Explore a map of green spots: zero waste shops, recycling points, electric car charging stations and more
- Learn about environmental news and tips to reduce your carbon footprint
- Join a community of eco-conscious people who share your values`;

export const Hero = () => {

  return (
    <ContentWrapper>
      <section className=" w-full flex flex-col h-max md:h-[80vh] justify-evenly items-center ">
        <div className="h-full w-full text-2xl flex flex-col gap-y-3">
          <h2 className="text-4xl font-semibold">
            Do you want to live greener and help the environment?{" "}
          </h2>
          <div className="text-white">
            <p>
              Check out <span className="font-semibold">EcoSpot</span>, the app
              that helps you find eco-friendly places and opportunities near
              you.
            </p>
            <p>With EcoSpot, you can:</p>
            <ul>
              <li>
                <p>
                  - Search for recycling points and drop off your waste
                  responsibly...
                </p>
              </li>
              <li>
                <p>
                  - Explore a map of green spots: zero waste shops, recycling
                  points,electric car charging stations and more...
                </p>
              </li>
              <li>
                <p>
                  - Learn about environmental news and tips to reduce your
                  carbon footprint...
                </p>
              </li>
              <li>
                <p>
                  - Join a community of eco-conscious people who share your
                  values...
                </p>
              </li>
            </ul>
          </div>
        </div>
     <FeatureSection/>
      </section>
    </ContentWrapper>
  );
};
