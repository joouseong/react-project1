// isPacked가 true면 ✅ 표시하기
// export default function Items({name, isPacked}) {
//     if(isPacked) {
//         return <li>{name}✅</li>
//     }
//     return <li>{name}</li>
// }

// 삼항 연산자를 사용하여 중복 코드 제거하기(방법 1)
// export default function Items({name, isPacked}) {
//     return <li>{name} {isPacked ? "✅" : ""}</li>
// }

// 삼항 연산자를 사용하여 중복 코드 제거하기(방법 2)
// export default function Items({name, isPacked}) {
//     return(
//     <li>
//         {isPacked ? name + '✅' : name}
//     </li>
//     )
// }

// <del> 태그 추가하기
// export default function Items({name, isPacked}) {
//     return(
//     <li>
//         {isPacked ? (<del>{name + '✅'}</del>) : (name)}
//     </li>
//     )
// }

// && 연산자 사용
// export default function Items({name, isPacked}) {
//     return(
//         <li>
//         {name} {isPacked && '✅'}
//         </li>
//     )
// }

// 변수에 조건부로 JSX를 할당하기
export default function Items({name, isPacked}) {
    let itemContent = name;
    if(isPacked) {
        itemContent = <del>{name + "✅"}</del>
    }
    return(
        <li>
            {itemContent}
        </li>
    )
}

