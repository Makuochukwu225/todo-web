import Body from "@/components/body";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex lg:gap-14 flex-col items-center  bg-[#EAEAEA] h-[100vh] min-h-full max-h-full text-black">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}
