// import ButtonCom from "./ButtonCom";
// import {handleClick} from "./handle";
// import style from "./ButtonCom.module.css"

// export default function ToolBar() {
//     return(
//         <>
//             <ButtonCom message="버튼1 클릭" handle={handleClick} style={style.myButton}>
//                 버튼1
//             </ButtonCom>
//             <ButtonCom message="버튼2 클릭" handle={handleClick} style={style.myButton}>
//                 버튼2
//             </ButtonCom>
//         </>
//     )
// }

import ButtonCom from "./ButtonCom";
import {handlePlay, handleStop} from "./handle";
import style from "./ButtonCom.module.css"
import sampleVideo from "../../assets/sample.mp4";

export default function ToolBar() {
    return(
        <>
            <nav>
                <ButtonCom message="videoPlayer" handle={handlePlay} style={style.myButton}>
                    Play
                </ButtonCom>
                <ButtonCom message="videoPlayer" handle={handleStop} style={style.myButton}>
                    Stop
                </ButtonCom>
            </nav>
            <br />
            <section>
                <video id="videoPlayer" src={sampleVideo} controls width="350" />
            </section>
        </>
    )
}