'use client'

import { useState } from "react";
import TextField from "@/components/Global/TextField"
import Link from "next/link"


export default function Signup() {
    const [email, setEmail] = useState<string>("");
    return (
        <div className="w-4/5 md:w-5/12 flex flex-col">
            <div className="mb-4">
                <h1 className="font-bold text-xl">یک حساب کاربری جدید بسازید!</h1>
                <p className="mt-3 text-slate-500 text-sm">
                    از قبل حساب کاربری دارید؟{" "}
                    <Link href="/auth/login" className="text-slate-800">
                        وارد شوید.
                    </Link>
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
                <div>
                    <TextField
                        label="نام"
                        id="firstname"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder=" "
                    />
                </div>
                <div>
                    <TextField
                        label="نام خانوادگی"
                        id="lastname"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder=" "
                    />
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <TextField
                    label="ایمیل"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder=" "
                />

                <TextField
                    label="گذرواژه"
                    id="password"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder=" "
                />

                <TextField
                    label="تکرار گذرواژه"
                    id="re-password"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder=" "
                />

            </div>
            <div className="mt-3">
                <button className="w-full bg-slate-800 text-white p-3 rounded-[0.5rem] hover:bg-slate-700 transition-all duration-200">
                    عضویت
                </button>
            </div>
        </div>
    )
}