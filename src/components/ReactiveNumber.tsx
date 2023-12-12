import { useEffect, useState } from "react"

function lerp(a: number, b: number, alpha: number): number {
    return a + alpha * (b - a)
}

export interface ReactiveNumberProps {
    value: number
    digits?: number
}

export function ReactiveNumber({ value, digits = 1 }: ReactiveNumberProps) {
    const [currentValue, setCurrentValue] = useState(value)

    useEffect(() => {
        if (Math.abs(value - currentValue) > 0.05) {
            setTimeout(() => setCurrentValue(lerp(currentValue, value, 0.1)), 10)
        }
    }, [value, currentValue]);

    return <>{currentValue.toFixed(digits)}</>
}