<template>
  <div >
    <div class="content">
      <div class="drag-area" @dragover="fileDragover" @drop="fileDrop">
        <div v-if="fileName" class="file-name">{{ fileName }}</div>
        <div v-else class="uploader-tips">
          <span>将文件拖拽至此，或</span>
          <label for="fileInput" style="color: #11A8FF; cursor: pointer">点此上传</label>
        </div>
      </div>
    </div>

    <div class="footer">
      <input type="file" id="fileInput" @change="chooseUploadFile" style="display: none;">
      <label for="fileInput" v-if="fileName" style="color: #11A8FF; cursor: pointer">选择文件</label>

      <button @click="uploadOk">提交</button>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
          fileName: '',
          batchFile: '',
          MAX_FILE_SIZE: 10 * 1000 * 1000
        }
      },
    methods: {
        // 点击上传
        chooseUploadFile (e) {
          const file = e.target.files.item(0)

          if (!file) return
          if (file.size > this.MAX_FILE_SIZE) {
            return alert('文件大小不能超过10M')
          }

          this.batchFile = file
          this.fileName = file.name

          // 清空，防止上传后再上传没有反应
          e.target.value = ''
        },
        // 拖拽上传
        fileDragover (e) {
          e.preventDefault()
        },
        fileDrop (e) {
          e.preventDefault()
          const file = e.dataTransfer.files[0] // 获取到第一个上传的文件对象

          if (!file) return
          if (file.size > this.MAX_FILE_SIZE) {
            return alert('文件大小不能超过10M')
          }

          this.batchFile = file
          this.fileName = file.name
        },
        // 提交
        uploadOk () {
          if (this.batchFile === '') {
            return alert('请选择要上传的文件')
          }

          let data = new FormData()
          data.append('upfile', this.batchFile)

          // ajax
        }
    }}
</script>

<style>
 * {
      font-size: 14px;
    }
    .drag-area {
      height: 200px;
      width: 300px;
      border: dashed 1px gray;
      margin-bottom: 10px;
      color: #777;
    }
    .uploader-tips {
      text-align: center;
      height: 200px;
      line-height: 200px;
    }
    .file-name {
      text-align: center;
      height: 200px;
      line-height: 200px;
    }
</style>