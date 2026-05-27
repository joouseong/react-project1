import { galleryImages } from "./imgData";
import { useState } from "react";
import style from "./Carousel.module.css"

export default function Carousel() {
    const [index, setIndex] = useState(0);
    // 1. 불린 타입의 State 추가(기본값은 닫혀있도록 false 설정)
    const [more, setMore] = useState(false);

    function handleNext() {
        if (index === galleryImages.length -1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    function handlePrevious() {
        if (index === 0) {
            setIndex(galleryImages.length -1);
        } else {
            setIndex(index - 1);
        }
    }

    // 2. 토글할 수 있는 이벤트 핸들러 작성
    function handleMoreClick() {
        setMore(!more); // 현재 상태의 반대 값으로 토글
    }

    let slide = galleryImages[index];
    return (
        <section className={style.wrapper}>
            <h2>
                <i>{slide.name} </i>
                by {slide.artist}
            </h2>
            <h3>
                ({index + 1} of {galleryImages.length})
            </h3>
            <img src={slide.url} alt={slide.alt} />
            <p>
                <button onClick={handlePrevious} className={style.button}>Previous</button>
                <button onClick={handleNext} className={style.button}>Next</button>
            </p>

            {/* 3. 버튼 추가 및 handleMoreClick 핸들러 전달 */}
            {/* 4. more 값에 따라 버튼 라벨 변경 (삼항 연산자 사용) */}
            <button onClick={handleMoreClick}>
                {more ? "Hide" : "Show"} description
            </button>

            {/* 5. more가 true일 때만 description을 보여줌 (단락 평가 && 사용) */}
            {more && <p>{slide.description}</p>}
        </section>
    )
}