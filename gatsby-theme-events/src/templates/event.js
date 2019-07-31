import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import EventDetail from "../components/event-detail";

export const query = graphql`
  query($eventID: String!) {
    event(id: { eq: $eventID }) {
      name
      location
      startDate(formatString: "MMMM D, YYYY")
      endDate(formatString: "MMMM D, YYYY")
      url
      slug
    }
  }
`;

const Event = ({ data: { event } }) => (
  <Layout>
    <EventDetail {...event} />
  </Layout>
);

export default Event;
