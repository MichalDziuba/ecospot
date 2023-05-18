import { FeatureTile } from "../featureTile/featureTile";

export const FeatureSection = () => {
    return (
      <>
        <h2 className="text-2xl">Find in your nearest area:</h2>
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center ">
          <FeatureTile
            imageSrc="/images/electric-car.png"
            title="Charging stations"
            link="/"
          />
          <FeatureTile
            imageSrc="/images/light-bulb.png"
            title="Green initiatives"
            link="/"
          />
          <FeatureTile
            imageSrc="/images/recycle-symbol.png"
            title="Recycling points"
            link="/"
          />
          <FeatureTile
            imageSrc="/images/zero-waste.png"
            title="Zero-waste stores"
            link="/"
          />
        </div>
      </>
    );
};
