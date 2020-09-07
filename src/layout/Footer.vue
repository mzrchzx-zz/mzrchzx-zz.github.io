<template>
  <div class="footer">
    <div class="wrapper">
      Copyright © {{ currentYear }}. Privacy Policy
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  text-align: center;
  background: rgba(192, 196, 206, 0.127321);
  padding: 20px 0;
  width: 100%;
  margin-top: auto;
  font-size: 15px;
  line-height: 17px;
  color: #C0C4CE;
}
</style>
