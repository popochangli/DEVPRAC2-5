'use client';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Select, MenuItem } from '@mui/material';

export default function DateReserve() {
  return (
    <div className="bg-slate-100 rounded-lg flex flex-row space-x-5 space-y-2 w-fit px-10 py-5 justify-center">

        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Select Date" className='bg-white' />
        </LocalizationProvider>

        <Select variant='standard' className='h-[2em] w-[200px]' id='venue'>
            <MenuItem value='Bloom'>The Bloom Pavilion</MenuItem>
            <MenuItem value='Spark'>Spark Space</MenuItem>
            <MenuItem value='GrandTable'>The Grand Table</MenuItem>
        </Select>

        <button className='bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600' name='Book Venue' type='button'>Book Venue</button>
    </div>
  );
}