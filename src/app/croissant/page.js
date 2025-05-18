'use client';
import StartPage from "@/component/page/StartPage";
import QuestionPagetPage from "@/component/page/QuestionPage";
import DisplayResultPagePage from "@/component/page/DisplayResultPage";
import ResultPagePage from "@/component/page/ResultPage";
import { useState } from "react";
import {usePsyStore} from "@/app/store/store";


export default function Croissant() {

  const psyState= usePsyStore( (state)=>state);


  // const[gameState, setGemeState] = useState({
  //   state: 0, //0:start, 1:question, 2:displayresult, 3:result
  //   questionState: 0,
  //   totalQuestions: 3,
  //   score: 0,
  // });

  const nextStep = function(){
    
    if(psyState.state >= 3) return;

    if(psyState.state == 1){
      //答題階段
      //要超過總題數才能結束

      if(psyState.questionState < psyState.totalQuestions -1){

        psyState.updateQuestionState(psyState.questionState +1);

      }else{
        psyState.updateState(psyState.state +1);
      }

    }else{
      console.log("next")
      psyState.updateState(psyState.state +1);  
    }}


  const prevStep = function(){
    
    if(psyState.state <=0) return;
    console.log("prev");
    psyState.updateState(psyState.state -1);  
    }
    

  return (
   <> 
   <div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
      { psyState.state == 0 && <StartPage nextStep={nextStep}/>}
      { psyState.state == 1 && <QuestionPagetPage nextStep={nextStep} questionIndex={psyState.questionState}/>}
      { psyState.state == 2 && <DisplayResultPagePage nextStep={nextStep}/>}
      { psyState.state == 3 && <ResultPagePage />}

      {/* <div onClick={prevStep}>上一步</div> */}
      {/* <div onClick={nextStep}>下一步</div> */}

   </div>
  
   
   </>
  );
}
