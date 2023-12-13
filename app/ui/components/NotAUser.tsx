import Link from "next/link";

export default function NotAuser() {
  return (
    <div>
      <p className="mb-4">
        <Link
          className="inline underline decoration-solid font-bold decoration-red-200 hover:text-red-200 decoration-2"
          href="/profile/auth/login">
          Login
        </Link>{" "}
        To bid
      </p>
      <p>
        Not a user?{" "}
        <Link
          className="underline decoration-solid font-bold decoration-red-200 hover:text-red-200 decoration-2"
          href="/profile/auth/register">
          Register
        </Link>
      </p>{" "}
    </div>
  );
}
