import { create } from "zustand";
import type { Language } from "@/lib/i18n";

type ThemeMode = "light" | "dark";

type UiState = {
  searchTerm: string;
  theme: ThemeMode;
  language: Language;
  setSearchTerm: (value: string) => void;
  setTheme: (value: ThemeMode) => void;
  toggleTheme: () => void;
  setLanguage: (value: Language) => void;
};

export const useUiStore = create<UiState>((set) => ({
  searchTerm: "",
  theme: "light",
  language: "en",
  setSearchTerm: (value) => set({ searchTerm: value }),
  setTheme: (value) => set({ theme: value }),
  toggleTheme: () => set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
  setLanguage: (value) => set({ language: value }),
}));
