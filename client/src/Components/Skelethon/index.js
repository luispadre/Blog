import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';


export function Skelethon1(){
    return(
        <>
        </>
    )
}
export function Skelethon2(){
    return(
        
            <Box width="100%" marginRight={0.5} my={5}>
                <Skeleton variant="rect" width="100%" height={190} />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton width="50%" />
            </Box>
        
    )
}