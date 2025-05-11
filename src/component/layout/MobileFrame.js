'use client';

export default function MobileFrame({children}) {

  return (
    <>
      <div className="w-[393px] h-[852px] p-[52px] bg-white rounded-2xl 
      flex items-center justify-center relative overflow-hidden">
        {children}
      </div>
    </>

  );
}
