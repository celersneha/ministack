import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { InputBarProps } from "../types";

const InputBar: React.FC<InputBarProps> = ({
  value,
  onChange,
  onAdd,
  placeholder = "Add a todo...",
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onAdd();
    }
  };

  return (
    <div className="flex gap-2">
      <Input
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="flex-1"
      />
      <Button onClick={onAdd}>Add</Button>
    </div>
  );
};

export default InputBar;
