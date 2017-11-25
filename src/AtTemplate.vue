<style lang="scss" src="./At.scss"></style>

<template>
  <div v-el:wrap
    class="atwho-wrap"
    @compositionstart="handleCompositionStart"
    @compositionend="handleCompositionEnd"
    @input="handleInput()"
    @keydown="handleKeyDown"
  >
    <div v-if="atwho"
      class="atwho-panel"
      :style="style"
    >
      <div class="atwho-inner">
        <div class="atwho-view">
          <ul class="atwho-ul" v-el:list>
            <li v-for="(index, item) in atwho.list"
              class="atwho-li"
              :class="isCur(index) && 'atwho-cur'"
              :data-index="index"
              @mouseenter="handleItemHover"
              @click="handleItemClick"
            >
              <slot name="item">
                <span v-text="itemName(item)"></span>
              </slot>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
