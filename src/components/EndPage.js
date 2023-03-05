import teamContent from '../content/theResult';
import Parser from 'html-react-parser';
import { useLocation } from 'react-router-dom';
import '../fonts/font.css';
import Footer from './Footer';
import StartBtn from './StartBtn';
import { useNavigate } from 'react-router-dom';


export default function EndPage(){

    const location = useLocation();
    const params = new URLSearchParams(location.search);
     const maxValTeam = params.get('maxValTeam');

    const result = teamContent.find((item) => item.type === maxValTeam);
    const bg = result.color; 

    const navigate = useNavigate();

    //처음으로 돌아가기
    const onClickStartBtn = () =>{
        navigate('/');
    }

    return(
        <div className='justify-center items-center min-h-[100vh]' style={{background : bg}}>
            <div className='h-[50px]'/>
            <p style={{ fontFamily: 'neodgm' }} className='text-white font-bold text-[30px] sm:text-[20px]'>당신에게 꼭 맞는 2023년 F1팀은</p>
            <div className='bg-white w-full h-[100px] mt-10 text-[30px] sm:text-[20px] sm:h-[65px]' style={{ fontFamily: 'neodgm' }}>{Parser(result.title)}</div>
            <div className='flex justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl mt-5">
                    <figure><img src={result.img} alt='팀로고이미지' /></figure>
                </div>
            </div>
            <div className="flex flex-col w-full mt-10 h-full">
                <div className="grid h-auto bg-white card rounded-md m-10 p-[30px] place-items-center" style={{ fontFamily: 'neodgm' }}>
                {Parser(result.description)}
                </div> 
                <div className="grid h-auto bg-white card rounded-md m-10 mb-[100px] p-[30px] place-items-center" style={{ fontFamily: 'neodgm' }}>
                {Parser(result.subdesc)}
                </div> 
            </div>
            <div className='flex justify-center items-center mb-[50px]'>
                <StartBtn text={"처음부터 다시하기"} onClick={onClickStartBtn} />
            </div>
            <Footer/>
        </div>
    );
    
}