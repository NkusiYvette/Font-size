function changeFontSize(size) {
  const mainHeading = document.getElementById('mainHeading');
  
  // Remove existing font-size classes
  mainHeading.classList.remove('small-font', 'large-font');

  // Apply new font-size class based on user selection
  if (size === 'small') {
    mainHeading.classList.add('small-font');
  } else if (size === 'large') {
    mainHeading.classList.add('large-font');
  }
}
