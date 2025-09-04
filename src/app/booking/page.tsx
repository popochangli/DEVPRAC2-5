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
        </main>
    );
}