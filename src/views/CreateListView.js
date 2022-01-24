import ListView from './ListView.vue';
import bus from '../utils/bus.js';

// 하이오더 컴포넌트
export default function createListView(name) {
  return {
    // 재사용할 컴포넌트(인스턴스) 옵션들이 들어갈 자리
    name: name,
    created() {
      bus.$emit('start:spinner');

      this.$store.dispatch('FETCH_LIST', this.$route.name)
        .then(() => {
          console.log('feteced');
          bus.$emit('end:spinner')
        })
        .catch((error) => {
          console.log(error);
        });
    },
    render(createElement) {
      return createElement(ListView);
    }
  }
}