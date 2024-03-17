export class Modal {
    constructor(modalId, imgId, modalImgId, captionTextId) {
      this.modalId = modalId
      this.imgId = imgId
      this.modalImgId = modalImgId
      this.captionTextId = captionTextId
    }
    click() {
      this.imgId.onclick = () => {
        this.modalId.style.display = "block"
        this.modalImgId.src = this.imgId.src
        this.captionTextId.innerHTML = this.imgId.alt
      }
    }
  }