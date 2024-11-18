import classNames from "classnames";
import { ImSpinner2 } from "react-icons/im";

export default function Button({ loading, children, className, ...rest }) {
  return (
    <button
      className={classNames(
        "flex justify-center gap-4 items-center relative",
        className
      )}
      {...rest}
    >
      {loading && (
        <ImSpinner2 className="text-blue-600 animate-spin absolute left-6" />
      )}
      {children}
    </button>
  );
}
