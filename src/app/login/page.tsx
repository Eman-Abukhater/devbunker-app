import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 px-4">
      <Card className="w-full max-w-md p-6 shadow-xl rounded-2xl bg-white border border-gray-200">
        <CardHeader className="mb-2">
          <CardTitle className="text-center text-3xl font-semibold text-gray-800">
            Login to DevBunker
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="h-11"
              />
            </div>
            <Button type="submit" className="w-full h-11 text-base font-medium">
              Sign In
            </Button>
            <p className="text-sm text-center text-gray-500">
              Don’t have an account?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                Register
              </a>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
