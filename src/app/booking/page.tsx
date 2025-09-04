import DateReserve from "@/components/DateReserve";
import { FormControl, TextField } from "@mui/material"

export default function Booking() {
    return (
        <main className="w-[100%] flex flex-col items-center gap-[4px]">
            <div className="text-xl font-medium">Venue Booking</div>

            <FormControl>
                <TextField label="Name-Lastname" variant="standard" className="m-2"/>
                <TextField label="Contact-Number" variant="standard" className="m-2"/>
            </FormControl>

            <DateReserve />

             <button className='bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600' name='Book Venue' type='button'>Book Venue</button>
        </main>
    );
}