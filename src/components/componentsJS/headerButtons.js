import {mapGetters} from 'vuex'
import clickObject from './clickEvent.js'
export default {
    name: 'HeaderButtons',
    data() {
        return {
            invalid : 4,
            selected: this.getPageId,
            isActive: clickObject.handleClick,
            labelIndex: '',
            currentIndex: ''
        }
    },
     computed: {
        ...mapGetters(['getPageId', 'getAllPages'])
    },
    created() {
        var pageId = sessionStorage.getItem('pageId') ? sessionStorage.getItem('pageId') : this.getPageId
        this.$store.dispatch('changeActiveButton',pageId)
        var page = pageId.toLowerCase()
        this.$router.push('/'+page)
    },
    methods: {
      check(label){
            return(label === this.getPageId ? true : false)
      },
      pageSubmit(label) {
          for(var key in this.getAllPages) {
            if(label == this.getAllPages[key])
            {
                this.labelIndex = key
            }
            if(this.getPageId == this.getAllPages[key]) {
                this.currentIndex = key
            }
          }
          if(this.labelIndex < this.currentIndex)
            return true
        return false
      }
    } 
}