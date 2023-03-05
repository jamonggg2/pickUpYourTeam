import theQuestions from '../content/theQuestions';
import React, { useState } from 'react';
import Parser from 'html-react-parser';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import '../fonts/font.css';
import SelectBtn from './SelectBtn';
import StartBtn from './StartBtn';
import Footer from './Footer';

const Wrapper = styled.div`
background-color: white;
margin-top: 50px;
margin-bottom: 100px;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`

const Texts = styled.div`
    font-family:'neodgm';
    font-size : 22px;
    margin:0.5rem;
    text-align:center;
    color:black;
    margin-top:150px;
    margin-bottom:100px; 
`
export default function QuestionPage(props){
    const [questionNum, setQuestionNum] = useState(0);
    const navigate = useNavigate();

    //점수 init
    const [record , setRecord] = useState(new Map([
        ['rb',0],['fe',0],['mer', 0], ['mc', 0], ['am', 0], ['af', 0],
        ['al', 0], ['hs', 0], ['at', 0], ['ww', 0]]));
    
    const onNextQ = (selectedAnswer) => {
        //결과값 임시저장
        handleAnswers(selectedAnswer);

        //다음문제로
        setQuestionNum(questionNum + 1);
    };

    const handleAnswers = (answers) => {
        
        //항목마다 다른 보정값
        const weight = theQuestions[questionNum].weight;
        const newRecord = new Map(record);

        // 루프를 돌면서 값을 더한다
        Object.entries(answers).forEach(([key, value]) => {
            if (key !== 'text') {
                newRecord.set(key, newRecord.get(key) + (value * weight));
            } 
        });
        setRecord(newRecord); // update the state with the new map
        
      }

      //마지막 질문 후 엔딩 버튼 클릭
      const onClickEnd = () => {
        const maxValTeam = findMaxKey(record);
        navigate(`/endPage?maxValTeam=${encodeURIComponent(maxValTeam)}`);
        
      };

      //마지막 질문 전까지
    if(questionNum <8){
        return(
            <div className='flex flex-col bg-red-700 min-h-[100vh]'>
                <Wrapper>
                    <div id='container'
                    className='mb-3 text-center items-center'>
                        <Texts>{Parser(theQuestions[questionNum].question)}</Texts>
                        {
                            theQuestions[questionNum].answers.map((answers, i) =>(
                                <SelectBtn text={Parser(answers.text)} onClick={() => onNextQ(answers)} key={i} />
                            ))
                        }
                    </div>
                </Wrapper>
                <Footer/>
            </div>
        );
    }else{
        return(
            <div className='flex flex-col bg-red-700 min-h-[100vh]'>
                <div className='flex justify-center items-center mt-[100px]'>
                    <StartBtn text={"결과 보기"} onClick={onClickEnd}/>
                </div>
                <Footer/>
            </div>
        );
    }
};

//맵의 가장 큰v의 k찾기
function findMaxKey(map) {
    let maxKey = null;
    let maxValue = -Infinity;
    map.forEach((value, key) => {
        if (value > maxValue) {
          maxValue = value;
          maxKey = key;
        }
      });
    return maxKey;
  }