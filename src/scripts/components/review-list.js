import './review-item';

class ReviewList extends HTMLElement {
  set reviews(reviews) {
    this._reviews = reviews;
    this.render();
  }

  render() {
    this._reviews.forEach((review) => {
      const reviewItemElement = document.createElement('review-item');
      reviewItemElement.review = review;
      this.appendChild(reviewItemElement);
    });
  }
}

customElements.define('review-list', ReviewList);
