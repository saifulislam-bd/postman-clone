"use client";

import { Button } from "@/components/ui/button";
import { Hint } from "@/components/ui/hint";
import { Loader, Plus, User } from "lucide-react";
import { useEffect, useState } from "react";

import CreateWorkspace from "./create-workspace";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const WorkSpace = () => {
  return (
    <>
      <Hint label="Change Workspace">
        <Button className="flex flex-row items-center space-x-1 border border-indigo-400 bg-indigo-400/10 hover:bg-indigo-400/20 text-indigo-400 hover:text-indigo-300">
          <User className="size-4 text-indigo-400" />
          <span className="text-sm text-indigo-400">Personal Workspace</span>
        </Button>
      </Hint>
    </>
  );
};

export default WorkSpace;
