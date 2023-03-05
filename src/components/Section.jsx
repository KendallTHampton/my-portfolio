import {Box} from '@mui/material'
import React from 'react'

const Section = (props) => {
    return (
        <Box {...props}>
            {props.children}
        </Box>
    )
}

export default Section