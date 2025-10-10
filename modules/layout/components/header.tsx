"use client";

import { Unplug } from "lucide-react";
import UserButton from "@/modules/authentication/components/user-button";
import { UserProps } from "../types";
import SearchBar from "./searchbar";
import InviteMember from "./invite-member";
import WorkSpace from "./workspace";

interface Props {
  user: UserProps;
}

export default function Header({ user }: Props) {
  return (
    <header className="grid grid-cols-5 grid-rows-1 gap-2 overflow-x-auto overflow-hidden p-2 border">
      <div className="col-span-2 flex items-center justify-between space-x-2 hover:cursor-pointer hover:opacity-80 ml-4">
        <Unplug size={28} className="text-indigo-400" />
      </div>
      <div className="col-span-1 flex items-center justify-between space-x-2">
        <div
          className="border-animation flex items-center justify-center relative p-[1px] rounded flex-1 self-stretch overflow-hidden"
          aria-hidden="true"
        >
          <SearchBar />
        </div>
      </div>
      <div className="col-span-2 flex items-center justify-end space-x-2 hover:cursor-pointer hover:opacity-80">
        <InviteMember />
        <WorkSpace />
        <UserButton user={user} size="sm" />
      </div>
    </header>
  );
}
