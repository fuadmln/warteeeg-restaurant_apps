import RestaurantSource from '../data/restaurant-source';

class PostReviewForm extends HTMLElement {
  set url(url) {
    this._url = url;
    this.render();
  }

  render() {
    this.innerHTML = `
      <form id="post-review">
        <input type="text" name="commnet-name" id="comment-name" placeholder="your name">
        <textarea name="review-comment" id="review-comment" rows="5" placeholder="write your review about this place..."></textarea>
        <button type="submit" aria-label="submit your review">Post</button>
      </form>`;

    const form = this.querySelector('#post-review');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.querySelector('#comment-name');
      const review = document.querySelector('#review-comment');
      const formMessage = document.querySelector('#form-message');

      if (name.value && review.value) {
        const reviewData = {
          id: this._url.id,
          name: name.value,
          review: review.value,
        };

        const postResponse = await RestaurantSource.postRestaurantReview(reviewData);

        if (postResponse.status === 200) {
          form.reset();
          formMessage.innerHTML = 'Review succesfully posted';
          formMessage.style.color = 'green';
        } else {
          formMessage.innerHTML = 'Can\'t sent review, error has been occured';
          formMessage.style.color = 'red';
        }
      } else {
        formMessage.innerHTML = 'Name and review required to fill';
        formMessage.style.color = 'red';
      }
    });
  }
}

customElements.define('post-review', PostReviewForm);
