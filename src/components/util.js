import { FaPhone, FaPhoneSlash, FaVoicemail } from "react-icons/fa6";

export const getIconForCallType = ({ call_type }) => {
  let selectIcon;
  switch (call_type) {
    case "answered":
      selectIcon = <FaPhone className="w-4 text-green-600" />;
      break;
    case "missed":
      selectIcon = <FaPhoneSlash className="w-6 text-red-500" />;
      break;
    case "voicemail":
      selectIcon = <FaVoicemail className="w-4" />;
      break;
    default:
      selectIcon = "";
  }

  return selectIcon;
};
