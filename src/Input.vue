<template>
  <div :class="{classes}" class="wrapper">
    <input
      type="text"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    />
    <template v-if="error">
      <icon name="note" class="icon-error" ></icon>
      <span class="error-message">{{error}}</span>
    </template>
    <template v-if="tip">
      <icon name="tick" class="icon-tip" ></icon>
      <span class="tip-message">{{tip}}</span>
    </template>
  </div>
</template>
<script>
  import Icon from "./icon";
  export default {
    components: { Icon },
    name: "Input.vue",
    props: {
      value: {
        type: String
      },
      placeholder: {
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
      },
      tip: {
        type: String
      }
    },
    computed: {
      classes() {
        return {
          'error': this.error,
          'tip': this.tip
        }
      }
    }
  };
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
      &[disabled], &[readonly] {
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
    .icon-tip {
      fill: $color-success;
      width: 1.4em;
      height: 1.4em;
    }
    .tip-message {
      color: $color-success
    }
  }
</style>