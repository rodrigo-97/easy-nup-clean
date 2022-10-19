import { Fragment } from "react"

type Props = {
    condition: boolean,
    then: React.ReactElement,
    else?: React.ReactElement,
}

export function If({ condition, then, else: otherwise }: Props) {
    return (
        <Fragment>
            {condition ? then : otherwise}
        </Fragment>
    )
}