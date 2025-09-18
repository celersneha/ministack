import { useState, useEffect } from "react";
import { toast } from "sonner";

function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      toast.error("Failed to save to local storage");
    }
  }, [key, value]);

  return [value, setValue] as const;
}

export default useLocalStorage;
