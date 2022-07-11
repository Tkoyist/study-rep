import BackTop from 'components/content/backtop/BackTop'

export const backTopMixin = {
  data() {
    return {
      isMore1000:false
    }
  },
  methods : {
    backTopClick() {
      //可以通过refs拿到组件中的属性和方法，scrollTo(x,y,ms)
      this.$refs.wrapper.scroll.scrollTo(0,0,500)
    },
  },
  components:{
    BackTop
  }
}
