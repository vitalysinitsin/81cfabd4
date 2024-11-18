import { FaArchive } from "react-icons/fa";
import { useArchiveCallMutation } from "../store";
import classNames from "classnames";
import { getIconForCallType } from "./util";

export default function CallPreview({ call, setCall, hidden, ...rest }) {
  const [archiveCall] = useArchiveCallMutation();

  const handleArchiveClick = (event) => {
    event.stopPropagation();
    archiveCall(call);
    setCall({});
  };

  return (
    <div
      className={classNames(
        "flex h-14 items-center justify-between shadow-md mb-2 px-3 cursor-pointer",
        hidden && "hidden"
      )}
      {...rest}
    >
      <div className="flex justify-between items-center gap-2">
        {getIconForCallType(call)}
        {call.from}
      </div>
      <button
        onClick={handleArchiveClick}
        className="flex items-center px-3 border border-gray-300 rounded-md h-8"
      >
        <FaArchive />
      </button>
    </div>
  );
}
