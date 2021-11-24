import React, {useState} from "react";
import { AlertDialog, Button } from "react-onsenui";

export default () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return(
        <div>
            <Button onClick={() => setIsOpen(true)}>OPEN</Button>
            <AlertDialog isOpen={isOpen} onCancel={() => setIsOpen(false)} isCancelable={true}>
                <div className="alert-dialog-title">Warning</div>
                <div className="alert-dialog-content">Error</div>
                <div className="alert-dialog-footer">
                    <Button className="alert-dialog-button" onClick={() => setIsOpen(false)}>Cancel</Button>
                    <Button className="alert-dialog-button" onClick={() => setIsOpen(false)}>ok</Button>
                </div>
            </AlertDialog>
        </div>
    )
}