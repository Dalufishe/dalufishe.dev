import { cx, css } from '@emotion/css'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { classes } from '../../../utils/classes'

export default function Block({ className, value }) {
    return (
        <div className={classes(
            "w-full",
            css`height: ${value * 4}px;`,
            className)} />
    )
}
