import { Loader2 } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Loader2 className="animate-spin text-indigo-400" size={40} />
    </div>
  );
}
