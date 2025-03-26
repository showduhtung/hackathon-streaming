"use client";

import { createContext, useContext } from "react";

function createSafeContext<ContextValue>(errorMessage: string) {
  const Context = createContext<ContextValue | null>(null);

  const useSafeContext = () => {
    const ctx = useContext(Context);

    if (ctx === null) throw new Error(errorMessage);
    return ctx;
  };

  const SafeProvider = ({
    children,
    value,
  }: {
    value: ContextValue;
    children: React.ReactNode;
  }) => <Context.Provider value={value}>{children}</Context.Provider>;

  return [SafeProvider, useSafeContext] as const;
}

export { createSafeContext };
