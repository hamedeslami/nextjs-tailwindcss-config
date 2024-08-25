"use client";

import { useState } from "react";
import TextField from "@/components/Global/TextField";
import Link from "next/link";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ILoginForm } from "@/types/login";

export default function Login() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      mobile: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    console.log(data)
  }

  return (
    <div className="w-4/5 md:w-5/12 flex flex-col">
      <div className="mb-4">
        <h1 className="font-bold text-xl">وارد حساب کاربری خود شوید.</h1>
        <p className="mt-3 text-slate-500 text-sm">
          حساب کاربری ندارید؟{" "}
          <Link href="/auth/signup" className="text-slate-800">
            هم اکنون عضو شوید!
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <Controller
            name="mobile"
            control={control}
            rules={{
              required: "شماره همراه خود را وارد نمایید",
              maxLength: {
                value: 11,
                message: "شماره موبایل نباید بیشتر از ۱۱ کاراکتر باشد.",
              },
              pattern: {
                value:
                  /(0|\+98)?([ ]|-|[()]){0,2}9[0-9]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi,
                message: "شماره همراه وارد شده صحیح نیست",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextField
                label="تلفن همراه"
                id="mobile"
                value={value}
                onChange={onChange}
                placeholder=" "
                error={errors?.mobile?.message}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            rules={{
              required: "گذرواژه خود را وارد نمایید",
            }}
            render={({ field: { onChange, value } }) => (
              <TextField
                label="گذرواژه"
                id="password"
                value={value}
                onChange={onChange}
                placeholder=" "
                error={errors?.password?.message}
              />
            )}
          />

          <Link href="/auth/forgot-password" className="mt-[0.1rem] text-xs text-slate-500">
            رمز عبور را فراموش کرده اید؟
          </Link>
        </div>
        <div className="mt-3">
          <button type="submit" className="w-full bg-slate-800 text-white p-3 rounded-[0.5rem] hover:bg-slate-700 transition-all duration-200">
            ورود
          </button>
        </div>
      </form>
    </div>
  );
}
