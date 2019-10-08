export default class AnnouncerFrame {
  constructor() {
    this.busy = false;
    this.visible = false;
    this.wrapper = null;
    this.iframe = null;
    this.hideTimeout = null;
  }

  show(announcerSrc, text, userOptions = {}) {
    if (this.busy || this.visible) {
      return;
    }
    this.busy = true;

    const defaultOptions = {
      duration: 60000,
    };
    const options = Object.assign({}, defaultOptions, userOptions);

    this.visible = true;
    this.wrapper = window.document.createElement('div');
    this.wrapper.classList.add('content-slider-announcer-wrapper');
    this.iframe = window.document.createElement('iframe');
    this.iframe.setAttribute('src', announcerSrc);
    this.iframe.setAttribute('allowtransparency', 'true');
    this.iframe.addEventListener('load', () => {
      this.iframe.contentWindow.postMessage({
        type: 'announce',
        text,
        options: userOptions,
      });
    });
    const eventMask = window.document.createElement('div');
    eventMask.classList.add('content-slider-announcer-eventMask');
    eventMask.addEventListener('click', () => {
      this.hide();
    });
    this.wrapper.append(this.iframe);
    this.wrapper.append(eventMask);
    window.document.querySelector('body').append(this.wrapper);

    this.hideTimeout = setTimeout(() => {
      this.hide();
      this.clearTimeoutTimer();
    }, options.duration);
    this.busy = false;
  }

  hide() {
    if (this.busy || !this.visible) {
      return;
    }
    this.busy = true;

    this.iframe.contentWindow.postMessage({
      type: 'hide',
      duration: AnnouncerFrame.HIDE_DELAY,
    });
    setTimeout(() => {
      this.destroyFrame();
      this.busy = false;
    }, AnnouncerFrame.HIDE_DELAY);
  }

  hideNow() {
    if (this.busy || !this.visible) {
      return;
    }
    this.busy = true;
    this.destroyFrame();
    this.busy = false;
  }

  destroyFrame() {
    this.clearTimeoutTimer();
    this.wrapper.remove();
    this.wrapper = null;
    this.iframe = null;
    this.visible = false;
  }

  clearTimeoutTimer() {
    if (this.hideTimeout !== null) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }
}

AnnouncerFrame.HIDE_DELAY = 2000;
