import Link from "next/link";

export default function Logo({
  title,
  link = false,
}: {
  title: string;
  link?: boolean;
}) {
  return (
    <Link
      className={`text-white text-5xl font-bold ${
        link ? "cursor-pointer" : ""
      }`}
      href="/"
    >
      {title}
    </Link>
  );
}
