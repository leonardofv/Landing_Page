import { useCallback, useEffect, useState } from "react";

type UseClipBoardProps = {
  timeout?: number;
};

export function useClipBoard({ timeout = 2000 }: UseClipBoardProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = useCallback(async (text: string) => {
    if (!navigator.clipboard) {
      console.error("Clipboard não suportado!");
      return false;
    };

    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (error) {
      console.error(`Erro: ${error}`);
      setIsCopied(false);
      return false;
    }
  }, []);

  useEffect(() => {
    if (isCopied) {
      const timer = window.setTimeout(() => {
        setIsCopied(false);
      }, timeout);

      return () => window.clearTimeout(timer);
    }
  }, [isCopied, timeout]);

  return {
    isCopied,
    handleCopy,
  };
}
