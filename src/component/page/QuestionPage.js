'use client';

import MobileFrame from "@/component/layout/MobileFrame";
import Image from "next/image";
import titleImg from "@/../public/0.start/title.svg";
import startBtn from "@/../public/0.start/start-btn.png";
import circle2Img from "@/../public/1.question/blur-circle-2.png";
import q1Up from "@/../public/1.question/q1-up.png";
import q1Bottom from "@/../public/1.question/q1-bottom.png";
import {usePsyStore, useQuestionStore} from "@/app/store/store";
import circle3Img from "@/../public/1.question/blur-circle-3.png";
import circle4Img from "@/../public/1.question/blur-circle-4.png";
import q2Up from "@/../public/1.question/q2-up.png";
import q2Bottom from "@/../public/1.question/q2-bottom.png";
import q3Up from "@/../public/1.question/q3-up.png";
import q3Bottom from "@/../public/1.question/q3-bottom.png";


export default function QuestionPage({questionIndex, nextStep}) {

  const questionData = useQuestionStore( (state)=>state );
  const psyData = usePsyStore( (state)=>state );

  const clickAnswer = function(option){
    nextStep();
    psyData.updateScore(psyData.score + option.value);
    console.log(option.title, option.value);
  }

  const getMainColor = function(prefix){

    let colorString = "";

    if(questionIndex == 0){
      colorString=prefix+"-[#90B62A]";
    }else if(questionIndex == 1){
      colorString=prefix+"-[#dd3e3e]";
    }else{
      colorString=prefix+"-[#1098ec]";
    }
    return colorString;
  }

  const upImages = [q1Up, q2Up, q3Up];
  const bottomImages =[q1Bottom, q2Bottom, q3Bottom];
  const circleImages = [circle2Img, circle3Img, circle4Img];

  const up = upImages[questionIndex];
  const bottom = bottomImages[questionIndex];
  const circle= circleImages[questionIndex];

  return (
    <>
      <MobileFrame>


        <div className="flex flex-col items-center gap-[26px]">

          {/* <Image className="absolute top-0 -translate-y-1/2"src={circle2Img} alt='circle2'></Image>
          <Image src={q1Up} className="w-[88px] mb-[35px]" alt='q1Up'></Image> */}

          <Image className="absolute top-0 -translate-y-1/2" src={circleImages[questionIndex]} alt='circle'></Image>
          <Image src={upImages[questionIndex]} className="w-[88px] mb-[35px]" alt='up'></Image>


          <div className={`${getMainColor("text")} border-2 ${getMainColor("border")} rounded-full w-[48px] h-[48px]
            flex justify-center items-center  font-bold text-xl`}>
            Q{questionIndex+1}
          </div>

          <div 
            className={`text-center font-bold text-3xl ${getMainColor("text")} mb-[20px]`}
          >{questionData.questions[questionIndex+1].title}</div>


          {
              
            questionData.questions[questionIndex+1].options.map((option, index) =>{
              return (
                <>
                {
                  questionIndex == 0 && 
                  <div 
                    className={`bg-[#bee351] w-full rounded-full text-white py-[16px] text-sm flex justify-center 
                      items-center font-medium shadow-[0px_4px_0px_1px_#90B62A] cursor-pointer hover:translate-y-[2px] transition`}
                      
                    onClick={() => clickAnswer(option)}
                    key={option.title + "green"}
                  >{option.title}</div>
                }

                {
                  questionIndex == 1 && 
                  <div 
                    className={`bg-[#DD3E3E] w-full rounded-full text-white py-[16px] text-sm flex justify-center 
                      items-center font-medium shadow-[0px_4px_0px_1px_#8D4509] cursor-pointer hover:translate-y-[2px] transition`}
                      
                    onClick={() => clickAnswer(option)}
                    key={option.title +"red"}
                  >{option.title}</div>
                }

                {
                  questionIndex == 2 && 
                  <div 
                    className={`bg-[#89BCFF] w-full rounded-full text-white py-[16px] text-sm flex justify-center 
                      items-center font-medium shadow-[0px_4px_0px_1px_#1098EC] cursor-pointer hover:translate-y-[2px] transition`}
                      
                    onClick={() => clickAnswer(option)}
                    key={option.title +"blue"}
                  >{option.title}</div>
                }



                </>
              )
            })

          }
          <Image src={bottomImages[questionIndex]} className="w-[88px] mt-[40px]" alt='bottom'></Image>

          <Image className="absolute bottom-0 translate-y-1/2"src={circleImages[questionIndex]} alt='circle'></Image>
        </div>


      </MobileFrame>
     
    </>

  );
}

