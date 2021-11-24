import React from "react";
import { Button } from 'react-onsenui'

export default function OnsenButton(){
    return(
        <>
            <Button modifier="large--cta">
                Tap Me
            </Button>
            <br/>
            <br/>
            <Button disabled={true}>
                disabled
            </Button>
            <br/>
            <br/>
            <Button modifier="outline">
                outline
            </Button>
            <br/>
            <br/>
            <Button modifier="light">
                light
            </Button>
            <br/>
            <br/>
            <Button modifier="quiet">
                quiet
            </Button>
            <br/>
            <br/>
            <Button modifier="cta">
                cta
            </Button>
            <br/>
            <br/>
            <Button modifier="large--quiet">
                large--quiet
            </Button>
            <br/>
            <br/>
            <Button modifier="material">
                material
            </Button>
            <br/>
            <br/>
            <Button modifier="material--flat">
                material--flat
            </Button>

        </>
    )
}