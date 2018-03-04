<template>
  <div class="newsFeed">
    <span>04/03/2018</span>
    <hr/>
    <div class="news">
      <div style="position: absolute; background-color: blue; padding: 5px; top: 0px; right: 0px;">WIP</div>
      <img src="https://www.jvfrance.com/wp-content/uploads/2017/11/Shadow-pc-du-futur-e1511459187569-890x593.jpg" style="height: 100px; margin-right: 10px;" />
      <p style="display: inline-block;">[PREPROD] Shadow Box <strong>0.22.5</strong> :</p>
      <p>Changelog : Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <span>02/03/2018</span>
    <hr/>
    <div class="news">
      <div style="position: absolute; background-color: red; padding: 5px; top: 0px; right: 0px;">NO GO</div>
      <img src="https://www.jvfrance.com/wp-content/uploads/2017/11/Shadow-pc-du-futur-e1511459187569-890x593.jpg" style="height: 100px; margin-right: 10px;" />
      <p style="display: inline-block;">[PREPROD] Shadow Box <strong>0.22.4</strong> :</p>
      <p>Changelog : Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.newsFeed{
  display: block;
  position: relative;
  width: 90%;
  padding: 5%;
}
.news{
  position: relative;
  display: inline-block;
  margin-bottom: 50px;
  width: 100%;
  box-shadow: 1px 1px 12px #555;
  padding: 10px;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
