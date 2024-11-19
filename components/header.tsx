export default function Header(){
    return (
        <div className="bg-[#CBC5EA] h-[200px] flex flex-col w-full justify-center items-center">
        <div className="flex p-5 lg:p-0 flex-col w-full lg:w-fit gap-4">
          <div className="">
            <h3 className="text-[#313D5A] font-bold text-[32px] leading-[32px]">Today</h3>
          </div>
          
          <div className="lg:w-[597px] lg:h-[49px] gap-2 flex lg:flex-row flex-col justify-between rounded-lg">
            <div><input className="bg-[#BEADD4] p-4 h-full placeholder-black lg:w-[470px] w-full rounded-lg" type="text" placeholder="e.g Buy groceries" /></div>
            <div><button className="bg-[#73628A] text-white rounded-xl lg:h-full lg:w-[104px] w-full h-[46px]">ADD TASK</button></div>
          </div>
        </div>
      </div>
    );
};