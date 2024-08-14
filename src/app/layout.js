import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local';
import Header from "@/app/components/modules/Header/Header";


const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({ src: './DrukWideCyrBold.woff' })

export const metadata = {
  title: "Шоколад ручной работы | Мистер Рэт",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
      {/*<body>*/}
      <div className='container'>
          <Header/>
          {children}
      </div>
      </body>
    </html>
  );
}
