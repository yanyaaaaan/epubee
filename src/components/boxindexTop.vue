<template>
  <div class="indexTop">
        <div class="indexTopbox">
                <img class="indexTopLogo" src="@/assets/img/logo.svg" alt="">
            <div class="indexTopRight">
                <div class="indexTopRightLf">
                    <a href="javascript:;">
                        <span>首页</span>
                    </a>
                </div>
                <div class="indexTopRightRG">
                    <div  v-for="(item,index) in indextop" :key="index">
                        <a class="indexTopRightRGdw" v-if="item.chilide" href="javascript:;">
                            <span>{{item.tatle}}</span>
                            <ul class="TopRightDown"  > 
                                <li v-for="(itemli,index) in item.chilide" :key="index">
                                    <span>{{itemli.tatle}}</span>
                                    <span v-for="(item,index) in itemli.chilides" :key="index">{{item}}</span>
                                </li>                         
                            </ul>
                        </a>
                    <a v-else>
                        <span>{{item.tatle}}</span>
                    </a>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
            return{
            
            }
        },
        components:{},
        props:{
            indextop:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods:{
            
        },
        
}
</script>

<style>
.indexTop{
    width: 100%;
    height: 75px;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
}
.indexTopbox{
    width: 1272px;
    height: 75px;
    margin: 0 auto;
}
.indexTopLogo{

    height: 67px;
    float: left;
}
.indexTopRight{
    float: right;
    height: 75px;
}
.indexTopRightLf{
    float: left;
    width: 96px;
    height: 38px;
    line-height: 38px;
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    color: rgba(0, 0, 0, 0.8);
    margin-top: 19px;
    background: #FFD657;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
    font-weight: bold;
    text-align: center;
}
.indexTopRightRG{
  float: right;
  height: 75px;
  line-height: 75px;
}
.indexTopRightRG div{
    text-align: center;
    float:left;
    margin-left: 72px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.8);
}

.indexTopRightRGdw{
    display: block;
    position: relative;
    overflow: inherit;
}
.TopRightDown{
    position: absolute;
    left: 0px;
    top: 75px;
    width: 200px;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
    text-align: left;
    font-size: 14px;
    display: none;
    padding: 5px 0;
}
.TopRightDown li{
    line-height: 24px;
}
.TopRightDown li span{
    display: block;
    padding-left: 5px;
}
.TopRightDown li span:first-child{
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
}
.indexTopRightRGdw:hover ul{
    display: block;
}
.TopRightDown li span{
    display: block;
}
.TopRightDown li span:hover{
    background:#D4D4D4;
}
</style>