import { styled } from 'goober'


const HeaderH1 = styled("h1") <{ xl: boolean }>`
    font-size: ${(props) => props.xl ? '1.9em' : '1.5em'};
    font-weight: 900;
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 0.35em;
`

export function Header(props: { xl?: boolean } & React.HTMLProps<HTMLHeadingElement>) {
    const { xl = false, children } = props
    return <HeaderH1 xl={xl} {...props}>{children}</HeaderH1>
}

const SubtitleH2 = styled("h2")`
    font-size: 1em;
    font-weight: 900;
    margin-bottom: 0.8em;
`

export function Title({
    children
}: React.HTMLProps<HTMLHeadingElement>) {
    return <SubtitleH2>{children}</SubtitleH2>
}

const SubtitleH3 = styled("h3")`
    font-size: 0.8em;
    font-weight: 900;
    color: ${(props) => props.theme.colors.subtitle};
`

export function Subtitle({
    children
}: React.HTMLProps<HTMLHeadingElement>) {
    return <SubtitleH3>{children}</SubtitleH3>
}