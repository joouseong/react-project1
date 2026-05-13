import style from "./Bubble.module.css"

function Button({onClick, value}) {
    return(
        <button className={style.button} onClick={e => {
            e.stopPropagation();
            onClick();
        }}>
            {value}
        </button>
    )
}

export default function Bubble() {
    return (
        <>
            <h1 className={style.title}>Bubble</h1>
            <nav className={style.navBar} onClick={() => alert("네비게이션바 클릭")}>
                <Button onClick={() => alert("버튼1 클릭")} value="버튼 1" />
                &nbsp;
                <Button onClick={() => alert("버튼2 클릭")} value="버튼 2" />
            </nav>
        </>
    )
}