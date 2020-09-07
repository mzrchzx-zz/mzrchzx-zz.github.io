<template>
  <div class="header wrapper">
    <div class="menu-wrapper">
      <div class="menu">
        <img :src="logo" alt="logo" />
      </div>
      <ul class="menu side">
        <li v-if="!$currentUser.id">
            <md-button v-bind:style="sellBtn" class="md-raised">
              Sell
            </md-button>
        </li>
        <li v-if="!$currentUser.id">
          <router-link :to="{ name: 'login' }">
            <md-button v-bind:style="loginBtn">
              Login
            </md-button>
            </router-link>
        </li>
        <li>
          <md-button class="md-icon-button" disabled>
            <UiBaseIcon iconName="heart" />
          </md-button>
        </li>
      </ul>
    </div>

  </div>

</template>

<script>
import { AuthService } from '../services/auth.service'

import UiBaseIcon from '../components/icons/UiBaseIcon'

import logo from '../assets/logo.svg'

export default {
  name: 'Header',
  data: function() {
    return {
      logo,
      sellBtn: {
        color: 'white',
        background:'#349A89',
        borderRadius: '4px',
        fontFamily: 'Helvetica',
        fontSize: '14px',
        lineHeight: '31px',
        textTransform: 'uppercase',
        width: '131px',
        height: '31px'
      },
      loginBtn: {
        color: 'black',
        fontFamily: 'Helvetica',
        fontSize: '14px',
        lineHeight: '31px',
        textTransform: 'uppercase',
        width: '91px',
        height: '31px'
      }
    }
  },
  components: {
    UiBaseIcon
  },
  methods: {
    async logout () {
      await AuthService.makeLogout()
    }
  }
}
</script>

<style lang="scss" scoped>

.header {
  z-index: 1;
  padding: 20px 0;
  position: relative;

  .is-active {
    color: #e01b3c;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  .menu-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menu {
    font-size: 25px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      padding: 15px 0px;

    }

    &.side {
      font-size: 15px;

      .logout-button {
        cursor: pointer;
      }
    }
  }
}
</style>
