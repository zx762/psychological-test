'use client';

export default function MobileFrame({children}) {

  return (
    <>
      <div className="w-[393px] h-[852px] bg-white rounded-2xl flex items-center justify-center">
        {children}
      </div>
    </>

  );
}
