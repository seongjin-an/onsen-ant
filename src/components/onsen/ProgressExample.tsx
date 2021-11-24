import React from "react";
import {ProgressBar, ProgressCircular} from "react-onsenui";

export default () => {
    return(
        <>
            <ProgressCircular indeterminate></ProgressCircular>
            <ProgressCircular value={30}/>
            <ProgressBar indeterminate></ProgressBar>
        </>
    )
}