import { format } from "date-fns";

const AgendaView = ({ events }) => {
  const sortedEvents = events.sort((a, b) => a.date - b.date);

  return (
    <div className="agenda-view">
      {sortedEvents.map((event, index) => (
        <div key={index} className="border-b pb-2 mb-2">
          <h3 className="title">{event.title}</h3>
          <p>
            <span>Start:</span>{" "}
            <span>{format(event.start, "MMMM d, yyyy - H:mm")}</span>
          </p>
          <p>
            <span>End:</span>{" "}
            <span>{format(event.end, "MMMM d, yyyy - H:mm")}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default AgendaView;
