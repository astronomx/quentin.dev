"use client";

import { useRouter } from "next/navigation";

import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="group flex w-fit flex-row items-center gap-1 text-sm underline underline-offset-4 transition-all duration-200 cursor-pointer lg:text-base"
    >
      <ArrowLongLeftIcon className="h-5 w-5 transition-transform duration-200 group-hover:-translate-x-1 lg:h-6 lg:w-6" />
      Back
    </button>
  );
}
