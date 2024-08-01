import signupImage from "@/assets/signup-image.png";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "./SignUpForm";
import GoogleSignInButton from "../login/google/GoogleSignInButton";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded bg-card shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto scrollbar-hide p-6 md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold">Sign up to evans<span className="text-red-600">book</span></h1>
            <p className="text-muted-foreground">
              A place where  <span className="italic bg-red-600 text-white rounded-xl">everyone</span> can find a
              friend.
            </p>
          </div>
          <div className="space-y-3">
            <GoogleSignInButton />
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-muted" />
              <span>OR</span>
              <div className="h-px flex-1 bg-muted" />
            </div>
            <SignUpForm />
            <Link href="/login" className="block text-center text-orange-700 hover:underline font-bold">
              Already have an account? Log in
            </Link>
          </div>
        </div>
        <Image
          src={signupImage}
          alt="image"
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
}
