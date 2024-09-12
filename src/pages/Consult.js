// src/Consult.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import treeImage from '../assets/images/나무.jpg';
import "../style/Consult.css";
import unrestImage from '../assets/images/unrest.png';
import blueImage from '../assets/images/blue.png';
import stressImage from '../assets/images/stress.png';
import angryImage from '../assets/images/angry.png';
import sleepImage from '../assets/images/sleep.png';
import fearImage from '../assets/images/fear.png';
import happinessImage from '../assets/images/happiness.png';
import lonelinessImage from '../assets/images/loneliness.png';

function Consult() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);


    const slides = [
        { link: "/Stress", title: "스트레스 관리", description: "스트레스 관리 기술을 배우고\n적용하여 일상생활의\n스트레스를 효과적으로 다룬다." },
        { link: "/self", title: "자아탐색", description: "자기 감정, 생각, 행동패턴을\n탐색하고 이해한다." },
        { link: "/Problem", title: "문제해결", description: "현재 직면한 구체적인 문제나\n어려움을 이해하고 해결한다." },
        { link: "/acceptance", title: "자기 수용", description: "자신의 장단점을 인정하고\n수용하는 능력을 향상시킨다." },
        { link: "/relationships", title: "대인관계 개선", description: "가족, 친구, 동료 등의\n대인관계를 개선하고\n더 건강한 관계를 구축한다." },
        { link: "/life", title: "삶의 질 향상", description: "전반적인 삶의 만족도와\n행복감을 높인다." },
        { link: "/change", title: "행동 변화", description: "특정 상황에서의 대처 방식\n개선과 더 건강한 생활 습관을\n형성한다." },
        { link: "/stability", title: "심리적 안정감", description: "스트레스, 불안, 우울 등의\n정서적 어려움을 완화하고\n안정을 찾는다." },
    ];

    const totalItems = slides.length;

    // 화면 크기에 따라 슬라이드 개수 조정
    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1);
            } else {
                setItemsPerPage(4);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        // 슬라이드 개수가 변경되면 currentIndex 조정
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        setCurrentIndex((prevIndex) => Math.min(prevIndex, totalPages - 1));
    }, [itemsPerPage, totalItems]);

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const prevSlide = () => {//
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
    };

    const nextSlide = () => {//
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    };

    const startIndex = currentIndex * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    const currentSlides = slides.slice(startIndex, endIndex);
    
    return (
        <div className='cont'>
            <img className='Consult-img' src={treeImage} alt="Tree" />
            <div className='title'><h2>요즘 어떤 감정을 제일 많이 느끼고 계신가요?</h2><br />
                <div className='subheading'>
                    <span>지금 이 순간, 당신의 마음을 나눠주세요.<br /> <br />
                        감정이 쏟아지는 일상 속에서, 당신의 이야기에 귀 기울이겠습니다.</span>
                </div>
            </div>

            <div className='Consult-content'>
                <div className='box1'>
                    <img className='unrest' src={unrestImage} alt='unrest' />
                </div>
                <div className='Sentence1'>
                    <h3>불안</h3>
                    불확실성으로 인해 초조하거나 불편한 상태입니다.<br />
                    자연스러운 감정이지만, 잘 관리하는 것이 중요합니다.
                </div>

                <div className='box2'>
                    <img className='blue' src={blueImage} alt='blue' />
                </div>
                <div className='Sentence2'>
                    <h3>우울</h3>
                    깊은 절망이나 슬픔으로 느끼며 일상에 흥미를 잃은 상태입니다.
                    적절한 지원이 필요합니다.
                </div>

                <div className='box3'>
                    <img className='stress' src={stressImage} alt='stress' />
                </div>
                <div className='Sentence3'>
                    <h3>스트레스</h3>
                    다양한 원인으로 정신적, 신체적 압박을 느끼는 상태입니다.<br />
                    적절한 관리를 통헤 건강을 유지해야 합니다.
                </div>


                <div className='box4'>
                    <img className='angry' src={angryImage} alt='angry' />
                </div>
                <div className='Sentence4'>
                    <h3>분노</h3>
                    강한 불쾌감이나 화를 느끼는 상태입니다.<br />
                    건강하게 표현하고 해결하는 것이 필요합니다.
                </div>

                <div className='box5'>
                    <img className='sleep' src={sleepImage} alt='sleep' />
                </div>
                <div className='Sentence5'>
                    <h3>무기력</h3>
                    에너지가 부족하고 의욕이 없는 상태입니다.<br />
                    장기적으로 지속되면 생활의 질에 영향을 미칠 수 있습니다.
                </div>

                <div className='box6'>
                    <img className='fear' src={fearImage} alt='fear' />
                </div>
                <div className='Sentence6'>
                    <h3>두려움</h3>
                    특정 상황이나 대상에 위협을 느끼는 상태입니다.<br />
                    자연스러운 반응이지만, 때로는 극복이 필요합니다.
                </div>

                <div className='box7'>
                    <img className='happiness' src={happinessImage} alt='happines' />
                </div>
                <div className='Sentence7'>
                    <h3>행복</h3>
                    기쁨과 만족을 느끼는 긍정적인 상태입니다.<br />
                    이를 인식하고 지속하는 것이 중요합니다.
                </div>

                <div className='box8'>
                    <img className='loneliness' src={lonelinessImage} alt='loneliness' />
                </div>
                <div className='Sentence8'>
                    <h3>외로움</h3>
                    소외감이나 혼자라는 생각에 슬픔을 느끼는 상태입니다.<br />
                    인간관계를 통해 완화될 수 있습니다.
                </div>

                <div className='line1'>
                    <div className='text'>상담 목표</div>
                </div>
                <div className='line2'></div>
            </div>    
            
            <div className='Goals'>
                <div className='inner'>
                     <button className="B-left" onClick={prevSlide}>&#10094;</button>
                        <div className='Goals-items' >
                            {currentSlides.map((slide, index) => (
                                <div className='Goals-item' key={index}>
                                    <Link to={slide.link}>
                                        <h3>{slide.title}</h3>
                                        <div id='text'>{slide.description}</div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    <button className="B-right" onClick={nextSlide}>&#10095;</button>
                </div>
               
            </div>
             
        </div>
    );
}

export default Consult;
