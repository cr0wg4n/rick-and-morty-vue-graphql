import { defineStore } from "pinia";

interface SearchStoreState {
  searchText: string,
}

export const useSearchStore = defineStore<'search', SearchStoreState>('search', {
  state: () => ({
    searchText: ''
  }),
  actions: {
    setSearchText (searchText: string) {
      this.searchText = searchText
    }
  }
})

