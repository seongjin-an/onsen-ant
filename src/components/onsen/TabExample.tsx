import React, {useState} from 'react'
import {Tabbar, Page, Tab, Button, Toast} from "react-onsenui";

export default () => {
    const [index, setIndex] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);
    return (
        <Tabbar
            index={index}
            onPreChange={ () => setIndex(index)}
            onPostChange={() => console.log('post change')}
            position="bottom"
            renderTabs={ (activeIndex, tabbar) => {
                return [
                    {
                        content:<Page>1
                            <Button onClick={() => setOpen(true)}>open</Button>
                            <Toast isOpen={open}>hi</Toast>
                        </Page>,
                        tab: <Tab label="Home" icon="md-home"/>
                    }
                ]
            }}
        />
    )
}