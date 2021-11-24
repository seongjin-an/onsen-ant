import React from "react";
import {List, ListItem, ListHeader, Checkbox, Button} from "react-onsenui";

export default () => {
    return(
        <>
            <List>
                <ListHeader>Thumbnails and titles</ListHeader>
                <ListItem tappable>
                    <div className="left">
                        <img className="list-item__thumbnail" src="https://placekitten.com/g/40/40"/>
                    </div>
                    <div className="center">
                        <span className="list-item__title">Cutest kitty</span><span className="list-item__subtitle">On the Internet</span>
                    </div>
                    <div className="right">
                        hi
                    </div>
                </ListItem>

            </List>
            <List
                dataSource={['Row 1', 'Row 2']}
                renderHeader={() => <ListHeader>Thumbnails and titles2</ListHeader>}
                renderRow={(row, idx) => (
                    <ListItem>
                        {row}
                        <Button modifier="quiet" onClick={() => console.log('hello')}>Remove</Button>
                    </ListItem>
                )}
                renderFooter={() => <div>Thumbnails and footer</div>}
            />
        </>
    )
}