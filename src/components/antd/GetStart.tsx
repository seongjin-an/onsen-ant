import React, {useState} from 'react';

import { DatePicker, message, Alert } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';

export default () => {
    const [date, setDate] = useState<moment.Moment>(moment(new Date()));
    const handleChange = (dateObj: moment.Moment | null, dateStr: string) => {
        message.info(`Selected Date: ${dateObj ? dateObj.format('YYYY-MM-DD') : 'None'}`);
        setDate(dateObj!);
    };
    return (
        <div style={{ width: 400, margin: '100px auto' }}>
            <DatePicker defaultValue={date} onChange={handleChange} />
            {/*<div style={{ marginTop: 16 }}>*/}
            {/*    Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}*/}
            {/*</div>*/}
            <Alert message="Selected Date" description={date ? date.format('YYYY-MM-DD') : 'None'} />
        </div>
    );
}