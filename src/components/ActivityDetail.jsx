import { getIconForCallType } from "./util";
import { SlCallIn, SlCallOut } from "react-icons/sl";

export default function ActivityDetail({ call }) {
  return (
    <div className="flex bg-gray-100 w-full items-start justify-center">
      {call?.id ? (
        <table className="mt-10">
          <tbody>
            <tr>
              <td>ID: </td>
              <td>
                <div className="px-2 font-mono text-xs border border-gray-400 bg-white rounded-md">
                  {call.id}
                </div>
              </td>
            </tr>
            <tr>
              <td>Created at: </td>
              <td>{new Date(call.created_at).toLocaleString()}</td>
            </tr>
            <tr>
              <td>Direction: </td>
              <td>
                {call.direction === "outbound" ? <SlCallOut /> : <SlCallIn />}
              </td>
            </tr>
            <tr>
              <td>From: </td>
              <td>
                <div className="flex items-center gap-4">
                  {getIconForCallType(call)}
                  <span>{call.from}</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>To: </td>
              <td>{call.to}</td>
            </tr>
            <tr>
              <td>Via: </td>
              <td>{call.via}</td>
            </tr>
            <tr>
              <td>Diration: </td>
              <td>{call.duration} sec</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div className="flex h-full justify-center items-center">
          <span className="text-3xl">Select a call to get detailed info</span>
        </div>
      )}
    </div>
  );
}
