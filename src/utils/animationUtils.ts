
export const initScrollAnimation = () => {
  const elements = document.querySelectorAll('.reveal-animation');
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    },
    {
      threshold: 0.1,
    }
  );
  
  elements.forEach((element) => {
    observer.observe(element);
  });
};

export const simulateFallingBeans = () => {
  // This function would create a coffee bean animation
  // but it's already implemented in our components
};
