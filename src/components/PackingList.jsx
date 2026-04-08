import Items from "./Items"

export default function PackingList() {
    return(
        <section>
            <h1>여행 짐 리스트</h1>
            <ul>
                <Items 
                isPacked={true}
                name="여분 옷"
                />
                <Items 
                isPacked={true}
                name="노트북"
                />
                <Items 
                
                name="컵라면"
                />
            </ul>
        </section>
    )
}