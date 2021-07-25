class ReviewItem extends HTMLElement {
  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="review">
          <div class="review__name">${this._review.name}</div>
          <div class="review__date">${this._review.date}</div>
          <div class="review__comment">
          ${this._review.review}
          </div>
      </div>`;
  }
}

customElements.define('review-item', ReviewItem);
