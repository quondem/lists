<template>
  <div class="leftside__list">
    <div class="list__item">
      <button class="list__btn" @click="openList = !openList">
        <img
          class="leftside__icon"
          :class="openList ? 'open' : ''"
          src="../assets/triangle.png"
          alt="triangle"
        />
      </button>
      <div class="list_wrapper">
        <input
          :class="listClass"
          @click="listClick"
          :id="list.id"
          type="checkbox"
          v-model="list.active"
        />
        <label :for="list.id">
          {{ list.id }}
        </label>
      </div>
    </div>
    <template v-if="openList">
      <div class="leftside__items" v-for="item in list.items" :key="item.id">
        <input type="checkbox" name="item" :id="itemId(item.id, list.id)" v-model="item.active" />
        <label :for="itemId(item.id, list.id)">{{ item.id }}</label>
        <div class="leftside__items__info">
          <input
            @keydown="if (['+', '-', 'e'].includes($event.key)) $event.preventDefault();"
            @focusout="itemInput = false"
            class="leftside__items__input"
            v-if="itemInput"
            type="number"
            min="0"
            v-model.number="item.count"
          />
          <p
            class="leftside__items__input"
            @click="itemInput = true"
            v-if="!itemInput"
            :for="item.id + list.id + 'text'"
          >
            {{ item.count }}
          </p>
        </div>
        <input
          class="leftside__items__color"
          v-model="item.color"
          type="color"
          name="color"
          :id="item.id + list.id + 'color'"
        />
      </div>
    </template>
  </div>
</template>

<script>
import { ref, computed, onUpdated } from "vue";
import { useStore } from "vuex";

export default {
  props: ["listId"],
  setup(props) {
    const store = useStore();

    const openList = ref(false);
    const list = store.getters["getList"](props.listId);
    const itemId = (itemId, listId) => itemId + listId;
    const countItems = ref(list.items.length);
    const selectedItems = computed(() => {
      let counter = 0;
      for (let item of list.items) {
        if (item.active) {
          counter++;
        }
      }
      return counter;
    });

    const listClass = computed(() =>
      selectedItems.value > 0 && selectedItems.value < countItems.value ? "dotted" : 0
    );

    onUpdated(() => {
      if (selectedItems.value == countItems.value) {
        list.active = true;
      } else {
        list.active = false;
      }
    });

    function listClick() {
      if (selectedItems.value != countItems.value) {
        for (let item of list.items) {
          item.active = true;
        }
      } else {
        for (let item of list.items) {
          item.active = false;
        }
      }
    }

    let itemInput = ref(false);
    document.querySelector("body").addEventListener("click", function (e) {
      e.target.classList.contains("leftside__items__input") ? 0 : (itemInput.value = false);
    });

    return {
      list,
      openList,
      selectedItems,
      listClass,
      itemId,
      listClick,
      itemInput,
    };
  },
};
</script>

<style lang="sass">
.dotted
  &:not(:disabled):not(:checked)+label::after
    content: ''
    margin-left: 8px
    position: absolute
    display: inline-block
    width: 2px
    height: 2px
    background-color: black
.list
  &__wrapper
    position: relative
  &__btn
    padding-right: 10px
    height: 30px
  &__item
    display: flex
    align-items: center
.leftside
  &__list
    padding-bottom: 10px
  &__icon
    width: 20px
    transform: rotate(270deg)
  &__items
    display: flex
    width: 200px
    padding-top: 3px
    padding-left: 40px
    padding-bottom: 5px
    &__count
      padding-left: 40px
    &__input
      display: inline
      margin-right: 10px
      width: 40px
    &__color
      width: 27px
      border: none
    &__info
      margin-left: auto
.open
  transform: rotate(0deg)


button
  border: none
  background-color: transparent
  cursor: pointer
</style>
