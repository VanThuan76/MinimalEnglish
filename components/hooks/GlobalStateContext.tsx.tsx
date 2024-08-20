"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Định nghĩa kiểu dữ liệu cho state
interface GlobalState {
  order: number;
  title: string;
  value: number;
}

// Định nghĩa kiểu cho Context
interface GlobalStateContextProps {
  state: GlobalState;
  setState: React.Dispatch<React.SetStateAction<GlobalState>>;
}

// Tạo context với kiểu dữ liệu đã định nghĩa
const GlobalStateContext = createContext<GlobalStateContextProps | undefined>(undefined);

// Tạo provider để bao bọc các component
export function GlobalStateProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<GlobalState>({
    order: 0, // Giá trị khởi tạo
    title: "",  
    value: 1
  });

  return (
    <GlobalStateContext.Provider value={{ state, setState }}>
      {children}
    </GlobalStateContext.Provider>
  );
}

// Custom hook để sử dụng context
export function useGlobalState() {
  const context = useContext(GlobalStateContext);

  if (!context) {
    throw new Error('useGlobalState phải được sử dụng bên trong GlobalStateProvider');
  }
  return context;
}
