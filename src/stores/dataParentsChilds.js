import { defineStore } from 'pinia'

export const useParentChildStore = defineStore('ParentChildStore', {
  state: () => ({
    dataParentsChilds: []
  }),

  actions: {
    addParentChild(data) {
      this.dataParentsChilds.push(data)
      localStorage.setItem('ParentChildStore', JSON.stringify(this.dataParentsChilds))
    },
    getParentChild() {
      if(localStorage.getItem('ParentChildStore')) {
        this.dataParentsChilds = JSON.parse(localStorage.getItem('ParentChildStore'))
      }
    },
    delFamily(id) {
      this.dataParentsChilds = this.dataParentsChilds.filter(family => family.id !== id)
      localStorage.setItem('ParentChildStore', JSON.stringify(this.dataParentsChilds))
    }
  }
}
)