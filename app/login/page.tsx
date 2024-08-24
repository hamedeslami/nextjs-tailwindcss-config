"use client";

import { useState } from "react";
import TextField from "@/components/Global/TextField";
import Link from "next/link";
import Image from 'next/image'

export default function Login() {
  const [email, setEmail] = useState<string>("");
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
      <div className="flex flex-col justify-center items-center md:col-span-2 lg:col-span-2">
        <div className="w-4/5 md:w-5/12 flex flex-col">
          <div className="mb-4">
            <h1 className="font-bold text-xl">وارد حساب کاربری خود شوید</h1>
            <p className="mt-3 text-slate-500">
              حساب کاربری ندارید؟{" "}
              <Link href="/register" className="text-slate-800">
                هم اکنون عضو شوید!
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <TextField
              label="ایمیل"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder=" "
            />

            <TextField
              label="گذرواژه"
              id="password"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder=" "
            />

            <p className="mt-[0.1rem] text-xs text-slate-500">رمز عبور را فراموش کرده اید؟</p>

          </div>
          <div className="mt-3">
            <button className="w-full bg-slate-800 text-white p-3 rounded-[0.5rem] hover:bg-slate-700 transition-all duration-200">ورود</button>
          </div>
        </div>
      </div>
      <div className="hidden md:flex flex-col justify-center items-center bg-slate-200">
      <Image
        src="/images/background/lock.webp"
        priority={false}
        width={400}
        height={478}
        alt="login page vector"
        />
      </div>
    </div>
  );
}
