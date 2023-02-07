import About from "@/components/About";

export default function WithAboutLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <About />
    </>
  );
}
