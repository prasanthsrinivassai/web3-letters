import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-[#0a0a1a] flex items-center justify-center">
      <SignIn />
    </main>
  );
}
