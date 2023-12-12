import { styled } from 'goober'
import { state } from "../../state";
import { Blocks } from "../Blocks";
import { Card } from "../Card";
import { ReactiveNumber } from "../ReactiveNumber";
import { Header, Subtitle } from "../Typography";

const BlocksCardHeader = styled('div')`
    display: inline-flex;
    justify-content: space-between;
`

const Spacer = styled('div')`
    height: 1.7em;
`

export function BlocksCard() {
    return <Card>
        <BlocksCardHeader>
            <Header><ReactiveNumber value={state.sliderValue} />%</Header>
            <Subtitle>AK-47</Subtitle>
        </BlocksCardHeader>
        <Subtitle>Headshot</Subtitle>
        <Spacer />
        <Blocks min={0} max={75} value={state.sliderValue} numberOfBlocks={14} />
    </Card>
}