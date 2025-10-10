(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Modern Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    e.preventDefault();
    const overlay = select('#mobileNavOverlay');
    const panel = select('#mobileNavPanel');
    const hamburger = this;
    
    overlay.classList.add('active');
    panel.classList.add('active');
    hamburger.classList.add('active');
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
  })

  /**
   * Close mobile navigation
   */
  function closeMobileNav() {
    const overlay = select('#mobileNavOverlay');
    const panel = select('#mobileNavPanel');
    const hamburger = select('.mobile-nav-toggle');
    
    overlay.classList.remove('active');
    panel.classList.remove('active');
    hamburger.classList.remove('active');
    
    // Restore body scroll
    document.body.style.overflow = '';
  }

  // Close button
  on('click', '#mobileNavClose', function(e) {
    e.preventDefault();
    closeMobileNav();
  })

  // Overlay click to close
  on('click', '#mobileNavOverlay', function(e) {
    closeMobileNav();
  })

  // Mobile nav links
  on('click', '.mobile-nav-link', function(e) {
    closeMobileNav();
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      // Close mobile nav if open
      const overlay = select('#mobileNavOverlay');
      const panel = select('#mobileNavPanel');
      const hamburger = select('.mobile-nav-toggle');
      
      if (overlay.classList.contains('active')) {
        overlay.classList.remove('active');
        panel.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
      }
      
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Initiate gallery lightbox 
   */
  /*const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox'
  });*/
	var galleryLightbox = GLightbox({
		selector: '.gallery-lightbox'
	});
	var galleryLightbox = GLightbox({
		selector: '.gallery-lightbox2'
	});
	var galleryLightbox = GLightbox({
		selector: '.gallery-lightbox3'
	});
	var galleryLightbox = GLightbox({
		selector: '.gallery-lightbox4'
	});

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()




// Close suddess Alret
function closeSuccessAlert () {
  var closeButton = $( '.closeAlert' );
  if (closeButton.length) {
    closeButton.on( 'click', function () {
      $( '.alert-wrapper' ).fadeOut();
    } );
    closeButton.on( 'click', function () {
      $( '.alert-wrapper' ).fadeOut();
    } );
  }
}

//send request

function check () {
  const name = $( '#name' ).val();
  const phone = $( '#phone' ).val();
  const msg = $( '#details' ).val();
  if (name !== '' && phone !== '') {
    if (isPhone( phone )) {
      if (send( name, phone, msg )) {
        $( 'p.alert.alert-success' ).show();
        // $( '#name' ).val('');
        // $( '#phone' ).val('');
        // $( '#details' ).val('');
        setTimeout( () => {
          $( 'p.alert.alert-success' ).slideUp();
        }, 3000 );
      }
    } else {
      $( '#alert-phone' ).removeClass( 'invisible' ).text( 'الجوال المدخل غير صحيح' );
    }
  } else {
    if (name === '')
      $( '#alert-name' ).removeClass( 'invisible' ).text( 'الرجاء إدخال الاسم' );
    if (phone === '')
      $( '#alert-phone' ).removeClass( 'invisible' ).text( 'الرجاء إدخال رقم الجوال' );
  }
}

function isPhone (value) {
  const regex = new RegExp( /^(05)([0-9]{8})$/ );
  return regex.test( value );
}

function send (name, phone, msg) {
  return $.ajax( {
    type: 'POST',
    url: `https://contact.e-dever.com/api/Register?FullName=${name}&Phone=${phone}&Details=${msg}&Type=2`,
    // data: '{FullName:\'' + name + '\', Phone:\'' + phone + '\'}',
    contentType: 'application/json',
    dataType: 'json',
    success: response => {
      return response;
    },
  } );
}

$( '#name' ).on( 'focus', () => {
  $( '#alert-name' ).addClass( 'invisible' ).text( '' );
} );

$( '#phone' ).on( 'focus', () => {
  $( '#alert-phone' ).addClass( 'invisible' ).text( '' );
} );

// Video play function
function playVideo(videoId) {
  // Create video modal
  const videoModal = document.createElement('div');
  videoModal.className = 'video-modal';
  videoModal.innerHTML = `
    <div class="video-modal-content">
      <span class="video-close">&times;</span>
      <div class="video-container">
        <video controls autoplay>
          <source src="assets/videos/${videoId}.mp4" type="video/mp4">
          <source src="assets/videos/${videoId}.webm" type="video/webm">
          متصفحك لا يدعم تشغيل الفيديو.
        </video>
      </div>
    </div>
  `;
  
  document.body.appendChild(videoModal);
  
  // Close modal functionality
  const closeBtn = videoModal.querySelector('.video-close');
  closeBtn.onclick = () => {
    document.body.removeChild(videoModal);
  };
  
  // Close on outside click
  videoModal.onclick = (e) => {
    if (e.target === videoModal) {
      document.body.removeChild(videoModal);
    }
  };
}

// Show video hints when works section comes into view
function showVideoHints() {
  const worksSection = document.querySelector('.works');
  if (!worksSection) return;
  
  let hasShownHints = false; // Track if hints have been shown
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasShownHints) {
        hasShownHints = true;
        
        // Add class to show hints temporarily
        const videoButtons = worksSection.querySelectorAll('.video-play-btn');
        videoButtons.forEach((btn, index) => {
          setTimeout(() => {
            btn.classList.add('hint-visible');
            
            // Remove hint class after animation completes
            setTimeout(() => {
              btn.classList.remove('hint-visible');
            }, 4000); // Remove after 4 seconds (3s show + 1s fade)
          }, index * 300); // Stagger the animation
        });
      } else if (!entry.isIntersecting) {
        // Reset when section is out of view
        hasShownHints = false;
      }
    });
  }, {
    threshold: 0.3 // Trigger when 30% of section is visible
  });
  
  observer.observe(worksSection);
}

// Initialize video hints on page load
document.addEventListener('DOMContentLoaded', showVideoHints);

// Show video hints when lightbox is opened
function showVideoHintsInLightbox() {
  // Listen for lightbox open events
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('gallery-lightbox3')) {
      // Find the corresponding video button
      const workCard = e.target.closest('.list-work');
      if (workCard) {
        const videoBtn = workCard.querySelector('.video-play-btn');
        if (videoBtn) {
          // Clone the video button for lightbox
          const clonedBtn = videoBtn.cloneNode(true);
          clonedBtn.style.position = 'fixed';
          clonedBtn.style.top = '20px';
          clonedBtn.style.right = '80px'; /* Move away from close button */
          clonedBtn.style.zIndex = '10002';
          
          // Add to lightbox container
          setTimeout(() => {
            const lightboxContainer = document.querySelector('.glightbox-container');
            if (lightboxContainer) {
              lightboxContainer.appendChild(clonedBtn);
              
              // Show hint after a short delay
              setTimeout(() => {
                clonedBtn.classList.add('hint-visible');
                
                // Remove hint after 4 seconds
                setTimeout(() => {
                  clonedBtn.classList.remove('hint-visible');
                  // Remove the cloned button after animation
                  setTimeout(() => {
                    if (clonedBtn.parentNode) {
                      clonedBtn.parentNode.removeChild(clonedBtn);
                    }
                  }, 1000);
                }, 4000);
              }, 500);
            }
          }, 300); // Wait for lightbox to fully open
        }
      }
    }
  });
}

// Initialize lightbox video hints
document.addEventListener('DOMContentLoaded', showVideoHintsInLightbox);
