'use client';

import MobileFrame from "@/component/layout/MobileFrame";
import Image from "next/image";
import titleImg from "@/../public/0.start/title.svg";
import startBtn from "@/../public/0.start/start-btn.png";
import circle1Img from "@/../public/0.start/blur-circle-1.png";

export default function StartPage({ nextStep }) {
  const text = `有些人天生酥脆，有些人出爐時就塌了。
你努力發酵、翻滾、等待出爐，
結果還是變成一坨可頌災難。
沒關係，這世界不缺完美麵包，
缺的是——像你一樣軟爛卻獨特的存在。
現在，就來看看你是什麼等級的失控可頌吧。`;

  return (
    <MobileFrame>
      <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
        <Image
          className="absolute top-0 -translate-y-1/2 scale-150"
          src={circle1Img}
          alt="circle1"
        />

        <div className="z-10 flex flex-col justify-center items-center gap-10 text-center max-w-md">
          <Image src={titleImg} alt="title" className="w-[80%] max-w-[300px]" />

          <div className="text-[#b95f0f] font-medium text-[14px] leading-loose tracking-wide whitespace-pre-line">
            {text}
          </div>

          <Image
            onClick={nextStep}
            className="w-[160px] cursor-pointer"
            src={startBtn}
            alt="startBtn"
          />
        </div>

        <Image
          className="absolute bottom-0 translate-y-1/2 pointer-events-none scale-150"
          src={circle1Img}
          alt="circle1"
        />
      </div>
    </MobileFrame>
  );
}