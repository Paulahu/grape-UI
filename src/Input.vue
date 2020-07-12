<template>
  <div class="wrapper" :class="classes">
    <label>用户名</label>
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly">
    <template v-if="error">
      <g-icon name="note" class="icon-error"></g-icon>
      <span class="error-message">{{error}}</span>
    </template>
  </div>
</template>

<script>
  import Icon from './Icon'
  export default {
    name: 'Input.vue',
    components: {
      'g-icon': Icon
    },
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    },
    computed: {
        classes() {
          return {
            'error': this.error
          }
        }
    }
  }
</script>

<style scoped lang="scss">
  @import "global-scss";
.wrapper {
  font-size: $box-fontsize;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: .5em;
  }
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    font-size: $box-fontsize;
    padding: 0 8px;
    color: #2d2d2d;
    outline: none;
    &:hover {
      border: 1px solid $color-primary;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
    }
    &[disabled], &[readonly]{
      opacity: 0.5;
      cursor: not-allowed;
      border-color: $border-color-hover;
    }
  }
  &.error {
    > input {
      border-color: $color-danger;
      &:focus {
        box-shadow: inset 0 1px 3px $color-danger;
      }
    }
  }
  .icon-error {
    fill: $color-danger;
    width: 1.4em;
    height: 1.4em;
  }
  .error-message {
    color: $color-danger
  }
}
</style>