import {Inter} from "next/font/google";
import "./admin-global.css";
import * as React from "react";
import Header from "@/app/admin/components/modules/Header/Header";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Admin page",
    description: "Generated by create next app",
};

export default function AdminLayout({children}) {

    return (
        <html lang="en">
        <body className={inter.className}>
        <Header/>
        {children}
        </body>
        </html>
    );
}
