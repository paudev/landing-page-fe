"use client";

import { FC } from "react";
import Button from "@/components/Button";

const ButtonGroup: FC = () => {
  return (
    <div className="flex flex-row justify-center gap-2 py-4">
      <Button label="Create Fantasy" />
      <Button label="Show More" variant="secondary" />
    </div>
  );
};

export default ButtonGroup;
