import {Inter} from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local';
import Header from "@/app/components/modules/Header/Header";
import NavHoliday from "@/app/components/modules/NavHoliday/NavHoliday";
import banner from "../../public/some-chocolates-ai-generated-image.jpg";
import Image from "next/image";



const inter = Inter({subsets: ["latin"]});
const myFont = localFont({src: './DrukWideCyrBold.woff'})

export const metadata = {
    title: "Шоколад ручной работы | Мистер Рэт",
    description: "Generated by create next app",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        {/*<body>*/}
            {children}
        </body>
        </html>
    );
}
