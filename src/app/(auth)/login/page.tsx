import loginImage from "@/assets/login-image.png";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GoogleSignInButton from "./google/GoogleSignInButton";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto scrollbar-hide p-10 md:w-1/2">
          <div className="space-y-1 text-center">

            <h1 className="text-center text-3xl font-bold">Login to evans<span className="text-red-600">book</span></h1>
            <p className="">
                To  <span className="italic bg-red-600 text-white rounded-xl px-1">chat</span> with
                your friends.
              </p>
          </div>
          <div className="space-y-5">
            <GoogleSignInButton />
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-muted" />
              <span>OR</span>
              <div className="h-px flex-1 bg-muted" />
            </div>
            <LoginForm />
            <Link href="/signup" className="block text-center text-orange-700 hover:underline font-bold">
              Don&apos;t have an account? Sign up
            </Link>
          </div>
        </div>
        <Image
          src={loginImage}
          alt="image"
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
}
