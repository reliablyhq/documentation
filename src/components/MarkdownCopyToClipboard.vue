<template>
  <button
    class="ctc-button"
    :class="{ copied: displayCopyConfirmation }"
    @click="copyToClipboard"
  >
    <span class="screen-reader-text">Copy to clipboard</span>
  </button>
</template>

<script>
// First import this component at the begining of your markdown file.
// import CopyToClipboard from '~/components/MarkdownCopyToClipboard.vue'
//
// Then, insert this component _before_ the code block you want it to copy.
// You MUST let an empty line between the component and the code block.
// Like this:
// <CopyToClipboard />
//
// ```console
// reliably slo init
// ```
//
export default {
  data() {
    return {
      displayCopyConfirmation: false,
    }
  },
  methods: {
    async copyToClipboard(event) {
      const target = event.currentTarget.nextSibling;
      if (target != null) {
        this.selectText(target);
        document.execCommand('copy');
        target.blur();
        this.displayCopyConfirmation = true;
        await new Promise( (resolve) => {
          setTimeout(() => {
            this.displayCopyConfirmation = false;
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
  position: relative;
  margin-left: 100%;
  transform: translate(calc(-100% - 1em), calc(100% + 2em));

  display: block;
  height: 2em;
  width: 2em;

  background-color: transparent;
  border: 2px solid red;

  &.copied {
    border-color: green;
  }
}
</style>
