import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <nav className="flex flex-row justify-between items-center min-h-14 w-full px-4 shadow-sm sticky top-0 backdrop-blur-md bg-white/30">
      <div>
        <h1 className="font-extrabold text-md">آرمـــــــــان ســـــــامــــــانــــــه</h1>
        <p className="font-extralight text-xs text-gray-500">سیستم مدیریت محتوا و فروشگاهی</p>
      </div>
      <div className="flex flex-row justify-end gap-x-2">
        <Link href="" className="flex flex-row items-center justify-around gap-x-1 rounded-lg h-10 bg-gray-50 px-6 py-2 hover:bg-gray-100 duration-300">
          <Image
            src="/images/icons/user.svg"
            priority={false}
            width={22}
            height={22}
            alt="notification"
            />
          <span className="font-bold text-sm">حامد اسلامی</span>
        </Link>
        <Link href="" className="rounded-lg h-10 bg-blue-100 p-2 hover:scale-90 duration-300">
        <Image
          src="/images/icons/notification.svg"
          priority={false}
          width={24}
          height={24}
          alt="notification"
          />
        </Link>
        <Link href="" className="rounded-lg h-10 bg-red-100 p-2 hover:scale-90 duration-300">
        <Image
          src="/images/icons/logout.svg"
          priority={false}
          width={24}
          height={24}
          alt="logout"
          />
        </Link>
      </div>
    </nav>
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
            <p className="text-blue-600/50">hellooo</p>
      </div>
    </main>
    </>
  );
}
