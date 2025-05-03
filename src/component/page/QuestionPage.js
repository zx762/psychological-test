'use client';
import MobileFrame from "@/component/layout/MobileFrame";

export default function QuestionPage({questionIndex}) {

  return (
    <>
      <MobileFrame>
        QuestionPage: Q{questionIndex+1}
      </MobileFrame>
     
    </>

  );
}

