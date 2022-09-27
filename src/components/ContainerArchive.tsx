import React, { useState } from 'react';
import { INote } from '../types/noteData';

interface ContainerArchiveProps {
    note: INote
}

export function ContainerArchive({note}: ContainerArchiveProps) {
   
    return (
        <div className="container" >                   
            <button className="btn">
                <img height="25" width="25" src="https://img.icons8.com/external-jumpicon-glyph-ayub-irawan/344/external-_36-user-interface-jumpicon-(glyph)-jumpicon-glyph-ayub-irawan.png"/>
            </button>          
            <button className="btn">
                <img height="25" width="25" src="https://img.icons8.com/material-sharp/344/trash.png"/>
            </button>
        </div> 
    )
}