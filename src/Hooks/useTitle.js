import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Architect`;
  }, [title]);
};

export default useTitle;
