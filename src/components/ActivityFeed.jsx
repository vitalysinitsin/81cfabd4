import axios from "axios";
import { useEffect, useState } from "react";
import { useFetchCallsQuery } from "../store";

export default function ActivityFeed() {
  const { data, isFetching, error } = useFetchCallsQuery();

  return <div>Activity Feed</div>;
}
