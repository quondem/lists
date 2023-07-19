<template>
  <div class="container">
    <div class="side leftside">
      <template v-for="list in lists" :key="list.id">
        <checkboxList :listId="list.id" />
      </template>
    </div>
    <div class="side rightside">
      <template v-for="list in lists" :key="list.id">
        <showList :listId="list.id" />
      </template>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import showList from "./components/showList.vue";
import checkboxList from "./components/checkboxList.vue";
import { useStore } from "vuex";

export default {
  components: { checkboxList, showList },
  setup() {
    const store = useStore();
    const lists = store.getters["getLists"];

    return {
      lists,
    };
  },
};
</script>

<style lang="sass">
*
  vertical-align: baseline
  font-weight: inherit
  font-family: inherit
  font-style: inherit
  font-size: 100%
  outline: 0
  padding: 0
  margin: 0

.leftside
  margin-right: auto
.rightside
  margin-left: auto



input[type="checkbox"]
  position: absolute
  z-index: -1
  opacity: 0
  &:not(:disabled):not(:checked)+label:hover::before
    border-color: #b3d7ff
  &:not(:disabled):active+label::before
    background-color: #b3d7ff
    border-color: #b3d7ff
input[type="checkbox"]+label
  display: inline-flex
  align-items: center
  user-select: none
  &::before
    content: ''
    display: inline-block
    width: 17px
    height: 17px
    flex-shrink: 0
    flex-grow: 0
    border: 1px solid #adb5bd
    border-radius: 0.25em
    margin-right: 0.5em
    background-repeat: no-repeat
    background-position: center center
    background-size: 50% 50%
input[type="checkbox"]:checked+label::before
  border-color: #0b76ef
  background-color: #0b76ef
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e")

body
  padding: 10px
  background-color: gray
.container
  background-color: #fff
  border-radius: 20px
  margin: 0 auto
  padding: 40px
  display: flex
.color
  border: none
  padding: 0
  width: 30px
  margin: 0
</style>
