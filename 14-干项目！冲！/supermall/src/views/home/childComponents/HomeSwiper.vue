<template>
        <swiper>
           <swiper-item v-for="item in banners" :key="item.index">
               <a :href="item.link">
                <img :src="item.image" alt="" @load="imgLoad">
               </a>
           </swiper-item>
       </swiper>
</template>


<script>
import {Swiper, SwiperItem} from"@/components/common/swiper/index"
export default {
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        SwiperItem,
        Swiper
    },
    data(){
        return {
            isLoad:false
        }
    },
    methods:{
        imgLoad(){
            if(!this.isLoad){
                // 使得发出事件只需要发出一次
                this.$emit("swiperImgLoad")
                this.isLoad=true
            }
            
        }
    }
}
</script>
