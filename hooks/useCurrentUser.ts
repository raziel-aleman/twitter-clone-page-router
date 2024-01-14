import useSWR from "swr";
import fetcher from "@/libs/fetcher";
import { useSession } from "next-auth/react";

const useCurrentUser = () => {
  const { data: session, status } = useSession();
  const { data, error, isLoading, mutate } = useSWR(status === "authenticated" ? "/api/current" : null, fetcher);
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useCurrentUser;
