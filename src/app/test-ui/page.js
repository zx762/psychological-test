'use client';
import { DatePicker } from 'antd';
import { useState } from 'react';
import CalenderPage from '@/component/CalenderPage'

export default function TestUI() {
  
  const onChange = (date, dateString) => {
    console.log(date, dateString);
    alert("你選的是:" + dateString);
  };
  

  return (
    <div className="w-screen h-screen bg-gray-100 flex items-center justify-center gap-5 flex-wrap overflow-auto">
      {/* <DatePicker onChange={onChange} needConfirm /> */}
      <CalenderPage year="2025" month="五月" day="01" weekDay="星期四"></CalenderPage>
      <CalenderPage year="2025" month="五月" day="02" weekDay="星期五"></CalenderPage>
      <CalenderPage year="2025" month="五月" day="03" weekDay="星期六"></CalenderPage>
      {/* <CalenderPage/> */}
     
    </div>
  );
}
