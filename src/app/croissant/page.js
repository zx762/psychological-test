'use client';
import StartPage from "@/component/page/StartPage";
import QuestionPagetPage from "@/component/page/QuestionPage";
import DisplayResultPagePage from "@/component/page/DisplayResultPage";
import ResultPagePage from "@/component/page/ResultPage";
import { useState } from "react";

export default function Croissant() {

  const[gameState, setGemeState] = useState({
    state: 0, //0:start, 1:question, 2:displayresult, 3:result
    questionState: 0,
    totalQuestions: 3,
    score: 0,
  });

  const nextStep = function(){
    
    if(gameState.state >= 3) return;

    if(gameState.state == 1){
      //答題階段
      //要超過總題數才能結束

      if(gameState.questionState < gameState.totalQuestions -1){
        setGemeState({
          ...gameState,
          questionState: gameState.questionState +1
        });
      }else{
        setGemeState({
          ...gameState,
          state: gameState.state +1
        });
      }

  

    }else{
      console.log("next")
      setGemeState({
        ...gameState,
        state: gameState.state +1
      });

    }}

  const prevStep = function(){
    console.log("prev")
    if(gameState.state <=0) return;
    setGemeState({
      ...gameState,
      state: gameState.state -1
    })

  }

  return (
   <>
   <div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
      { gameState.state == 0 && <StartPage/>}
      { gameState.state == 1 && <QuestionPagetPage questionIndex={gameState.questionState}/>}
      { gameState.state == 2 && <DisplayResultPagePage/>}
      { gameState.state == 3 && <ResultPagePage/>}

      <div onClick={prevStep}>上一步</div>

      <div onClick={nextStep}>下一步</div>

   </div>
  
   
   </>
  );
}
