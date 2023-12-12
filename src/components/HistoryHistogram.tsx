import { styled } from 'goober'

const Container = styled('div')`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    gap: 0.2em;
    align-items: end;
    margin-top: 0.2em;
`

const Bar = styled('div') <{ height: number }>`
    height: ${(props) => props.height}%;
    background: ${(props) => props.theme.colors.elevated};
    border-top: 2px solid ${(props) => props.theme.colors.border};
    flex: 1;
    transition: height 0.5s ease-out;

    &:last-child {
        background: ${(props) => props.theme.colors.subtle};
        border-top: 2px solid ${(props) => props.theme.colors.primary};
    }
`

const Line = styled('div') <{ percentage: number }>`
    position: absolute;
    border-top: 0.1em dashed ${(props) => props.theme.colors.border};
    width: 100%;
    top: ${(props) => props.percentage}%;
    transition: top 0.5s ease-out;
`

export interface HistoryHistogramProps {
    data: number[]
    max: number,
    mean: number
}

export function HistoryHistogram({ data, max, mean }: HistoryHistogramProps) {

    return <Container>
        <Line percentage={100 * (1 - mean / max)} />
        {data.map((datum, ix) => {
            return <Bar key={ix} height={datum * 100 / max} />
        })}
    </Container>
}