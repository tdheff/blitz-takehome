import { styled } from 'goober'
import { Header } from './Typography'
import { state } from '../state'
import { ReactiveNumber } from './ReactiveNumber'
import { useSnapshot } from 'valtio'

interface ProgressCircleProps {
    center: number
    barWidth: number
    radius: number
    arcLength: number
    offset: number
    unit: 'px' | 'em' | 'rem'
    background: boolean
}

const ProgressCircle = styled('circle') <ProgressCircleProps>`
    cx: ${(props) => props.center}${(props) => props.unit};
    cy: ${(props) => props.center}${(props) => props.unit};
    r: ${(props) => props.radius}${(props) => props.unit};
    fill: transparent;
    stroke: ${(props) => props.background ? props.theme.colors.elevated : props.theme.colors.primary};
    stroke-width: ${(props) => props.barWidth}${(props) => props.unit};
    stroke-dasharray: ${(props) => props.arcLength}${(props) => props.unit};
    stroke-dashoffset: ${(props) => props.offset}${(props) => props.unit};
    transition: stroke-dashoffset 0.5s ease-out;
`

const Container = styled('div') <{ width: number, height: number, unit: string }>`
    width: ${(props) => props.width}${(props) => props.unit};
    height: ${(props) => props.height}${(props) => props.unit};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`
export interface ProgressRingProps {
    width: number
    barWidth: number
    value: number
    unit: 'px' | 'em' | 'rem'
}

export function ProgressRing({ width, barWidth, value, unit }: ProgressRingProps) {
    const snap = useSnapshot(state)

    const center = width / 2
    const radius = width / 2 - barWidth
    const arcLength = Math.PI * 2 * radius
    const offset = arcLength * ((100 - value) / 100) * 0.66 + arcLength * 0.34
    const backgroundOffset = 0.66 + arcLength * 0.30

    return (
        <Container height={width * 0.85} width={width} unit={unit}>
            <Header xl style={{ position: 'absolute', paddingTop: `${radius * 0.2}${unit}` }}><ReactiveNumber digits={0} value={snap.sliderValue} />%</Header>
            <svg style={{ position: 'absolute', transform: 'rotate(150deg)', top: 0 }} width={`${width}${unit}`} height={`${width}${unit}`}>
                <ProgressCircle
                    center={center}
                    radius={radius}
                    unit={unit}
                    barWidth={barWidth}
                    arcLength={arcLength}
                    offset={backgroundOffset}
                    background={true}
                />
                <ProgressCircle
                    center={center}
                    radius={radius}
                    unit={unit}
                    barWidth={barWidth}
                    arcLength={arcLength}
                    offset={offset}
                    background={false}
                />
            </svg>
        </Container>
    )
}