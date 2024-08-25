'use client'

import TextField from "@/components/Global/TextField";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPassword() {
    const [email, setEmail] = useState<string>("");
    return (
        <div className="w-4/5 md:w-5/12 flex flex-col">
            <div className="mb-4">
                <h1 className="font-bold text-xl">رمز عبور خود را فراموش کرده اید؟</h1>
                <p className="mt-3 text-slate-500 text-sm">
                لطفاً شماره تلفن همراه مرتبط با حساب کاربری خود را وارد کنید و ما برای بازنشانی گذرواژه برای شما پیامکی ارسال می کنیم.
                </p>
            </div>
            <div className="flex flex-col gap-3">
                <TextField
                    label="تلفن همراه"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder=" "
                />
            </div>
            <div className="mt-3">
                <button className="w-full bg-slate-800 text-white p-3 rounded-[0.5rem] hover:bg-slate-700 transition-all duration-200">
                    ارسال درخواست
                </button>
            </div>
            <div className="flex justify-center mt-3">
                <Link href="/auth/login" className="text-slate-600 text-xs mt-3">بازگشت به صفحه ورود</Link>
            </div>
        </div>
    );
}