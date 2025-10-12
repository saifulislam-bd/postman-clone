import { currentUser } from "@/modules/authentication/actions";
import Header from "@/modules/layout/components/header";
import { initializeWorkspace } from "@/modules/workspace/actions";
import { ReactNode } from "react";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const workspace = await initializeWorkspace();
  const user = await currentUser();
  return (
    <>
      {/* @ts-ignore */}
      <Header user={user} />
      <main className="max-h-[calc(100vh-4rem)] h-[calc(100vh-4rem)] flex flex-1 overflow-hidden">
        <div className="flex h-full w-full">
          <div className="w-12 border-zinc-800 bg-zinc-900">
            tabbedleft panel
          </div>
          <div className="flex-1 bg-zinc-900">{children}</div>
        </div>
      </main>
    </>
  );
}
