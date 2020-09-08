<template>
  <div class="indexcontText">
            <div>
                <h2 class="indexcontTextH2">小蜜蜂在线电子书转换器</h2>
                <h2 >Online ebook converter</h2>
            </div>
            <div class="indexcontTextP">
                <a href="javascrit:;">点击下载桌面版,除了电子书转换、管理,还能给DRM脱壳</a>
                <div>
                    <span>Cloud ID :</span>
                    <span>{{Cloudid.id}}</span>
                    <el-tooltip
                    :content="Cloudid.CloudTxt"
                    effect="light"
                    :visible-arrow="false"
                    placement="top-end"
                    >
                        <img  src="@/assets/img/cloud.svg">
                    </el-tooltip>
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
    props:{
        Cloudid:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style>
.indexcontText{
    width: 1272px;
    margin: 0 auto;
    
}
.indexcontTextH2{
    padding-top: 177px;
    width: 520px;
    font-size: 46px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.8);
    line-height: 67px;
}
.indexcontText H2{
font-size: 42px;
}

.indexcontTextP{
    padding-top: 16px;
    height: 25px;
}
.indexcontTextP a{
    float: left;  
    height: 25px;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #007AFF;
    line-height: 25px;
}
.indexcontTextP a:hover{
    text-decoration:underline;

}
.indexcontTextP div{
    float: right;
    width: 200px;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.8);
    line-height: 25px;
}
.indexcontTextP div span:last-of-type{
    color: #007AFF;
}
.indexcontTextP div img{
  vertical-align: sub;
  margin-left: 2px;
}
.el-tooltip__popper{
    width: 894px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;  
    display: block;
    background: rgba(255, 255, 255, 0.5) !important;
}

</style>