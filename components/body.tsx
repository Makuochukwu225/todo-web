import Image from "next/image";

export default function Body(){
    return (
        <div className=" w-full flex lg:flex-row flex-col lg:p-2 p-5 items-center justify-center lg:items-start gap-4 lg:gap-20" >
        <div className="flex lg:flex-col text-white text-[14px] gap-5">
          <div className="lg:w-[122px] w-[107px] flex items-center h-[30px]"><span className="bg-[#313D5A] p-2 w-[80%] rounded-l-xl">Remaining</span><span className="rounded-r-xl bg-[#BEADD4] w-[20%] p-2">1</span></div>
          <div className="lg:w-[122px] w-[107px] items-center flex h-[30px]"><span className="bg-[#313D5A] p-2 w-[80%] rounded-l-xl" >Completed</span><span className="bg-[#BEADD4] rounded-r-xl w-[20%] p-2">1</span></div>
          <div className="lg:w-[122px] w-[107px]  flex items-center h-[30px]"><span className="bg-[#313D5A] p-2 w-[80%] rounded-l-xl">Total</span><span className="rounded-r-xl w-[20%] bg-[#BEADD4] p-2">1</span></div>
        </div>
        <div className="flex flex-col lg:w-fit w-full lg:px-2 px-5 gap-4">
          <div className="flex bg-[#CBC5EA] lg:w-[360px] rounded-2xl py-[32px] pr-[48px] pl-[32px] items-center justify-between gap-4">
            <div className="flex gap-2 items-center">
              <input type="checkbox" id="doDishes" />
              <label htmlFor="doDishes">Do the dishes</label>
            </div>
             <Image src={'/create.png'} alt="edit" height={50} width={50}/> 
          </div>
          <div className="flex bg-[#CBC5EA] justify-between lg:w-[360px] rounded-2xl py-[32px] pr-[48px] pl-[32px] items-center gap-4">
            <div className="flex gap-2 items-center">
              <input type="checkbox" id="doDishes" />
              <label htmlFor="doDishes">Do the dishes</label>
            </div>
             <Image src={'/create.png'} alt="edit" height={50} width={50}/> 
          </div>
          <div className="flex justify-between bg-[#CBC5EA] lg:w-[360px] rounded-2xl py-[32px] pr-[48px] pl-[32px] items-center gap-4">
            <div className="flex gap-2 items-center">
              <input type="checkbox" id="doDishes" />
              <label htmlFor="doDishes">Do the dishes</label>
            </div>
             <Image src={'/create.png'} alt="edit" height={50} width={50}/> 
          </div>
        </div>
      </div>
    );
};