import { HomePage } from '@vitro/ui/src'
import experimentsTree from '_vitro-root_/experimentsTree.json'

export default function Page() {
    return (
        <HomePage
            experimentsTree={experimentsTree}
        />
    )
}
