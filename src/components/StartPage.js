import React, { useState } from 'react';
import StartBtn from './StartBtn';
import f1Logo from '../image/f1-new.svg';
import '../fonts/font.css';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

export default function StartPage(){

    const [isshow, setIsShow] = useState(true);
    const navigate = useNavigate();

    const onClickStartBtn = () => {
        setIsShow(false);
        navigate('/questionPage');
      };
      
      let thedisplay = "";
      if(!isshow) thedisplay = "none";
    
      return (
        <div className='flex flex-col min-h-screen bg-red-700' >
          <div className='text-center p-[20px]  ' style={{display :thedisplay}}>
            <div className='font-sans text-white p-[30px] text-[40px] sm:text-[20px] font-bold' style={{ fontFamily: 'neodgm' }}>당신의 팀을 찾아보세요<br /> </div>
                <div className='w-full bg-white flex justify-center rounded-md'><img src={f1Logo} className='w-[300px] sm:w-[150px] p-[10px] ' alt='에프원로고'/></div>
                <div className='text-base text-white m-[10px]' style={{ fontFamily: 'neodgm' }}>2023 응원할 F1팀 고르기</div>
                <div className='flex justify-center items-center'>
                    <StartBtn text={"Pick a team to support"} onClick={onClickStartBtn} />
                </div>
            </div>
            <Footer/>
        </div>
      );
}