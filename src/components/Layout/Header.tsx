import Logo from "@/components/Logo";

export default function Header({ cms }: { cms: any }) {
  return (
    <header className="hidden lg:block absolute top-0 left-0 w-full px-container py-[3rem] z-10">
      <Logo link={true} title={cms.title} />
    </header>
  );
}
