import Link from "next/link";

export default function FAB() {
  return (
    <Link href={"/createTask"} className="fab">
      +
    </Link>
  );
}
