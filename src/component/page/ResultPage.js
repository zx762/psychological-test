'use client';
import MobileFrame from "@/component/layout/MobileFrame";
import {usePsyStore} from "@/app/store/store";
import Image from "next/image";
import result1 from "@/../public/3.result/result-1.png";
import result2 from "@/../public/3.result/result-2.png";
import result3 from "@/../public/3.result/result-3.png";
import circle1Img from "@/../public/0.start/blur-circle-1.png";

export default function ResultPage() {

  const psyState= usePsyStore( (state)=>state);

  const playAgain = function(){
    //重新整理頁面
    window.location.reload();
  }

  //3~9
  //34
  //567
  //89

  return (
    <>
      <MobileFrame>
        <div className="flex flex-col items-center">
          {
          psyState.score < 5 && <Image src={result1} alt="result1"></Image>
          }

          {
          (psyState.score >=5 && psyState.score < 8) && <Image src={result2} alt="result2"></Image>
          }

          {
          psyState.score > 7 && <Image src={result3} alt="result3"></Image>
          }


          <div className="text-[#B65A0F] text-[16px] font-normal mt-[24px] mb-[50px]">
            長按或截圖可保存結果
          </div>


          <div 
            className={`bg-[#B65A0F] w-[138px] rounded-full text-white py-[16px] text-[18px] flex justify-center 
              items-center font-semibold shadow-[0px_4px_0px_1px_#8D4509] cursor-pointer hover:translate-y-[2px] transition relative z-10`}
            onClick ={playAgain}
          >再玩一次</div>

          <Image className="absolute bottom-0 translate-y-1/2 pointer-events-none z-0"src={circle1Img} alt='circle1'></Image>
        </div>
        
      </MobileFrame>
  
    </>

  );
}
