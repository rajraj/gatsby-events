import React from "react";
import { Link } from "gatsby";

const EventsList = ({ events }) => (
  <ul>
    {events.map(event => (
      <li>
        <h2>
          <Link to={event.slug}>{event.name}</Link>
        </h2>
        <p>Location: {event.location}</p>
        <p>
          Start Date:{" "}
          {new Date(event.startDate).toLocaleDateString("en-GB", {
            month: "long",
            day: "numeric",
            year: "numeric"
          })}
        </p>
        <p>
          End Date:{" "}
          {new Date(event.endDate).toLocaleDateString("en-GB", {
            month: "long",
            day: "numeric",
            year: "numeric"
          })}
        </p>
        <p>
          URL: <a href={event.url}>{event.url}</a>
        </p>
      </li>
    ))}
  </ul>
);

export default EventsList;
