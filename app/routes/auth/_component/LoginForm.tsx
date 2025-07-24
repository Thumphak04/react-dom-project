import { useState } from "react"
import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [error, setError] = useState("")

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const userId = (form.querySelector("#user_id") as HTMLInputElement).value
    const password = (form.querySelector("#password") as HTMLInputElement).value

    if (userId === "Admin" && password === "Admin") {
      // Simulasi redirect ke dashboard
      window.location.href = "/"
    } else {
      setError("Username atau Password salah")
    }
  }

  return (
    <form onSubmit={handleLogin} className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <img
          src="/assets/img/logo-png.png"
          alt="Logo"
          className="h-full w-full object-contain dark:brightness-[0.2] dark:grayscale"
        />
        <h1 className="text-2xl font-bold">Login to your account</h1>
      </div>

      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="user_id">USER ID</Label>
          <Input id="user_id" type="text" placeholder="USER ID" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" required placeholder="PASSWORD" />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
    </form>
  )
}
