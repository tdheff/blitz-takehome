import { styled } from 'goober'

const CardSection = styled("section")`
    background-color: #13161C;
    border-radius: 0.4em;
    border: 2px solid #171A20;
    padding: 1.1em 1em;
    margin: 0.5em 0.5em 3.8em 0.5em;
    display: flex;
    flex-direction: column;
`

export function Card({
    children
}: {
    children: React.ReactNode
}) {
    return <CardSection>{children}</CardSection>
}