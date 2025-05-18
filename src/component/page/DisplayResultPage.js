'use client';
import MobileFrame from "@/component/layout/MobileFrame";
import Image from "next/image";
import circle1Img from "@/../public/0.start/blur-circle-1.png";
import croissantImg from "@/../public/2.displayResult/display-croissant.png";

export default function DisplayResultPage({nextStep}) {

  return (
    <>
      <MobileFrame>
        <div className="flex flex-col items-center ">
          <Image className="absolute top-0 -translate-y-1/2"src={circle1Img} alt='circle1'></Image>

          <Image className="w-[72px] h-[42px]" src={croissantImg} alt='croissant'></Image>

          <div className="text-[#B65A0F] font-bold text-[24px] mb-[80px]">
            顯示我的失控可頌
          </div>

          <div 
            className={`bg-[#B65A0F] w-[138px] rounded-full text-white py-[16px] text-[18px] flex justify-center 
              items-center font-semibold shadow-[0px_4px_0px_1px_#8D4509] cursor-pointer hover:translate-y-[2px] transition`}
            onClick ={nextStep}
          >查看結果</div>
          <Image className="absolute bottom-0 translate-y-1/2 pointer-events-none"src={circle1Img} alt='circle1'></Image>
        </div>

      </MobileFrame>
    
    </>

  );
}

