<style lang="scss" src="./At.scss"></style>

<template>
  <div ref="wrap"
    class="atwho-wrap"
    @compositionstart="handleCompositionStart"
    @compositionend="handleCompositionEnd"
    @input="handleInput()"
    @keydown.capture="handleKeyDown"
  >
    <div v-if="atwho"
      class="atwho-panel"
      :style="style"
    >
      <div class="atwho-inner">
        <div class="atwho-view">
          <ul class="atwho-ul" v-if="atwho.list.length > 0">
            <li v-for="(item, index) in atwho.list"
              class="atwho-li"
              :key="index"
              :class="isCur(index) && 'atwho-cur'"
              :ref="isCur(index) && 'cur'"
              :data-index="index"
              @mouseenter="handleItemHover"
              @click="handleItemClick"
            >
              <slot name="item" :item="item">
                <span v-text="itemName(item)"></span>
              </slot>
            </li>
          </ul>
          <!--   to improve UX, we can display something when the list is empty   -->
          <ul class="atwho-ul" v-if="atwho.list.length === 0">
            <li class="atwho-li">
              <slot name="emptyList">
                <span v-text="isListMembersEmpty"></span>
              </slot>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <span v-show="false" ref="embeddedItem">
      <slot name="embeddedItem" :current="currentItem"></slot>
    </span>
    <slot></slot>
  </div>
</template>
