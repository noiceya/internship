import { bringData } from "../../services/api-calls";
import "./button-data-call.css"

export const ButtonDataCall = ({ criteria }) => {
  return (
    <div className="button-design"
      onClick={() => {
        bringData(criteria)
          .then((res) => console.log(res))
          .catch((error) => console.log(error));
      }}
    >
      {criteria}
    </div>
  );
};
