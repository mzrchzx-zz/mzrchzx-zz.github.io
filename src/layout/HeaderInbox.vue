<template>
  <div class="header wrapper">
    <div class="menu-wrapper">
      <div class="menu">
        <img :src="logo" alt="logo" />
      </div>
      <ul class="menu side">
        <li v-if="!$currentUser.id">
            <md-button v-bind:style="tsBtn" class="md-raised">
              TS
            </md-button>
        </li>
        <li>
          <md-button class="md-icon-button" disabled>
            <UiBaseIcon iconName="heartWhite" />
          </md-button>
        </li>
      </ul>
    </div>

  </div>

</template>

<script>
import { AuthService } from '../services/auth.service'

import UiBaseIcon from '../components/icons/UiBaseIcon'

import logo from '../assets/logo-white.svg'

export default {
  name: 'Header',
  data: function() {
    return {
      logo,
      tsBtn: {
        color: 'black',
        background:'#F1C40F',
        borderRadius: '4px',
        fontFamily: 'Helvetica',
        fontSize: '14px',
        lineHeight: '31px',
        textTransform: 'uppercase',
        width: '40px',
        height: '38px',
        borderRadius: '50%',
        minWidth: '40px'
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
  // padding: 20px 0;
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
    justify-content: space-around;
    align-items: center;
    background: linear-gradient(180deg, #090810 0%, #171236 100%);
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
