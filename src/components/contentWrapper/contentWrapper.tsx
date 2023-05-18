export const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex flex-col items-center shadow-shadowSection ">
      <div className="w-11/12">{children} </div>
    </div>
  );
};
