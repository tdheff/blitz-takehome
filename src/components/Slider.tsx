import { styled } from 'goober'
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'

const SliderInput = styled("input")`
    margin: 1.1em 0;
    -webkit-appearance: none;
    width: 100%;
    height: 0.6em;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 0.2em;
    background-image: linear-gradient(90deg, ${props => props.theme.colors.subtle}, ${props => props.theme.colors.primary});
    background-size: 100% 100%;
    background-repeat: no-repeat;

    &::-moz-range-thumb, &::-webkit-range-thumb {
        -webkit-appearance: none;
        height: 2.5em;
        width: 2.5em;
        border-radius: 50%;
        border: 0px;
        background: #fff;
        cursor: ew-resize;
    }
`

export interface SliderProps {
    value: number
    min: number
    max: number
    step: number
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export function Slider({ value, min, max, step, onChange }: SliderProps) {
    const [event, setEvent] = useState<React.ChangeEvent<HTMLInputElement> | null>(null)
    const [debouncedEvent] = useDebounce(event, 40)

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setEvent(event)
    }

    useEffect(() => {
        if (onChange && debouncedEvent) onChange(debouncedEvent)
    }, [debouncedEvent])
    return <SliderInput defaultValue={value} type="range" min={min} max={max} step={step} onChange={handleChange} />
}