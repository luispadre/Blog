import React from 'react'
import {Cards,ParagraphNews,TitleNews} from './../../helpers/VarComponents'
import {Box} from 'rbx'
import Scrollable from '../../Components/Scrollable'
import { Noticies } from './../../Styles/Styles'
export default function SectionNews(){
    return(
        <>
        <Noticies  >
            <Box style={{ background:"darkgray"}} >
                <TitleNews title="Noticias Decá" align="center"/>
            </Box>
            <Scrollable />
        </Noticies>
        </>
    )
}