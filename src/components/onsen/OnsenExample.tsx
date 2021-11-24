import React from 'react'
import { Page } from 'react-onsenui';
import OnsenButton from "./button/OnsenButton";
import ActionSheetExample from "./ActionSheetExample";
import CheckboxExample from "./CheckboxExample";
import FabExample from "./FabExample";
import ListExample from "./ListExample";
import {ProgressBar} from "../../types/onsen";
import ProgressExample from "./ProgressExample";
import TabExample from "./TabExample";
import AlertExample from "./AlertExample";

export default function OnsenExample(){
    return(
        <Page>
            <AlertExample/>
            {/*<TabExample/>*/}
            <ProgressExample/>
            <ListExample/>
            <FabExample/>
            <CheckboxExample/>
            <ActionSheetExample/>
            <OnsenButton/>
        </Page>
    )
}