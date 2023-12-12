import { styled } from 'goober'

const BlocksContainer = styled('div')`
    width: 100%;
    display: inline-flex;
`

const Block = styled('div') <BlockProps>`
    margin: 0 1px;
    flex: 1;
    height: 1.7em;
    background: ${(props) => props.filled ? props.theme.colors.primary : props.theme.colors.elevated};
    border: 1px solid ${(props) => props.filled ? props.theme.colors.primary : props.theme.colors.border};
    transition: background 0.5s ease-out, border-color 0.9s ease-out;

    &:first-child {
        border-radius: 0.4em 0 0 0.4em;
    }

    &:last-child {
        border-radius: 0 0.4em 0.4em 0;
    }
`

export interface BlocksProps {
    min: number
    max: number
    value: number
    numberOfBlocks: number
}

interface BlockProps {
    filled: boolean
}

export function Blocks({ min, max, value, numberOfBlocks }: BlocksProps) {

    const blocks = []
    for (let i = 0; i < numberOfBlocks; i++) {
        const filled = (value - min) / (max - min) >= (i + 1) / numberOfBlocks;
        blocks.push(<Block filled={filled} />)
    }

    return <BlocksContainer>{blocks}</BlocksContainer>
}