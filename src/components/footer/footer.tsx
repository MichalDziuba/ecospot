import { getYear } from "@/utils/getYear";
import { ContentWrapper } from "../contentWrapper/contentWrapper";

export const Footer = () => {
    const year = getYear();
  return (
    <ContentWrapper>
      <footer className=" w-11/12 grid place-items-center py-5 font-semibold">
        <p>
          &copy; {year} EcoFinder. All rights reserved.
        </p>
      </footer>
    </ContentWrapper>
  );
};
