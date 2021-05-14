<template>
  <button
    class="ctc-button button button--small"
    :class="{ copied: displayCopyConfirmation }"
    @click="copyToClipboard"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M28.25 20.75h7.5A11.25 11.25 0 0047 9.5a7.5 7.5 0 017.5 7.5v37.5A7.5 7.5 0 0147 62H17a7.5 7.5 0 01-7.5-7.5V17A7.5 7.5 0 0117 9.5a11.25 11.25 0 0011.25 11.25zM24.5 9.5a7.5 7.5 0 0115 0 3.75 3.75 0 01-3.75 3.75h-7.5A3.75 3.75 0 0124.5 9.5z" fill-rule="evenodd"/></svg>
    {{ label }} <span class="screen-reader-text">to clipboard</span>
  </button>
</template>

<script>
// First import this component at the begining of your markdown file.
// import CopyToClipboard from '~/components/MarkdownCopyToClipboard.vue'
//
// Then, insert this component _after_ the code block you want it to copy.
// You MUST let an empty line between the component and the code block.
// Like this:
// ```console
// reliably slo init
// ```
// <CopyToClipboard />
//
export default {
  data() {
    return {
      label: "Copy",
      displayCopyConfirmation: false,
    }
  },
  methods: {
    async copyToClipboard(event) {
      const target = event.currentTarget.previousSibling;
      if (target != null) {
        this.selectText(target);
        document.execCommand('copy');
        target.blur();
        this.displayCopyConfirmation = true;
        this.label = "Copied!";
        await new Promise( (resolve) => {
          setTimeout(() => {
            this.displayCopyConfirmation = false;
            this.label = "Copy";
          }, 2000);
        });
      }
    },
    selectText(element) {
      // var text = document.getElementById(element);
      var range;
      var selection;
  
      if (document.body.createTextRange) { //ms
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
      } else if (window.getSelection) { //all others
        selection = window.getSelection();        
        range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ctc-button {
  position: absolute;
  margin-left: 50%;
  transform: translate(-50%, -1em);

  // display: block;
  // height: 2em;
  // width: 2em;

  background-color: var(--yellow);
  // border: 2px solid red;
  opacity: 0;
  cursor: pointer;

  transition: all .2s ease-in-out;

  svg {
    height: .8em;
    margin-right: .5em;

    fill: var(--body-color);
  }

  &.copied {
    background-color: var(--blue-300);
  }
}
</style>

<style lang="scss">
pre:hover + .ctc-button,
.ctc-button:hover {
  opacity: 1;

  transform: translate(-50%, calc(-1em - 75%));
}
</style>
