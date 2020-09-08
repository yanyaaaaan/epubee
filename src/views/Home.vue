<template>
    <div class="home">
        <IndexTop :indextop="indextop"></IndexTop>
        <indexcontText :Cloudid="Cloudid"></indexcontText>
        <indexContBox :options="options"></indexContBox>
        <minSwitch></minSwitch>
    </div>
</template>

<script>
import IndexTop from '@/components/boxindexTop.vue'
import indexcontText from '@/components/indexcontText.vue'
import indexContBox from '@/components/indexContBox.vue'
import minSwitch from '@/components/minSwitch.vue'

export default {
  data(){
    return{
      indextop:[
                {
                     tatle:'在线电子书转换器'
                },
                {
                     tatle:'电子书制作'
                },
                {
                     tatle:'产品与服务',
                     chilide:[
                         {
                             tatle:'产品推荐',
                             chilides:['ePuBe魔方','ePuBe电子书管理器','ePuBe智多星','ePuBe豆瓣插件','电子书转换器']
                         },
                         {
                             tatle:'核心介绍',
                             chilides:['如何使用send to kindle服务']
                         },
                         {
                             tatle:'eCore电子书核心',
                             chilides:['ePUBee DRM Removal']
                         },
                         {
                             tatle:'其他转换服务',
                             chilides:['Kindle转PDF','Epub转PDF','Epub转Mobi','Txt转Epub']
                         },
                        ]
                },
                {
                     tatle:'技术向导'  
                }],
      Cloudid:{
        id:47099723,
        CloudTxt:'"Cloud ID"用于管理上传和转换的电子书，进去后点击"后缀名"下载电子书，点"编辑"来编辑Meta元数据和转换电子书格式。 上传完成后会显示进度图片，鼠标移动至图片可以查看状态是"排队"还是"转换中"，排队加转换可能持续几个小时。如果关闭了网页，队列会靠后，服务器也会继续执行，转换生成的文件会保存到ID里，点击Cloud ID可以查看并下载。 "下载"链接自显示后20分钟内有效，如果下载时出现"超时"，请到点击Cloud ID到电子书管理器里下载。',
      },
      options:[
        {  
          value: 'image',
          label: '图像',
           children: [
             {
            value: 'image1',
            label: 'image1'
            },
            {
            value: 'image2',
            label: 'image2'
            },
            {
            value: 'image3',
            label: 'image3'
            }
          ]
        },
        {
          value: 'book',
          label: '电子书',
          children: [{
            value: 'EPUB',
            label: 'EPUB'
          }, {
            value: 'MCBI',
            label: 'MCBI'
          }, {
            value: 'PDF',
            label: 'PDF'
          },{
            value: 'PDF(A6)',
            label: 'PDF(A6)'
          },
          {
            value: 'DOCX',
            label: 'DOCX'
          }
          ]
        }
      ]
    }
  },
  components:{
    IndexTop,
    indexcontText,
    indexContBox,
    minSwitch
  }
    
}
</script>

<style>
.home{
    height: 1500px;
    background: url("../assets/img/Bg.png") no-repeat;
    background-position:right top;
}
</style>