<template>
  <div>
  <HeaderInbox></HeaderInbox>
  <div class="inbox">
    <div class="main">
      <div class="header">Add product</div>
      <form novalidate class="content" >

      <md-field >
        <label>Title</label>
        <md-input type="text" v-model="title" placeholder="For example: Iron man suit" required></md-input>
        <span class="md-error">There is an error</span>
      </md-field>

        <md-field >
        <label>Location</label>
        <md-input type="text" v-model="location" placeholder="For example: Los Angeles, CA" required></md-input>
        <span class="md-error">There is an error</span>
      </md-field>

      <md-field >
        <label>Description</label>
        <md-input class="description-area" type="text" v-model="description"></md-input>
      </md-field>

      <md-field>
        <label>Photos</label>
        <div class="md-input photo-wrapper-uploader">
          <div class="upload-btn">
            <div v-if="imageData == null">  
              <img :src="require('../assets/plus.svg')" alt="">
              <img :src="require('../assets/minus.svg')" alt="">
              <input type="file" accept=".png, .jpg, .jpeg" @change="previewImage" >
            </div>
            <div v-if="imageData!=null">                     
              <img class="preview" height="92" width="92" :src="image">
            </div>  
          </div>
        </div>
        <!-- <img :src="src" class="uploading-image" /> -->
        <!-- <input type="file" accept="image/jpeg" > -->
      </md-field>

      <md-field >
        <label>Price</label>
        <md-input type="text" v-model="title" placeholder="For example: Iron man suit"></md-input>
      </md-field>

      <!-- <md-progress-bar md-mode="indeterminate" v-if="sending" /> -->

      <div class="buttons">
        <md-button v-bind:style="submitBtn" class="md-raised"  type="submit" @click="create">
            Submit
        </md-button>
      </div>
      </form>
      
    </div>
  </div>
  </div>
</template>

<script>
import HeaderInbox from '../layout/HeaderInbox.vue'
import VueCoreImageUpload  from 'vue-core-image-upload';
import * as fb from '../services/firebase'

export default {
  name: 'Inbox',
  components: {
    HeaderInbox,
    'image-upload': VueCoreImageUpload
  },
  data: function () {
    return {
    title: null,
    location: null,
    description: null,
    image: null,
    imageData: null,
    uploadValue: null,
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
      previewImage(event) {
        this.uploadValue=0;
        this.imgage=null;
        this.imageData = event.target.files[0];
        this.onUpload()
      },
      onUpload(){
        this.image=null;
        const storageRef=fb.storage().ref(`${this.imageData.name}`).put(this.imageData);
        storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
          }, error=>{console.log(error.message)},
        ()=>{this.uploadValue=100;
            storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                this.image =url;
                console.log(this.image)
        });
      }      
    );
 },
 create () {
      
      const post = {
        photo: this.image,
        caption: this.caption        
      }

      fb.database().ref('PhotoGallery').push(post)
      .then((response) => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
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
      .upload-btn input {
        position: absolute;
        top: 40%;
        left: 5%;
        height: 40px;
        width: 60px;
        opacity: 0;
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
