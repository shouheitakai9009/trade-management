export const Footer = () => {
  return (
    <footer className="bg-[#1E222D] border-t border-[#2A2E39]">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-[#787B86] text-sm">
            &copy; {new Date().getFullYear()} Trade Manager. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
