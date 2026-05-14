import { createContext, useContext, useState } from "react";

type SelectionContextType = {
  selectedIds: string[];
  toggleSelection: (id: string) => void;
  clearSelection: () => void;
  selectAll: (ids: string[]) => void;
};

const SelectionContext = createContext<SelectionContextType | null>(null);

export function SelectionProvider({ children }: { children: React.ReactNode }) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  function toggleSelection(id: string) {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  }

  function selectAll(ids: string[]) {
    setSelectedIds(ids);
  }

  function clearSelection() {
    setSelectedIds([]);
  }

  return (
    <SelectionContext.Provider
      value={{
        selectedIds,
        toggleSelection,
        clearSelection,
        selectAll,
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
}

export function useSelection() {
  const context = useContext(SelectionContext);

  if (!context) {
    throw new Error("Missing provider");
  }

  return context;
}
