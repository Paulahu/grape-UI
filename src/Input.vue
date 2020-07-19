<template>
  <div :class="classes" class="wrapper">
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
  .wrapper {
    font-size: 12px;
    display: inline-flex;
    align-items: center;
    > :not(:last-child) {
      margin-right: .5em;
    }
    > input {
      height: 32px;
      border: 1px solid #999;
      border-radius: 4px;
      font-size: 12px;
      padding: 0 8px;
      color: #2d2d2d;
      outline: none;

      &:hover {
        border: 1px solid #448aff;
      }

      &:focus {
        box-shadow: inset 0 1px 3px #448aff;
      }

      &[disabled], &[readonly] {
        opacity: 0.5;
        cursor: not-allowed;
        border-color: #666;
      }
      &.error {
        font-size: 12px;
      }
    }
    &.error {
      > input {
        border-color: #ff5722;

        &:focus {
          box-shadow: inset 0 1px 3px #ff5722;
        }
      }
    }
    .icon-error {
      fill: #ff5722;
      width: 1.4em;
      height: 1.4em;
    }

    .error-message {
      color: #ff5722
    }

    .icon-tip {
      fill: #4caf50;
      width: 1.4em;
      height: 1.4em;
    }

    .tip-message {
      color: #4caf50;
    }
  }
</style>