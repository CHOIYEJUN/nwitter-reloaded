import {Box} from "@chakra-ui/react";
import FullCalendar from "@fullcalendar/react";
import {EventContentArg} from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function CalenderBox() {
    const events = [
        { title: 'Meeting1',
            start: new Date('2023-10-29'),
            end: new Date('2023-10-31'),
            allDay: true,
            color: 'red'


        },

    ]

    const renderEventContent=(eventInfo:EventContentArg)=> {
        return (
            <>
                <i>{eventInfo.event.title}</i>
            </>
        )
    }


    return (
        <Box>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView='dayGridMonth'
                events={events}
                eventContent={renderEventContent}
            />


        </Box>
    );

}