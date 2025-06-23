import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#f9f9fb] flex items-center justify-center px-4">
      <Card className="w-1/2 max-w-sm border border-gray-200 rounded-xl shadow-md bg-white ">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold text-gray-800 my-10">
            Log in to DevBunker
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-5">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <p className="text-sm text-center text-gray-500 mt-2">
              Dont have an account? <a href="/register" className="text-blue-600 hover:underline">Register</a>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
