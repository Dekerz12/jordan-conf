import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../utils";
function usePosts() {
  return useQuery(["posts"], getPosts, {
    onError: () => {
      console.log("error");
    },
  });
}

export default usePosts;
