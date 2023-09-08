import { create } from "zustand";
const initialState = {
  shoeParts: [
    {
      name: "Collar",
      color: "black",
    },
    {
      name: "Base",
      color: "black",
    },
    {
      name: "Base Skin Cap",
      color: "black",
    },
    {
      name: "Swoosh",
      color: "black",
    },
    {
      name: "Swoosh Outline",
      color: "black",
    },
    {
      name: "Laces",
      color: "black",
    },
    {
      name: "Plate",
      color: "black",
    },
    {
      name: "Cyclone",
      color: "black",
    },
    {
      name: "Heel",
      color: "black",
    },
    {
      name: "Label Personalization",
      color: "black",
    },
  ],
  selectedPart: 0,
  status: "inactive",
  currentModel: "",
  draftId: 0,
  title: `Untitled-${crypto.randomUUID()}`,
};

const useEditor = create((set) => {
  return {
    ...initialState,
    setSelectedPart: (idx) => set(() => ({ selectedPart: idx })),
    setShoePartsColor: (bg) =>
      set((state) => {
        return state.shoeParts.map((shoe, i) => {
          if (i === state.selectedPart) {
            return (shoe.color = bg);
          }
          return shoe;
        });
      }),
    setDraft: (id) => set(() => ({ draftId: id })),
    setShoeParts: (parts) => set(() => ({ shoeParts: parts })),
    active: () => set(() => ({ status: "active" })),
    setCurrentModel: (model) => set(() => ({ currentModel: model })),
    reset: () => set(initialState),
    setTitle: (newTitle) => set(() => ({ title: newTitle })),
  };
});

export default useEditor;
