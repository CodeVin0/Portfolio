document.addEventListener("DOMContentLoaded", () => {
    // Preloader
    const preloader = document.getElementById("preloader")
    window.addEventListener("load", () => {
      setTimeout(() => {
        preloader.style.opacity = "0"
        preloader.style.transition = "opacity 0.5s ease"
        setTimeout(() => {
          preloader.style.display = "none"
        }, 500)
      }, 500)
    })
  
    // Back to Top Button
    const backToTopButton = document.getElementById("back-to-top")
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add("visible")
      } else {
        backToTopButton.classList.remove("visible")
      }
    })
  
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  
    // Navbar Toggle Functionality
    const menuToggle = document.getElementById("menu-toggle")
    const navLinks = document.querySelector("nav ul")
    const navItems = document.querySelectorAll(".nav-link")
  
    // Toggle menu when hamburger is clicked
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active")
      menuToggle.classList.toggle("active")
    })
  
    // Close menu when a nav link is clicked
    navItems.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active")
        menuToggle.classList.remove("active")
      })
    })
  
    // Active menu item based on scroll position
    function setActiveNavItem() {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 100 // Offset for header
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id")
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          // Remove active class from all nav items
          navItems.forEach((item) => {
            item.classList.remove("active")
          })
  
          // Add active class to current nav item
          const activeNavItem = document.querySelector(`a[href="#${sectionId}"]`)
          if (activeNavItem) {
            activeNavItem.classList.add("active")
          }
        }
      })
    }
  
    // Header Scroll Effect
    const header = document.querySelector("header")
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.style.backgroundColor = "rgba(15, 20, 25, 0.95)"
        header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
      } else {
        header.style.backgroundColor = "var(--primary-bg)"
        header.style.boxShadow = "none"
      }
  
      // Update active nav item on scroll
      setActiveNavItem()
    })
  
    // Run once on page load
    setActiveNavItem()
  
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Typing Animation
    function startTypingAnimation() {
      const text = "Muhammad Kevin"
      const typingElement = document.querySelector(".typing-animation")
      if (!typingElement) return
  
      typingElement.textContent = "" // Reset text content
      let i = 0
  
      function type() {
        if (i < text.length) {
          typingElement.textContent += text.charAt(i)
          i++
          setTimeout(type, 100)
        }
      }
  
      type()
    }
  
    // Start typing animation after a delay
    setTimeout(startTypingAnimation, 1000)
  
    // Scroll Animation
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".project-card, .skill-item, .cert-card")
  
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementBottom = element.getBoundingClientRect().bottom
  
        if (elementTop < window.innerHeight && elementBottom > 0) {
          element.style.opacity = "1"
          element.style.transform = "translateY(0)"
        }
      })
    }
  
    // Set initial state for animated elements
    const elementsToAnimate = document.querySelectorAll(".project-card, .skill-item, .cert-card")
    elementsToAnimate.forEach((element) => {
      element.style.opacity = "0"
      element.style.transform = "translateY(20px)"
      element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
    })
  
    // Run animation on scroll
    window.addEventListener("scroll", animateOnScroll)
  
    // Run once on page load
    animateOnScroll()
  
    // Skills Section Popup
    let activeHexagon = null
  
    function showPopup(element, text) {
      if (activeHexagon) {
        activeHexagon.classList.remove("active")
      }
      element.classList.add("active")
      activeHexagon = element
  
      const popupBox = document.getElementById("popupBox")
      document.getElementById("popupText").innerText = text
      popupBox.style.display = "flex"
  
      // Add a small delay before adding the visible class for the transition
      setTimeout(() => {
        popupBox.classList.add("visible")
      }, 10)
    }
  
    function showPopupClick(element, text) {
      if (activeHexagon) {
        activeHexagon.classList.remove("active")
      }
      element.classList.add("active")
      activeHexagon = element
  
      const popupBoxClick = document.getElementById("popupBoxClick")
      document.getElementById("popupTextClick").innerText = text
      popupBoxClick.style.display = "flex"
  
      // Add a small delay before adding the visible class for the transition
      setTimeout(() => {
        popupBoxClick.classList.add("visible")
      }, 10)
    }
  
    function hidePopup(event) {
      if (event) event.stopPropagation()
      const popupBox = document.getElementById("popupBox")
      popupBox.classList.remove("visible")
  
      // Wait for the transition to complete before hiding
      setTimeout(() => {
        // popupBox.style.display = "none"
        if (activeHexagon) {
          activeHexagon.classList.remove("active")
          activeHexagon = null
        }
      }, 100)
    }
  
    function hidePopupclick(event) {
      if (event) event.stopPropagation()
      const popupBoxClick = document.getElementById("popupBoxClick")
      popupBoxClick.classList.remove("visible")
  
      // Wait for the transition to complete before hiding
      setTimeout(() => {
        popupBoxClick.style.display = "none"
        if (activeHexagon) {
          activeHexagon.classList.remove("active")
          activeHexagon = null
        }
      }, 300)
    }
  
    // Expose these functions to the global scope for inline event handlers
    window.showPopup = showPopup
    window.showPopupClick = showPopupClick
    window.hidePopup = hidePopup
    window.hidePopupclick = hidePopupclick
  
    // Certificate Card Flip
    document.querySelectorAll(".cert-card").forEach((card) => {
      card.addEventListener("click", function () {
        this.querySelector(".cert-card-inner").style.transform =
          this.querySelector(".cert-card-inner").style.transform === "rotateY(180deg)"
            ? "rotateY(0deg)"
            : "rotateY(180deg)"
      })
    })
  })
  
