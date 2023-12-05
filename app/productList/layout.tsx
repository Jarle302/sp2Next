import React from "react";
import Link from "next/link";
const LayoutSortBy = ({ children }: { children: React.ReactNode }) => {
  const words = [
    "id",
    "title",
    "description",
    "tags",
    "media",
    "created",
    "updated",
    "endsAt",
    "_count",
    "bids",
    "seller",
  ];

  return (
    <main className="flex min-h-screen text-gray-600 flex-col items-center justify-between p-24">
      <h1 className="text-4xl">Listings</h1>
      <div className="flex gap-2 my-2">
        {words.map((word) => (
          <Link
            className="bg-gray-600 text-orange-100 p-2 rounded-lg"
            key={word}
            href={`/productList/${word}`}>
            {word}
          </Link>
        ))}
      </div>
      {children}
    </main>
  );
};

export default LayoutSortBy;
