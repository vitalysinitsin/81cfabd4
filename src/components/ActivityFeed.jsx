import {
  useArchiveCallMutation,
  useFetchCallsQuery,
  useResetAllCallsMutation,
} from "../store";
import CallPreview from "./CallPreview";
import Button from "./Button";

export default function ActivityFeed({ setCall }) {
  const { data, isFetching, error } = useFetchCallsQuery();
  const [resetAllCalls] = useResetAllCallsMutation();
  const [archiveCall] = useArchiveCallMutation();

  const resetAllCallsClick = () => {
    resetAllCalls();
  };

  const archiveAllCallsClick = () => {
    data.forEach((call) => archiveCall(call));
  };

  let content = "";
  if (error) {
    content = "Error Loading Calls.";
  } else if (data) {
    content = data.map((call) => (
      <CallPreview
        key={call.id}
        call={call}
        hidden={call.is_archived}
        onClick={() => {
          setCall(call);
        }}
        setCall={setCall}
      />
    ));
  }
  return (
    <div className="w-[30em] overflow-hidden relative">
      <Button
        onClick={resetAllCallsClick}
        className="flex h-10 w-full mt-1 mb-4w-full shadow-inner border-b-4 "
        loading={isFetching}
      >
        Reset All Calls
      </Button>
      <Button
        onClick={archiveAllCallsClick}
        className="flex h-10 w-full mt-1 mb-4w-full shadow-inner border-b-4 "
        loading={isFetching}
      >
        Archive All Calls
      </Button>
      <div className="overflow-auto absolute h-full w-full">{content}</div>
    </div>
  );
}
