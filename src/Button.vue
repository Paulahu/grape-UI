<template>
  <button class="g-button">按钮</button>
</template>

<script>
  export default {
    name: 'Button.vue',
    // props: ['icon','iconPosition']
    props: {
      icon: {},
      iconPosition: {
        type: String,
        default: "left",
        validator (value) {
          console.log(value)
          return value === 'left' || value === 'right';
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .g-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius:var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: top;
    text-align: center;
    line-height: 1;
    &:hover {
      border-color: var(--border-color-hover);
    }
    &:active {
      background-color: var(--button-active-bg);
    }
    &:focus {
      outline: none;
    }
    > .icon {
      order: 1;
      margin-right: .3em;
    }
    > .content {
      order: 2;
    }
    &.icon-right {
      > .icon {
        order: 2;
        margin-left: .3em;
        margin-right: 0;
      }
      > .content {
        order: 1;
      }
    }
  }
</style>