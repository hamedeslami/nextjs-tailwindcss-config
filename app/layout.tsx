import React from "react";
import localFont from 'next/font/local';
import type { Metadata } from "next";
import axios from "axios";
import { setupInterceptorsTo } from "@/config/configAxios";
import dynamic from "next/dynamic";
import "./globals.css";
import TopProgressBar from "@/components/Global/TopProgressBar";

setupInterceptorsTo(axios);

const ReduxProvider = dynamic(() => import("@/store/redux-provider"), {
    ssr: false
});

const IRANSansX = localFont({
    src: [
        {
            path: '../public/fonts/IRANSansX-Regular.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/IRANSansX-Bold.woff',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-IRANSansX',
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fa-IR" dir="rtl">
            <body>
                <TopProgressBar />
                <ReduxProvider>
                    <main className={IRANSansX.className}>{children}</main>
                </ReduxProvider>
            </body>
        </html>
    );
}
