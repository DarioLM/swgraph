import React, { useEffect, createContext, useState, useContext } from 'react';
import { useRouter } from 'next/router';

const MAX_HISTORY_ENTRIES = 3;

interface History {
  path?: string
  label?: string
}

interface HistoryProps {
  history: History[]
  setHistory(data: string): void
}

const HistoryContext = createContext<HistoryProps>({} as HistoryProps)

const HistoryProvider: React.FC = ({ children }) => {
  const { asPath, push, pathname } = useRouter()
  const [history, setHistory] = useState<History[]>([])


  useEffect(() => {
    if (asPath && asPath.includes("characters/") && !history.some(entry => entry?.path?.includes(asPath))) {
      setHistory(previous => [{ path: asPath, label: decodeURI(asPath.split("/").pop()) }, ...previous.slice(0, MAX_HISTORY_ENTRIES - 1)])
    }
  }, [asPath]);

  return (
    <HistoryContext.Provider
      value={{
        history,
        setHistory: (path) => setHistory(history => ([...history, path])),
      }}
    >
      {children}
    </HistoryContext.Provider>
  )
}

export default HistoryProvider;

export const useHistory = (): HistoryProps => {
  const context = useContext(HistoryContext)
  return context
}