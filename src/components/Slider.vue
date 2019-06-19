<template>
    <div class="slide">
        <img v-if="slide.show" class="lazy" v-lazyload :data-src="slide.src" width="400" height="267" alt="A city skyline."/>
    </div>
</template>
<script>
import lazyload from '../directives/lazyload'
export default{
  name: 'slider',
  data () {
    return {
      elementWidth: 0
    }
  },
  props: [
    'slide',
    'marginLeft', // ตัวหลัง- ในไฟล์slidesต้องตัวใหญ่
    'index',
    'clientWidth'
  ],
  directives: {
    lazyload
  }
}

</script>

    <style scoped>

        *{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        img{
             max-width: 100%;
             display: block;
             background-repeat: no-repeat;
             background-size: contain;
        }
        .slide{
            display: inline-block;
        }
    </style>
