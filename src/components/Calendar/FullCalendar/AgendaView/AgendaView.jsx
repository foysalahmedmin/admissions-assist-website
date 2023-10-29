import { format } from "date-fns";

const AgendaView = ({ events }) => {
  const sortedEvents = events.sort((a, b) => a.date - b.date);

  return (
    <div className="agenda-view">
      {sortedEvents.map((event, index) => (
        <div key={index} className="event">
          <h3>{format(event.start, "MMMM d, yyyy - H:mm")}</h3>
          <p>{event.title}</p>
        </div>
      ))}
    </div>
  );
};

export default AgendaView;
