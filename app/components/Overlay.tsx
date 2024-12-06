export default function Overlay({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed top-[65px] right-0 bottom-0 left-0 w-full h-full z-50 bg-black bg-opacity-50 backdrop-blur-[4px]">
      {children}
    </div>
  );
}
