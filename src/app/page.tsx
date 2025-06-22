import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl font-bold text-zinc-900">Welcome to DevBunker 🚀</h1>
      <Button variant="default">Click Me</Button>
    </main>
  );
}
