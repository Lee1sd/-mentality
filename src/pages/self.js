//자아 탐색
import React, { useState, useEffect } from 'react';
import "../style/Stress.css";
import { useNavigate } from 'react-router-dom';

function Self() {
    const [name, setName] = useState('');
    const [occupation, setOccupation] = useState('');
    const [detail, setDetail] = useState('');
    const [question1, setQuestion1] = useState('');
    const [question2, setQuestion2] = useState('');
    const [errors, setErrors] = useState({ question1: '', question2: '' });
    const navigator = useNavigate(); 

    useEffect(() => {
        // 페이지 로드 시 스크롤을 맨 위로 이동
        window.scrollTo(0, 0);
    }, []);


    const handleQuestion1Change = (e) => {
        const value = e.target.value;// textarea의 입력값
        setQuestion1(value);// 상태 업데이트

        if (value.length < 10) {
            setErrors((prevErrors) => ({ ...prevErrors, question1: '10글자 이상 입력해야 합니다.' }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, question1: '' }));
        }
    };

    const handleQuestion2Change = (e) => {
        const value = e.target.value;
        setQuestion2(value);

        if (value.length < 10) {
            setErrors((prevErrors) => ({ ...prevErrors, question2: '10글자 이상 입력해야 합니다.' }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, question2: '' }));
        }
    };

    const handleSubmit = () => {
        if (!errors.question1 && !errors.question2) {
            navigator('/start'); // 유효성 검사 통과 시 페이지 이동
        }
    };

    return (
        <div className='Intro'>
            <div className='Introtitle'><h3>자아 탐색 &nbsp;&nbsp;&nbsp;&nbsp;</h3></div>
            <div className='description'>
                * 상담 목표 설정을 위해 참고되는 설문지입니다.<br />
                <span className='details'>자세한 작성은 심리 분석에 도움이 됩니다!</span>
            </div>
            
            <div className='input-container'>
                <div className='group'>
                    <label htmlFor='name'>이름</label>
                    <input
                        type='text'
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder=' ex) 홍길동'
                    />
                </div>
                <div className='group bir'>
                    <label htmlFor='birthdate'>생년월일</label>
                    <input type='date' id='birthdate' name='birthdate' />
                </div>
                <div className='group'>
                    <label htmlFor='occupation'>직업</label>
                    <input
                        type='text'
                        id='occupation'
                        value={occupation}
                        onChange={(e) => setOccupation(e.target.value)}  // 확인
                        placeholder=' ex) 학생'
                    />
                </div>
                
            </div>
            <div className='S'>
                <div className='state'><h3>심리상태</h3></div>
                <div className='choose'>
                    * 현재 느끼는 감정 중 하나를 선택해주세요.
                </div>
            </div>
            <div className='buttons'>
                <button className='emotion-button'>불안</button>
                <button className='emotion-button'>스트레스</button>
                <button className='emotion-button'>우울</button>
                <button className='emotion-button'>무기력</button>
                <button className='emotion-button'>행복</button>
                <button className='emotion-button'>분노</button>
                <button className='emotion-button'>두려움</button>
                <button className='emotion-button'>외로움</button>
            </div>
            <div className='detail'> 
                <textarea
                    id='detail'
                    value={detail}
                    onChange={(e) => setDetail(e.target.value)}
                    placeholder='선택한 감정에 대해 더 설명해주세요. 어떤 상황에서 그런 감정을 느끼셨나요?'
                />
            </div>
            <div className='question'>
                질문1.당신이 가장 중요하게 생각하는 가치는 무엇인가요?<br/>
                그런 가치가 당신의 삶에 어떤 영향을 미친다고 생각하시나요? 
                    <textarea
                        id='question1'
                        value={question1}
                        onChange={handleQuestion1Change}
                        placeholder='여기에 추가 설명을 입력하세요...'
                    />
                    {errors.question1 && <p className='error-message'>{errors.question1}</p>}
               </div>
                <div className='questionn'>
                질문2.당신의 삶에서 중요한 경험, 사건은 무엇인가요?<br/>
                그 경험들이 당신의 자아를 형성하는데 어떤 영향을 주었나요?
                    <textarea
                        id='question2'
                        value={question2}
                        onChange={handleQuestion2Change}
                        placeholder='여기에 추가 설명을 입력하세요...'
                    />
                    {errors.question2 && <p className='error-message'>{errors.question2}</p>}
                </div>    
                <button className='start' onClick={handleSubmit} disabled={errors.question1 || errors.question2}>
                    저장 후 다음
                  <footer className='foot'></footer>
            </button>

            
            
        </div>
    );
}


export default Self;
