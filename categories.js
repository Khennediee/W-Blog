// Gallery filter
// const galleryFilter = document.querySelectorAll('.gallery-filter');

// galleryFilter.forEach(filter => {
//   filter.addEventListener('click', function() {
//     const filterValue = this.getAttribute('data-filter');
//     const galleryItem = document.querySelectorAll('.gallery-item');

//     galleryItem.forEach(item => {
//       if (item.classList.contains(filterValue) || filter




      const galleryItems = document.querySelectorAll('.gallery-item');
const filterButtons = document.querySelectorAll('.gallery-filter');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(button => button.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    galleryItems.forEach(item => {
      const categories = item.getAttribute('data-category').split(',');
      if (categories.includes(filter) || filter === 'all') {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
