import { Skeleton } from "@/components/ui/skeleton";

export const ProductsSkeleton = () => {
  return (
    <div>
      <Skeleton className="w-full h-10 rounded-xl" />

      <div className="mt-6 grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {/* fake product layout */}
        {Array.from({ length: 6 }, (item, index) => (
          <div key={index} className="flex flex-col gap-2">
            <Skeleton className="w-full h-32 rounded-xl" />
            <Skeleton className="w-full h-7 rounded-xl" />
            <Skeleton className="w-16 h-5 rounded-xl" />
            <Skeleton className="w-full h-9 rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );
};
