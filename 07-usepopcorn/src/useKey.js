import { useEffect } from "react";

export function useKey(key, callbackAction) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          callbackAction();
          // console.log("closing.......");
        }
      }

      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },

    [key, callbackAction]
  );
}
