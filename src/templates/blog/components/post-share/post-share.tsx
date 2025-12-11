"use client";
import { Button } from "@/components/ui/button";
import { useShare } from "@/hooks";

type PostShareProps = {
  url: string;
  title: string;
  description: string;
};

export function PostShare({ url, title, description }: PostShareProps) {
  const { shareButtons } = useShare({
    url,
    title,
    text: description,
  });

  return (
    <aside className="space-y-6">
      <div className="bg-gray-700 rounded-lg">
        <h2 className="hidden md:block font-gray-100 mb-4 text-heading-xs">
          Compartilhar
        </h2>

        <div className="flex justify-between md:flex-col gap-2">
          {shareButtons.map((provider) => (
            <Button
              key={provider.provider}
              variant="outline"
              className="w-40 md:w-full justify-center md:justify-start gap-2"
              onClick={() => provider.action()}
            >
              {provider.icon}
              <span className="hidden md:block">{provider.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </aside>
  );
};
