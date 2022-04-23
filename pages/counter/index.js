import { CountProvider } from "./count-context"
import { CountDisplay, Counter } from "./count"

const Index = () => {
    return (
        <CountProvider>
            <CountDisplay />
            <Counter />
        </CountProvider>
    )
}

export default Index;