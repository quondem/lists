<template>
  <div class="showlist">
    <p>{{ list.id }}</p>
    <div class="showlist__wrapper">
      <template v-for="item in list.items" :key="item.id">
        <div v-if="item.active" class="showlist__string">
          <div v-for="index in item.count" :key="index">
            <div
              @click="item.count--"
              :style="{ backgroundColor: item.color }"
              class="square"
            ></div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  props: ["listId"],
  setup(props) {
    const store = useStore();
    const list = store.getters["getList"](props.listId);

    return {
      list,
    };
  },
};
</script>

<style lang="sass">
.showlist
    width: 500px
    min-height: 30px
    margin-bottom: 10px
    padding: 10px
    border: 1px solid
    &__string
        display: flex
        flex-wrap: wrap
        flex-grow: 1
        margin: 7px 0
    &__info
        justify-content: space-between
        display: flex
.square
    margin: 2px
    min-width: 14px
    height: 14px
    background: grey
</style>
