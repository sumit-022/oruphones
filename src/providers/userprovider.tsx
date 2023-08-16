import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

interface IAccountContext {
  user: UserType | null;
  loading?: boolean;
  setAuthState: React.Dispatch<React.SetStateAction<boolean>>;
  setUpdateState: React.Dispatch<React.SetStateAction<boolean>>;
}

const accountContext = createContext<IAccountContext>({} as IAccountContext);
export const useAccount = () => {
  const context = useContext(accountContext);

  if (!context) {
    throw new Error("useAccount must be used within an AccountProvider");
  }

  return context;
};

export const AccountProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);
  const [authState, setAuthState] = useState(false);
  const [updateState, setUpdateState] = useState(false);

  useEffect(() => {
    axios
      .get("/api/user", {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((res) => {
        if (res.data.success) {
          setUser(res.data.user);
        } else {
          res.data.message === "Unauthorized";
        }
      })
      .catch((err) => {
        err.response.data.message === "Unauthorized";
      })
      .finally(() => {
        setLoading(false);
      });
  }, [authState, updateState]);

  return (
    <accountContext.Provider
      value={{ user, loading, setAuthState, setUpdateState }}
    >
      {children}
    </accountContext.Provider>
  );
};
