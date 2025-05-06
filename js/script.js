  //show + hide sidebar
  function showSideBar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  }
  
  function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  }
  
  //gallery
  const galleryContainer = document.querySelector(".gallery");
  const galleryItems = galleryContainer.querySelectorAll(".gallery-item");
  const indicator = document.querySelector(".indicator");
  const defaultItemFlex = "0 1 60px";
  const hoverItemFlex = "1 1 auto";
  
  
  const updateGalleryItems = () => {
    galleryItems.forEach((item) => {
      let flex = defaultItemFlex;
      if (item.isHovered) {
        flex = hoverItemFlex;
      }
      item.style.flex = flex;
    });
  };
  
  galleryItems[0].isHovered = true;
  galleryItems[0].classList.add("selected");
  updateGalleryItems();
  
  galleryItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      galleryItems.forEach((otherItem) => {
        otherItem.classList.remove("selected");
        otherItem.isHovered=false;
      });
      item.classList.add("selected");
      item.isHovered = true;
      updateGalleryItems();
    });
  });
  
  
  
  galleryContainer.addEventListener("mousemove", (e) => {
    indicator.style.left = `${
      e.clientX - galleryContainer.getBoundingClientRect().left
    }px`;
  });
  
    
    