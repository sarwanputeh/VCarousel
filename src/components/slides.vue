<template>
    <div class="slides">
        <div class="slides">
            <div v-bind:style="{ marginLeft: '-'+slidesInnerMarginLeft+'px', width: innerWidth+'px'}" class="slides-inner">
                <!-- v-bind:style  เป็นการกำหนดสไตล์โดยใช้ java script ใน htmlของvue -->
                <slider v-for="(slide,index) in slides" :key="index" :margin-left="slidesInnerMarginLeft" :client-width="innerWidth"  :index="index" v-bind:style="{ width: singleWidth+ 'px'}" v-bind:slide="slide"></slider>
           </div>
           <div class="navigation">
               <span v-on:click="goToPrev">Prev</span>
             <!-- v-bind:class ="[index === currentIndex? คือเงื่อนไข่if-else ถ้าเงื่อนไขถูกก็จะเท่ากับcurrentถ้าผดก็จะเท่ากับ'''" -->
               <span class="nav-number" v-bind:class="[index === currentIndex ? 'current': '']" v-on:click="goToSlideIndex(index)" v-for="(slide,index) in slides" :key="index" ></span>
               <span v-on:click="goToNext">Next</span>
               <!-- {{singleWidth +' '+innerWidth+' '+slidesInnerMarginLeft}} {{currentIndex}} -->
        </div>
    </div>
    </div>
</template>
<script>
import Slider from './Slider'
export default{
  props: {
    itemPerSlide: {
      type: null,
      default: 1
    }
  },
  components: {
    Slider
  },
  data () {
    return {
      slides: [
        {
          src: 'https://cdn.fazwaz.com/uploads/unitType/gallery/5caec4305a3a60588d266d9f/5caec45a5a3a6051a43bff70/medium.jpg',
          show: false
        },
        {
          src: 'https://cdn.fazwaz.com/uploads/unit/gallery/5acc3c5f37497d0a284cdcf6/5acc3d9537497d09a60b0dc3/medium.jpg',
          show: false
        },
        {
          src: 'https://cdn.fazwaz.com/uploads/property/gallery/5b1f48f737497d20314f1832/5b5fcecb37497d433310cfcf/medium.jpg',
          show: false
        },
        {
          src: 'https://cdn.fazwaz.com/uploads/property/gallery/5b1f48f737497d20314f1832/5b1f4b1f37497d1f6e3b36b4/medium.jpg',
          show: false
        },
        {
          src: 'https://cdn.fazwaz.com/uploads/property/gallery/5caebb565a3a60483f49852c/5caec35b5a3a60483c704fdf/medium.jpg',
          show: false
        },
        {
          src: 'https://cdn.fazwaz.com/uploads/unit/gallery/5c331d5f0759c233da561c23/5cd534202a6f6c030672bea3/medium.jpg',
          show: false
        },
        {
          src: 'https://cdn.fazwaz.com/uploads/unit/gallery/5c331d5f0759c233da561c23/5cd534112a6f6c02f076d1f3/medium.jpg',
          show: false
        },
        {
          src: 'https://cdn.fazwaz.com/uploads/unit/gallery/5c331d5f0759c233da561c23/5cd534172a6f6c0314587823/medium.jpg',
          show: false
        },
        {
          src: 'https://cdn.fazwaz.com/uploads/unit/gallery/5c331d5f0759c233da561c23/5cd534162a6f6c03134f0713/medium.jpg',
          show: false
        },
        {
          src: 'https://cdn.fazwaz.com/uploads/unit/gallery/5c331d5f0759c233da561c23/5cd534152a6f6c02f5102ff3/medium.jpg',
          show: false
        }

      ],
      innerWidth: 0,
      singleWidth: 0,
      currentIndex: 0
    }
  },
  mounted () {
    // เป็นการดักelementที่เสร็จสมบูรณ์เข้ามาในฟังก์ชันได้
    this.$nextTick(function () {
      this.slides.map((val, index) => {
        if (index <= (this.itemPerSlide - 1)) {
          val.show = true
        }
      })
      let singleWidth = this.$el.clientWidth / this.itemPerSlide
      this.singleWidth = singleWidth // เวลาจะเรียกใช้สิ่งต่างๆที่vueมีต้องใช้this
      this.innerWidth = singleWidth * this.slides.length
    })
  },
  computed: {
    slidesInnerMarginLeft () {
      return this.currentIndex * this.singleWidth
    }
  },
  methods: {
    goToPrev () {
      //  เป็นการกำหนด this.currentIndexเท่ากับหน้าแรก
      if (this.currentIndex === 0) {
        this.currentIndex = this.slides.length - 1
        this.slides[this.currentIndex].show = true
        // คือthis.slides.length=4
        console.log(this.currentIndex)
        return
      }
      this.currentIndex--
      this.slides[this.currentIndex].show = true
    },
    goToNext () {
      if (this.currentIndex === this.slides.length - 1) {
        this.currentIndex = 0
        return
      }
      this.currentIndex++
      this.slides[(this.currentIndex + this.itemPerSlide) - 1].show = true
    },
    goToSlideIndex (index) {
      this.currentIndex = index
      this.slides.map((val, i) => {
        if ((i >= (this.currentIndex)) && (i <= (this.currentIndex + this.itemPerSlide) - 1)) {
          val.show = true
        }
      })
    }
  }
}

</script>

<style scope>
.slides{
    overflow: hidden;
    text-align: center;
    padding-top: 1200px;
}
/* slowslide */
.slides-inner {
    transition: margin 0.6s ease-out;
}

.nav-number {
cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;

}
.nav-number.current{

    color:white;
    background-color:black;
}
</style>
