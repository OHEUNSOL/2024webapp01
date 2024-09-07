<template>
   <div class="container secWrap">
      <h3>HOT & NEW</h3>
      <div class="cardWrap">
         <div class="card" v-for="(item, i) in data" v-bind:key="i">
            <div class="imgWrap">
               <img v-bind:src="'./images/${item.img}'" alt="" />
            </div>
            <div class="card">
               <h1>{{ item.title }}</h1>
               <p>❤️ {{ item.num }}</p>
               <p>대여 : {{ item.won }}</p>
            </div>
         </div>
      </div>

      <!-- {{ todos[0] }}
      <ul>
         <li v-for="(item, index) in todos" v-bind:key="index">
            {{ item }}
         </li>
      </ul> -->
   </div>
</template>

<script>
export default {
   name: 'App',
   data() {
      return {
         title: '핸섬가이즈',
         num: '8.6',
         won: '11,000',
         todos: ['서울', '부산', '대구'],
         data: [
            { title: '핸섬가이즈', num: '8.6', won: '11,000', img: 'hansome.jpg' },
            { title: '탈주', num: '8.1', won: '11,000', img: 'movie_image.jpg' },
            { title: '하이재킹', num: '8.7', won: '10,900', img: 'movie_image.jpg' },
         ],
      };
   },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/style.scss';
.secWrap {
   padding: 5px 16px;
}

.imgWrap {
   display: flex;
   gap: 10px;

   .card {
      width: 212px;
      img {
         display: block;
         width: 100%;
         transition: 0.3s;
      }
      .imgWrap {
         transition: 0.3s;
         overflow: hidden;
         img {
            width: 100%;
            transition: 0.3s;
         }
         &:hover img {
            transform: scale(1.05);
         }
      }
   }
}
</style>
