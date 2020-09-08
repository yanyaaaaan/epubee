<template>
   <div class="contBoxTop">
            <div class="contBoxTopLeft">
                <div>
                    <img src="@/assets/img/reading.svg" alt="">
                    <span>添加更多文件</span>
                </div>
                <div>
                    <img src="@/assets/img/reading2.svg" >
                    <span>清空列表</span>
                </div>
            </div>
            <div class="contBoxTopcenter">
                <div class="contBoxTopcenterDW">  
                    <span>全部转换为</span>
                    <el-cascader
                    v-model="value"
                    :options="options"
                    :show-all-levels="false"
                    placeholder=""
                    :props="{ expandTrigger:'hover'}"
                     @change="handleChange"
                    >
                    </el-cascader>
                </div>
            </div>
            <div class="contBoxTopRight">
                <span>全部下载</span>
            </div>
        </div>
</template>

<script>
export default {
    props:{
        options:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            value: [],
        }
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    },
    created(){
    
    }

}
</script>

<style>
.contBoxTop{
    width: 1256px;
    height: 70px;
    background: #FFD657;
    box-shadow: 0px -2px 8px 0px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    display: flex;
}
.contBoxTopLeft{
    flex: left;
    margin-left: 16px;
    height: 70px;
}
.contBoxTopLeft div{
    float: left;
    width: 140px;
    line-height: 38px;
    height: 38px;
    margin-top: 16px;   
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.8);
    text-align: center;
}
.contBoxTopLeft div:hover{
    background: rgba(255, 255, 255, 0.5);
    border-radius: 4px;
}
.contBoxTopLeft div:first-child{
    margin-right: 24px;
}
.contBoxTopLeft div img{
    vertical-align: sub;
    margin-right: 4px;
}
.contBoxTopcenter{
    flex: 1;
    padding-top: 19px;
    margin-left: 277px;
}

.contBoxTopRight{
    flex: right;
    width: 136px;
    height: 38px;
    margin-top: 16px;
    margin-right: 16px;
    text-align: center;   
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.8);
    line-height: 38px;   
    background: rgba(255, 255, 255, 0.5);
    border-radius: 4px;
}
.contBoxTopRight:hover{
    background: #FFFFFF;
}
.contBoxTopcenter span{    
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.8);
}
 .el-cascader__dropdown{
    background: #FFD657 !important;
    
}
.el-input--suffix{
    width: 98px !important;
    margin-left: 16px;
    background: #FFD657 !important;
}
.el-input--suffix .el-input__inner{
    background: #FFD657 ;
    border: 1px solid #665522;
    color: black;
}
.popper__arrow{
    display: none !important;
}
</style>