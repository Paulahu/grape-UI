<template>
  <button class="g-button" :class="classes" @click="$emit('click')"  :disabled="disabled" >
    <g-icon :name="icon" v-if="icon && !loading" class="icon" ></g-icon>
    <g-icon name="loading" class="icon loading" v-if="loading" ></g-icon>
    <div class="content" :class="contentClass">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  import Icon from './Icon'

  export default {
    name: 'Button.vue',
    components: {
      'g-icon': Icon
    },
    // props: ['icon','iconPosition']
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          console.log(value)
          return value === 'left' || value === 'right'
        }
      },
      type: {
        type: String,
        default: 'default',
        validator(value) {
          return (
            value === 'default' ||
            value === 'primary' ||
            value === 'info' ||
            value === 'success' ||
            value === 'warning' ||
            value === 'danger' ||
            value === 'text'
          )
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      simple: {
        type: Boolean,
        default: false
      },
      round: {
        type: Boolean,
        default: false
      },
      circle: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      classes() {
        return {
          [`icon-${this.iconPosition}`]: true,
          [`color-${this.type}`]: !this.simple,
          [`simple-${this.type}`]: this.simple,
          "is-round": this.round,
          "is-circle": this.circle,
        }
      },
      contentClass() {
        return {
          "content-margin": !this.icon
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "global-scss";
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .g-button {
    font-size: $font-size;
    height: $button-height;
    padding: 0.4em 1.1em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: top;
    text-align: center;
    line-height: 1;
    cursor: pointer;
    font-weight: 500;
    transition: .1s;
    &:active {
      border-color: $border-color-hover;
      background-color: $button-active-bg;
    }

    &:focus {
      outline: none;
    }

    > .icon {
      order: 1;
    }

    > .content {
      order: 2;
      margin-left: .3em;
    }

    &.icon-right {
      > .icon {
        order: 2;
      }

      > .content {
        order: 1;
        margin-right: .3em;
        margin-left: 0;
      }
    }

    > .loading {
      animation: spin linear 1.5s infinite;
    }
    &[disabled]{
      opacity: 0.5;
      cursor: not-allowed;
    }
    & > .content-margin {
      margin-left: 0;
    }
  }
  .is-round {
    border-radius: 10rem;
  }
  .is-circle {
    border-radius: 50%;
    padding: .6em;
    & > .icon {
      fill: #fff;
    }
    & > .content {
      display: none;
    }
  }
  .color-primary {
    background-color: $color-primary;
    border: 1px solid $color-primary;
    color: $color;
    &:active{
      background-color: $color-primary;
      opacity: 0.8;
      border:1px solid $color-primary;
    }
  }
  .color-info {
    background-color: $color-info;
    border: 1px solid $color-info;
    color: $color;
    &:active{
      background-color: $color-info;
      opacity: 0.8;
      border:1px solid $color-info;
    }
  }
  .color-success {
    background-color: $color-success;
    border: 1px solid $color-success;
    color: $color;
    &:active{
      background-color: $color-success;
      opacity: 0.8;
      border:1px solid $color-success;
    }
  }
  .color-warning {
    background-color: $color-warning;
    border: 1px solid $color-warning;
    color: $color;
    &:active{
      background-color: $color-warning;
      opacity: 0.8;
      border:1px solid $color-warning;
    }
  }
  .color-danger {
    background-color: $color-danger;
    border: 1px solid $color-danger;
    color: $color;
    &:active{
      background-color: $color-danger;
      opacity: 0.8;
      border:1px solid $color-danger;
    }
  }
  .color-text {
    background: $color-text;
    border:1px solid $color-text;
    color: $color-primary;
    &:hover{
      border:1px solid $color-text;
      background: $color-text;
      color: $color-text-hover;
    }
  }
  .simple-primary {
    background-color: $color-primary-simple;
    border: 1px solid $color-primary;
    color: $color-primary;
    &:active{
      background-color: $color-primary;
      opacity: 0.8;
      border:1px solid $color-primary;
      color: $color;
    }
  }
  .simple-info {
    background-color: $color-info-simple;
    border: 1px solid $color-info;
    color: $color-info;
    &:active{
      background-color: $color-info;
      opacity: 0.8;
      border:1px solid $color-info;
      color: $color;
    }
  }
  .simple-success {
    background-color: $color-success-simple;
    border: 1px solid $color-success;
    color: $color-success;
    &:active{
      background-color: $color-success;
      opacity: 0.8;
      border:1px solid $color-success;
      color: $color;
    }
  }
  .simple-warning {
      background-color: $color-warning-simple;
      border: 1px solid $color-warning;
      color: $color-warning;
      &:active{
        background-color: $color-warning;
        opacity: 0.8;
        border:1px solid $color-warning;
        color: $color;
      }
    }
  .simple-danger {
    background-color: $color-danger-simple;
    border: 1px solid $color-danger;
    color: $color-danger;
    &:active{
      background-color: $color-danger;
      opacity: 0.8;
      border:1px solid $color-danger;
      color: $color;
    }
  }
</style>