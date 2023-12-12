import { styled } from 'goober'
import { Subtitle } from './Typography'

const Container = styled('div')`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0.4em;
`

const Label = styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Bar = styled('div')`
    position: relative;
    height: 0.7em;
    margin-top: 0.5em;
    width: 100%;
    display: flex;
    align-items: center;
`

const UnderBar = styled('div')`
    position: absolute;
    height: 70%;
    width: 100%;
    background: ${(props) => props.theme.colors.elevated};
    border-radius: 0.2em;
`

const OverBar = styled('div') <{ width: number }>`
    position: absolute;
    height: 70%;
    width: ${(props) => props.width}%;
    background: ${(props) => props.theme.colors.subtle};
    border-radius: 0.2em 0 0 0.2em;
    border-right: 0.15em solid ${(props) => props.theme.colors.primary};
`

const MeanLine = styled('div') <{ position: number }>`
    position: absolute;
    height: 100%;
    width: 0;
    border-right: 0.15em solid ${(props) => props.theme.colors.secondary};
    left: ${(props) => props.position}%;
`

const White = styled('span')`
    color: white;
`

export interface StatisticProps {
    name: string
    value: number
    mean: number
}

export function Statistic({ name, value, mean }: StatisticProps) {
    const width = 100 * Math.min(value, mean) / mean;
    const position = 100 * Math.min(value, mean) / value;

    return <Container>
        <Label>
            <Subtitle>{name}</Subtitle>
            <Subtitle><White>{value}</White></Subtitle>
        </Label>
        <Bar>
            <UnderBar />
            <OverBar width={width} />
            <MeanLine position={position} />
        </Bar>
    </Container>
}