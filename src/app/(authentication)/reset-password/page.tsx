import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Page() {
  return (
    <div className="lg:min-h-[75vh]">
      <div className="flex items-center justify-center mt-[25vh]">
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Reset Password</CardTitle>
            <CardDescription>
              Enter your email below to recover your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Reset Password
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              <Link href="/" className="underline">
                Return to Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
