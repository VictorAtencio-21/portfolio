import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">
        Looks like you are lost. The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="rounded-full border border-solid border-foreground transition-colors flex items-center justify-center bg-white text-foreground gap-2 hover:bg-[#e2e2e2] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto cursor-pointer"
      >
        Return Home
      </Link>
    </div>
  );
}
