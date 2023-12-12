import { styled } from 'goober'
import { state } from "../../state";
import { Card } from "../Card";
import { ReactiveNumber } from "../ReactiveNumber";
import { Slider } from "../Slider";
import { Header, Subtitle } from "../Typography";
import { useSnapshot } from 'valtio';

const SliderCardHeader = styled('div')`
    display: inline-flex;
    justify-content: space-between;
`

const Spacer = styled('div')`
    height: 0.9em;
`

export function SliderCard() {
    const snap = useSnapshot(state)

    return <Card>
        <SliderCardHeader>
            <Header><ReactiveNumber value={snap.sliderValue} />%</Header>
            <Subtitle>AK-47</Subtitle>
        </SliderCardHeader>
        <Subtitle>Headshot</Subtitle>
        <Spacer />
        <Slider value={snap.sliderValue} min={0} max={100} step={0.1} onChange={(event) => { state.sliderValue = parseFloat(event.target.value) || 0 }} />
    </Card>
}