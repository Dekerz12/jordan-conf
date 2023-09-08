import { favoritePost, unfavoritePost } from "../utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useFavoritePost() {
  const queryClient = useQueryClient();
  const { mutate: favoriteMutation } = useMutation(
    (data) => {
      data.favorited ? unfavoritePost(data) : favoritePost(data);
    },
    {
      onSuccess: () => {
        console.log("Favorite Success");
        return queryClient.invalidateQueries({ queryKey: ["posts"] });
      },
    }
  );

  return favoriteMutation;
}
