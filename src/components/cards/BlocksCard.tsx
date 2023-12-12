import { styled } from 'goober'
import { state } from "../../state";
import { Blocks } from "../Blocks";
import { Card } from "../Card";
import { ReactiveNumber } from "../ReactiveNumber";
import { Header, Subtitle } from "../Typography";
import { useSnapshot } from 'valtio';

const BlocksCardHeader = styled('div')`
    display: inline-flex;
    justify-content: space-between;
`

const Spacer = styled('div')`
    height: 1.7em;
`

export function BlocksCard() {
    const snap = useSnapshot(state)

    return <Card>
        <BlocksCardHeader>
            <Header><ReactiveNumber value={snap.sliderValue} />%</Header>
            <Subtitle>AK-47</Subtitle>
        </BlocksCardHeader>
        <Subtitle>Headshot</Subtitle>
        <Spacer />
        <Blocks min={0} max={75} value={snap.sliderValue} numberOfBlocks={14} />
    </Card>
}