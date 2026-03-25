// import { NamedComponent1 } from "./NamedComponent" //방법 1
// import { NamedComponent1, NamedComponent3 } from "./NamedComponent" //방법 2
// import { NamedComponent1 as Foo, NamedComponent3 as Bar } from "./NamedComponent" //방법 3
import * as Foo from "./NamedComponent" //방법 4

export default function NamedComponentTest() {
    return(
        <>
            <h1>Named Component Test</h1>
            <Foo.NamedComponent1 />
            <Foo.NamedComponent2 />
            <Foo.NamedComponent3 />
        </>
    )
}