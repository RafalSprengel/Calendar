import { useState } from 'react';
import plLocale from 'date-fns/locale/pl';
import { format } from 'date-fns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import '../Styles/Calendar.css'

//let today = addDays(new Date());
//console.log(today)


export default function DatePickerValue() {
    let currentDate = new Date();
    const [checkin, setcheckin] = useState(currentDate);
    const [checkout, setcheckout] = useState(currentDate);
    console.table(checkin)

    console.log(checkin)
    return (
        <div>

            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={plLocale}>
                <DatePicker
                    label="Check-In"
                    value={checkin}
                    onChange={(newValue) => setcheckin(newValue)}
                    disablePast
                />
                <DatePicker
                    label="Check-Out"
                    value={checkout}
                    onChange={(newValue) => setcheckout(newValue)}
                    disablePast
                />
            </LocalizationProvider>
            <div id='result'>
                Check-In: {checkin.getDate()}/{checkin.getMonth() + 1}/{checkin.getFullYear()} ,<br></br>
                Check-Out: {format(checkout, 'dd/MM/yyyy')}
            </div>

        </div >
    );
}