<template>
  <ov-video class="ov-video" :stream-manager="streamManager" />
</template>
<script>
import { mapState } from 'vuex';
import OvVideo from './OvVideo.vue';

const emoji = 'emoji';

export default {
  components: {
    OvVideo,
  },
  data() {
    return {
      user_isActive: false,
      user_get_out: false,
    };
  },
  setup() {},
  created() {},
  moundted() {},
  unmounted() {},
  methods: {
    get_out() {
      alert('추방하시겠습니까?');
      // alert 대신 confirm으로 별경한다.
      // const getout = confirm('추방하시겠습니까?')
      // comfirm 받은 것을 넘겨서 추방할 수 있도록 한다.
    },
    getConnectionData() {
      const { connection } = this.streamManager.stream;
      return JSON.parse(connection.data);
    },
  },

  computed: {
    ...mapState(emoji, ['allEmojiList']),
    newAllEMojiList() {
      const newList = [];
      for (let i = this.allEmojiList.length - 1; i >= 0; i -= 1) {
        if (this.allEmojiList[i][0] === this.clientData) {
          newList.push(this.allEmojiList[i][1]);
          break;
        }
      }
      return newList;
    },
    clientData() {
      const { clientData } = this.getConnectionData();
      return clientData;
    },
  },
  props: {
    streamManager: Object,
  },
};
</script>
<style scoped>
#img {
  position: absolute;
  top: 5%;
  left: 88%;
  border: 0;
  outline: 0;
  opacity: 0;
  z-index:100;
}

.m0p0 {
  margin:0;
  padding:0;
}

#img:hover {
  opacity: 1;
}

.webrtctag {
  width:80%;
  height:80%;
}

.myname {
  position:absolute;
  top:0px;
  left:0px;
  background-color:white;
  font-size:24px;
  border-radius: 0px 0px 10px 0px;
}

.myreaction {
  position:absolute;
  height:100%;
  top:0px;
  right:0px;
  font-size:150px;
  z-index:500;
}

.ov-video {
  width: 50%;
  border-radius: 20px;
}
</style>
