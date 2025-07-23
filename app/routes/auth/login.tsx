import { LoginForm } from "./_component/LoginForm";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                 <img
            src="/assets/img/icon.png"
            alt="Image"
            className="h-full w-full object-contain dark:brightness-[0.2] dark:grayscale"
          />
            </div>
        
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <div className="absolute inset-0 h-full w-full">
          <img
            src="/assets/img/illustration-login.png"
            alt="Image"
            className="h-full w-full object-contain dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </div>
  );
}
