<template>
  <div>
  <HeaderHome></HeaderHome>
  <div class="inbox">
    <div class="main">
    </div>
  </div>
  </div>
</template>

<script>
import HeaderHome from '../layout/HeaderHome.vue'
import VueCoreImageUpload  from 'vue-core-image-upload';

export default {
  name: 'Inbox',
  components: {
    HeaderHome,
    'image-upload': VueCoreImageUpload
  },
  data: function () {
    return {
    src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',
    location: '',
    description: '',
    title: '',
    submitBtn: {
        color: 'white',
        background:'#349A89',
        borderRadius: '4px',
        fontFamily: 'Helvetica',
        fontSize: '16px',
        lineHeight: '18px',
        width: '377px',
        height: '58px'
      },
    }
  },
    methods: {
      imageuploaded(res) {
      if (res.errcode == 0) {
        this.src = 'http://img1.vued.vanthink.cn/vued751d13a9cb5376b89cb6719e86f591f3.png';
      }
    }
    },

}
</script>

<style lang="scss" scoped>

  
.inbox {
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  flex-direction: column;

  .register {
    margin-top: 24px;
    padding: 30px 93px;
    text-align: center;
    background: #FFFFFF;
    box-shadow: 0px 2px 42px rgba(0, 0, 0, 0.111233);
    border-radius: 7px;
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 30px 20px;
    background: #fff;
    width: 1136px;
    border-radius: 7px;
    box-shadow: 0 11px 15px -7px rgba(208, 208, 208, 0.13), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(255, 255, 255, 0.64);

    form {
      width: 664px;
      .description-area {
        height: 183px;
      }
      label {
        text-transform: uppercase;
      }
      .upload-btn {
        width: 92px;
        height: 92px;
        background: #E4E4E4;
        border-radius: 4px;
      }
    }

    .upload-btn img {
      display: block;
      width: 40px;
      height: 40px;
      position: absolute;
      top: 40%;
      left: 7%;
    }

    .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
    

    .md-field.md-theme-default label {
      color: #303030;
      pointer-events: auto;
      top: 0;
      opacity: 1;
      font-family: Helvetica;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.3px;
      text-transform: uppercase;
    }
    .md-field::after {
      height: 0;
    }
    .md-input {
      height: 58px;
      padding-left: 20px;
      background: #F9FAFB;
      border: 1px solid #DEDEE0;
      border-radius: 5px;
    }

    .photo-wrapper-uploader {
      height: 124px;
      padding-top: 15px;
    }

    .header {
      text-align: center;
    }

    .buttons {
      display: flex;
      justify-content: center;
    }

    .error {
      background-color: red;
      padding: 10px;
      font-size: 12px;
      opacity: 1;
      transition: all 0.5s;
    }
  }
}
</style>
