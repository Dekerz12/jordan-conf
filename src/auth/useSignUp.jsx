import { useNavigate } from "react-router";
import { signUp } from "../utils";
import { useMutation } from "@tanstack/react-query";
import useModal from "../context/useModal";
export function useSignUp() {
  const navigate = useNavigate();
  const { loginModal } = useModal();
  const { mutate: signUpMutation } = useMutation(
    (user) => {
      return signUp(user);
    },
    {
      onSuccess: () => {
        loginModal();
      },
    }
  );

  return { signUpMutation };
}
