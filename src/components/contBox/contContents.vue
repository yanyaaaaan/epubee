<template>
  <div class="contContent">
        <el-upload
        v-if="fileList.length == 0"
        drag
        :on-change="handleChange"
        :on-success="success"
        :file-list="fileList"
        :show-file-list="true"
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple>
            <div  class="contContentDIV">
                <img class="contContentImg" src="@/assets/img/reading1.svg" />
                <div  class="uploadText">拖拽或点击上传电子书</div>
            </div>
        </el-upload>
        <div v-else>
                123
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            fileList:[
                 
                ],
                
        }
        
    },
    methods: {
       handleChange(file, fileList) {
        console.log(file);
        console.log(fileList);
        this.fileList=fileList
      },
      success(file, fileList){
          this.fileList=fileList
      }
      
    }
}
</script>

<style>
.contContent{
    margin: 0 auto;
    height: 444spx;
}
.contContentDIV{
    padding: 10px;
    margin-top: 25px;
    background: #FFFFFF;
    position: absolute;
    width: 200px;
    height: 80px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
.uploadText{
    margin-top: 10px;
}
.el-upload{
    width: 100%;
}
.contContent  .el-upload-dragger{
    position: relative;
    top: 25px;
    width: 1220px;
    height: 400px;
    margin: 0 auto;
    background-color: transparent;
    border: 1px dashed transparent
}
.contContent  .el-upload-dragger:hover{
    border: none;
}
.contContent  .is-dragover{
    border: 3px dashed #FFD657 !important;

}
.contContent  .is-dragover:before{
    content: "松手上传文件";
    line-height: 430px;
    color: #FFC100;
    font-size: 24px;
    text-align: center;
}
.contContent  .is-dragover .contContentDIV{
    display: none;
}

</style>