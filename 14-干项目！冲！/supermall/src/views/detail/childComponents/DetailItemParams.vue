<template>
    <div class="item-params">
        <div class="item-desc">
            {{itemParams.rule.disclaimer}}
        </div>
        <table class="item-size"> 
            <tr v-for="item in itemParams.rule.tables[0]" :key="item.index">
                <td v-for="itemtd in item" :key="itemtd.index">
                    {{itemtd}}
                </td>
            </tr>
        </table>
        <table class="item-info">
            <tr v-for="item in itemParams.info.set" :key="item.index">
                <td class="set-key">{{item.key}}</td>
                <td class="set-value">{{item.value}}</td>
            </tr>   
        </table>
    </div>
</template>

<script>
export default {
props:{
    itemParams:{
        type:Object
    }
}    

}
</script>

<style scoped>
.item-desc{
    padding: 30px 10px 30px 10px;
   
    border-bottom:3px solid rgba(100, 100, 100, .5) ;

    font-size: 10px;
}

.item-size{
    margin: 20px 5px 5px 20px;
    width: 90vw;
    /* 使得td间的边框连接起来 */
    border-collapse: collapse;
}
.item-size tr{
    height: 35px;
}
.item-size td{
    border-bottom:1px solid rgba(100, 100, 100, .1) ;
}
.item-size tr:last-child td{
    border-bottom: 3px solid rgba(100, 100, 100, .5) ;
}

.item-info{
    width: 90vw;
    margin: 0px 5px 10px 20px;
}
.item-info tr{
    height: 35px;
}
.item-info tr td{
    border-bottom:1px solid rgba(100, 100, 100, .1) ;
}
.set-key{
    width: 30vw;
}
.set-value{
    color: var(--color-high-text);
}

.item-params{
    padding-bottom: 25px;
    border-bottom: 3px solid rgba(100, 100, 100, .5) ;
}
</style>