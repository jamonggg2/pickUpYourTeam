import React, { useState } from 'react';
import StartBtn from './StartBtn';
import f1Logo from '../image/f1-new.svg';

export default function StartPage(){

    const [isShow, setIsShow] = useState(true);
    const [isQuizShow, setIsQuizShow] = useState(false);

    const onClickStartBtn = () => {
        setIsShow(false);
        setIsQuizShow(true);
    }

    return(
        <div className='w-full h-screen bg-red-700 flex-col justify-center items-center'>
               <div className='text-center p-[20px]'>
                    <div className='font-sans text-white p-[30px] text-[40px] sm:text-[20px] font-bold'>당신의 팀을 찾아보세요<br /> </div>
                    <div className='w-full bg-white flex justify-center rounded-md'><img src={f1Logo} className='w-[300px] sm:w-[150px] p-[10px] '/></div>
                    <div className='text-base text-white m-[10px]'>2023 응원할 F1팀 고르기</div>
                    <StartBtn type={true} text={"Pick a team to support"} onclick={onClickStartBtn} />
                </div>
        </div>
    );
}