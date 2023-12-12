import { styled } from 'goober'
import { state } from "../../state";
import { Card } from "../Card";
import { ReactiveNumber } from "../ReactiveNumber";
import { Subtitle, Title } from "../Typography";
import { ProgressRing } from '../RadialProgress';
import { HistoryHistogram } from '../HistoryHistogram';
import { useMemo } from 'react';
import { useSnapshot } from 'valtio';
import { Statistic } from '../Statistic';

const CardContents = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Spacer = styled('div')`
    height: 0.7em;
`

const GreenReactiveNumber = styled('span')`
    color: ${(props) => props.theme.colors.primary};
`

const Histogram = styled('div')`
    width: 100%;
    height: 3.4em;
    margin: 1em 0;
`

export function StatsCard() {
    const snap = useSnapshot(state)

    const data = [...useMemo(() => Array.from({ length: 14 }, () => Math.floor(Math.random() * 35)), []), snap.sliderValue]


    let max = 0
    const mean = data.reduce((acc, datum) => {
        if (datum > max) max = datum
        return acc + datum * (1 / data.length)
    }, 0)

    const currentPercentageFromMean = Math.abs(100 * (snap.sliderValue - mean) / mean)
    const relativeWord = snap.sliderValue > mean ? 'higher' : 'lower'

    return <Card>
        <CardContents>
            <Spacer />
            <ProgressRing width={7.2} value={snap.sliderValue} barWidth={0.35} unit="em" />
            <Title>Headshot</Title>
            <Subtitle>
                <GreenReactiveNumber>
                    <ReactiveNumber value={currentPercentageFromMean} digits={0} />%
                </GreenReactiveNumber> {relativeWord} than your last 15 average
            </Subtitle>

            <Histogram>
                <HistoryHistogram data={data} mean={mean} max={max} />
            </Histogram>

            <Statistic name={'Stat One'} value={snap.sliderValue} mean={40} />
            <Statistic name={'Stat Two'} value={40} mean={70} />
            <Statistic name={'Stat Three'} value={60} mean={70} />
        </CardContents>
    </Card >
}