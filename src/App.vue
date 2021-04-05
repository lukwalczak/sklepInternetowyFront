<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,500&display=swap');
*{
  margin: 0;
  padding: 0;
}
body{
  background-color: #1f1f1f;
}
.hide{
  display: none !important;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #888;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
