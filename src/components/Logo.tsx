import Link from "next/link";

export default function Logo({
  link = false,
}: {
  link?: boolean;
}) {
  return (
    <Link
      className={`text-white text-5xl font-bold ${
        link ? "cursor-pointer" : ""
      }`}
      href="/"
    >
      {"K'UX"}
    </Link>
  );
}
