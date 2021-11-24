import React, {useState} from "react";
import {Button, ActionSheet, ActionSheetButton} from "react-onsenui";

export default () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const handleClick = () => {
        console.log('click');
        setIsOpen(true);
    }
    return(
        <div>
            <Button onClick={handleClick}>action sheet open</Button>
            <ActionSheet isOpen={isOpen} title="action sheet ">
                <ActionSheetButton>label1</ActionSheetButton>
                <ActionSheetButton>label2</ActionSheetButton>
                <ActionSheetButton>label3</ActionSheetButton>
                <ActionSheetButton>label4</ActionSheetButton>
                <ActionSheetButton modifier="destructive">cancel</ActionSheetButton>
                <ActionSheetButton>save</ActionSheetButton>
            </ActionSheet>
        </div>
    )
}