import { Studio } from './Studio'

export const dynamic = 'force-static'

export function generateStaticParams() {
    return [
        { tool: [] },
        { tool: ['structure'] },
        { tool: ['vision'] },
    ]
}

export default function StudioPage() {
    return <Studio />
}
