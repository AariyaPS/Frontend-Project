import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayDridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid"
import useCalendar from '../../../store/Calender';
import "./Calender.css";
import { createEventId } from '../../data/data';
/* eslint-disable no-restricted-globals */

const Calender = () => {
    const { currentEvents, setCurrentEvents } = useCalendar();

    const handleEvents = async (events) => {
        await Promise.resolve(setCurrentEvents(events))
    };

    const handleDataSelect = (selectInfo) => {
        let title = prompt("Please Enter the title for Event");
        let calendarApi = selectInfo.view.calender;

        calendarApi.unselect();
        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.start,
                end: selectInfo.end,
                allDay: selectInfo.allDay,
            });
        }
    };

    const handleEventClick = (clickInfo) => {
        if (confirm("Are you sure you want to delete it?")) {
            clickInfo.event.remove();
        }
    };

    return (
        <div className="calendar-container">
            <div>
                <FullCalendar
                    plugins={[dayDridPlugin, interactionPlugin, timeGridPlugin]}
                    headerToolbar={{
                        left: "prev, next today ",
                        center: "title",
                        right: "dayGridMonth, timeGridWeek,timeGridDay"
                    }}

                    allDaySlot={false}
                    initialView="timeGridWeek"
                    slotDuration={"01:00:00"}
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    datMaxEvents={true}
                    weekends={true}
                    nowIndicator={true}
                    initialEvents={currentEvents}
                    //to handle events
                    eventsSet={handleEvents}
                    select={handleDataSelect}
                    eventClick={handleEventClick}
                />
            </div>
        </div>
    );
};

export default Calender
