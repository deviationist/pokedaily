import { useState } from "react";
import { cn } from "@/components/ui/utils";

export default function DecorativeBackground() {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {imageLoaded ? "y" : "n"}
      <img 
        src="https://images.unsplash.com/photo-1764436404647-4409ab1d9217" 
        alt=""
        onLoad={() => setImageLoaded(true)}
        className={cn(
          "object-cover transition-opacity duration-700 ease-in-out",
          imageLoaded ? "opacity-[0.05]" : "opacity-0"
        )}
        aria-hidden="true"
      />
    </div>
  );
}