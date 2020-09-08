<template>
    <div class="contBox">
        <contBoxTop :options="options"></contBoxTop>
        <contContents></contContents>
    </div>
</template>

<script>
import contBoxTop  from  "./contBox/contBoxTop.vue"
import contContents  from  "./contBox/contContents.vue"
export default {
    props:{
        options:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        contBoxTop,
        contContents
    },
    data(){
        return{
          
        }
    },
    methods: {
     
    },
    created(){
    
    }

}
</script>

<style >
.contBox{
    margin: 16px auto 0;
    width: 1256px;
    padding: 8px;
    height: 514px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
}

</style>