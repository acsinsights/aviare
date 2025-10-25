// Service Details Custom JavaScript

document.addEventListener("DOMContentLoaded", function () {
    // Hero section enhanced animations
    function initHeroAnimations() {
        const heroSection = document.querySelector(".rts-banner-area");
        const subtitle = document.querySelector(".subtitle-banner");
        const title = document.querySelector(".banner-title .title");
        const description = document.querySelector(
            ".banner-three-inner .disc"
        );
        const button = document.querySelector(".button-group .rts-btn");

        // Hide all elements initially
        heroSection.style.opacity = "0";
        heroSection.style.transform = "translateY(50px)";
        subtitle.style.opacity = "0";
        title.style.opacity = "0";
        description.style.opacity = "0";
        button.style.opacity = "0";

        // Animate hero section entrance
        setTimeout(() => {
            heroSection.style.transition = "all 1s ease-out";
            heroSection.style.opacity = "1";
            heroSection.style.transform = "translateY(0)";
        }, 100);

        // Animate subtitle with typewriter effect
        if (subtitle) {
            setTimeout(() => {
                animateTypewriter(subtitle, 30);
            }, 300);
        }

        // Animate title with word-by-word effect (after subtitle completes)
        if (title) {
            setTimeout(() => {
                animateTitleWords(title);
            }, 1200);
        }

        // Animate description with fade and slide (after title completes)
        if (description) {
            setTimeout(() => {
                animateDescription(description);
            }, 2800);
        }

        // Animate button with bounce effect (after description completes)
        if (button) {
            setTimeout(() => {
                animateButton(button);
            }, 3600);
        }

        // Add floating particles
        createFloatingParticles();
    }

    // Typewriter effect for subtitle
    function animateTypewriter(element, speed = 50) {
        const text = element.textContent;
        element.textContent = "";
        element.style.opacity = "1";
        element.style.borderRight = "2px solid rgba(255, 255, 255, 0.7)";

        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
                // Remove cursor after completion
                setTimeout(() => {
                    element.style.borderRight = "none";
                }, 1000);
            }
        }, speed);
    }

    // Word-by-word animation for title with 2 lines
    function animateTitleWords(element) {
        const text = element.textContent;
        const words = text.split(" ");

        // Set fixed height to prevent layout shift
        element.style.minHeight = "120px";
        element.style.display = "flex";
        element.style.flexDirection = "column";
        element.style.justifyContent = "center";
        element.innerHTML = "";
        element.style.opacity = "1";

        // Split into 2 lines: "Expert Business" and "Setup in Dubai"
        const line1Words = ["Expert", "Business"];
        const line2Words = ["Setup", "in", "Dubai"];

        // Create first line
        const line1 = document.createElement("div");
        line1.style.lineHeight = "1.2";
        line1.style.marginBottom = "10px";
        line1.style.minHeight = "50px";
        line1.style.display = "flex";
        line1.style.alignItems = "center";
        element.appendChild(line1);

        // Create second line
        const line2 = document.createElement("div");
        line2.style.lineHeight = "1.2";
        line2.style.minHeight = "50px";
        line2.style.display = "flex";
        line2.style.alignItems = "center";
        element.appendChild(line2);

        // Animate first line words
        line1Words.forEach((word, index) => {
            const span = document.createElement("span");
            span.textContent = word;
            span.style.opacity = "0";
            span.style.transform = "translateY(20px)";
            span.style.transition =
                "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
            span.style.marginRight = "12px";
            span.style.display = "inline-block";
            line1.appendChild(span);

            setTimeout(() => {
                span.style.opacity = "1";
                span.style.transform = "translateY(0)";
            }, index * 80);
        });

        // Animate second line words (after first line completes)
        setTimeout(() => {
            line2Words.forEach((word, index) => {
                const span = document.createElement("span");
                span.textContent = word;
                span.style.opacity = "0";
                span.style.transform = "translateY(20px)";
                span.style.transition =
                    "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
                span.style.marginRight = "12px";
                span.style.display = "inline-block";
                line2.appendChild(span);

                setTimeout(() => {
                    span.style.opacity = "1";
                    span.style.transform = "translateY(0)";
                }, index * 80);
            });
        }, line1Words.length * 80 + 100);
    }

    // Animate description with slide effect
    function animateDescription(element) {
        element.style.transition = "all 0.8s ease";

        setTimeout(() => {
            element.style.opacity = "1";
            element.style.transform = "translateX(0)";
        }, 100);
    }

    // Animate button with bounce
    function animateButton(element) {
        element.style.transition =
            "all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)";

        setTimeout(() => {
            element.style.opacity = "1";
            element.style.transform = "scale(1) translateY(0)";
        }, 100);
    }

    // Create floating particles
    function createFloatingParticles() {
        const heroSection = document.querySelector(".rts-banner-area");
        const particleCount = 20;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement("div");
            particle.className = "floating-particle";
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 2}px;
                height: ${Math.random() * 4 + 2}px;
                background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2
                });
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                pointer-events: none;
                z-index: 1;
                animation: floatParticle ${Math.random() * 10 + 10
                }s linear infinite;
            `;
            heroSection.appendChild(particle);
        }
    }

    // Add scroll-triggered animations (removed jerky scroll)
    function addScrollAnimations() {
        // Removed parallax scroll to prevent jerky movement
    }

    // Initialize all animations
    initHeroAnimations();
    addScrollAnimations();

    // Add click effect for button
    const button = document.querySelector(".button-group .rts-btn");
    if (button) {
        button.addEventListener("click", function (e) {
            // Create ripple effect
            const ripple = document.createElement("span");
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }

    // Service Cards Scroll Animation - Enhanced Smoothness
    function initServiceCardsAnimation() {
        const serviceSection = document.querySelector(".rts-service-area5");
        const serviceCards = document.querySelectorAll(
            ".rts-service-area5 .service-one-inner-four"
        );

        if (!serviceSection || serviceCards.length === 0) return;

        const observerOptions = {
            threshold: 0.2,
            rootMargin: "0px 0px -100px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Animate cards with smoother staggered timing
                    serviceCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add("animate-in");

                            // Add subtle delay for each element inside the card
                            const cardElements = card.querySelectorAll(
                                ".icon, .content, .btn-primary-3"
                            );
                            cardElements.forEach((element, elementIndex) => {
                                setTimeout(() => {
                                    element.style.opacity = "1";
                                    element.style.transform = "translateY(0)";
                                }, elementIndex * 100);
                            });
                        }, index * 150); // Reduced delay for smoother flow
                    });

                    // Unobserve after animation to prevent re-triggering
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        observer.observe(serviceSection);
    }

    // Initialize service cards animation
    initServiceCardsAnimation();

    // High Quality Services Section Animation
    function initHighQualityServicesAnimation() {
        const servicesSection = document.querySelector(
            ".rts-service-area-main"
        );
        const serviceCards = document.querySelectorAll(
            ".rts-service-area-main .service-one-inner"
        );

        if (!servicesSection || serviceCards.length === 0) return;

        // Initially hide cards with their animation positions
        serviceCards.forEach((card) => {
            if (card.classList.contains("animate-left")) {
                card.style.opacity = "0";
                card.style.transform =
                    "translateX(-120px) rotateY(-15deg) scale(0.9)";
            } else if (card.classList.contains("animate-right")) {
                card.style.opacity = "0";
                card.style.transform =
                    "translateX(120px) rotateY(15deg) scale(0.9)";
            } else if (card.classList.contains("animate-center")) {
                card.style.opacity = "0";
                card.style.transform = "translateY(80px) scale(0.9)";
            }
        });

        const observerOptions = {
            threshold: 0.2,
            rootMargin: "0px 0px -100px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Animate cards with staggered timing
                    serviceCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add("animate-in");
                            card.style.opacity = "1";
                            card.style.transform =
                                "translate(0, 0) rotateY(0deg) scale(1)";

                            // Add subtle delay for each element inside the card
                            const cardElements = card.querySelectorAll(
                                ".thumbnail, .service-details, .rts-read-more"
                            );
                            cardElements.forEach((element, elementIndex) => {
                                setTimeout(() => {
                                    element.style.opacity = "1";
                                    element.style.transform = "translateY(0)";
                                }, elementIndex * 100);
                            });
                        }, index * 120); // Faster stagger for 6 cards
                    });

                    // Unobserve after animation to prevent re-triggering
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        observer.observe(servicesSection);
    }

    // Initialize high quality services animation
    initHighQualityServicesAnimation();

    // More About Us Section Animation
    function initMoreAboutUsAnimation() {
        const aboutSection = document.querySelector(
            ".rts-business-solution5"
        );
        const leftContent = document.querySelector(
            ".rts-business-solution5 .rts-business-solution-right"
        );
        const rightImage = document.querySelector(
            ".rts-business-solution5 .rts-business-solution-left"
        );

        if (!aboutSection || !leftContent || !rightImage) return;

        const observerOptions = {
            threshold: 0.3,
            rootMargin: "0px 0px -100px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Animate left content first
                    setTimeout(() => {
                        leftContent.classList.add("animate-in");
                    }, 100);

                    // Animate right image with slight delay
                    setTimeout(() => {
                        rightImage.classList.add("animate-in");
                    }, 300);

                    // Unobserve after animation to prevent re-triggering
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        observer.observe(aboutSection);
    }

    // Initialize more about us animation
    initMoreAboutUsAnimation();

    // All Sections Animation Function
    function initAllSectionsAnimation() {
        const sections = [
            { selector: ".rts-trusted-client2", name: "trusted-clients" },
            { selector: ".rts-pricing-plane", name: "pricing" },
            { selector: ".rts-testimonials-h2-area", name: "testimonials" },
            { selector: ".easy-steps-area", name: "steps" },
            { selector: ".rts-blog-area", name: "blog" },
            { selector: ".rts-contact-area", name: "contact" },
        ];

        sections.forEach((section) => {
            const element = document.querySelector(section.selector);
            if (!element) return;

            const observerOptions = {
                threshold: 0.2,
                rootMargin: "0px 0px -100px 0px",
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Add animate-in class to trigger animations
                        entry.target.classList.add("animate-in");

                        // Special handling for different sections
                        if (section.name === "trusted-clients") {
                            // Stagger client logos
                            const clientLogos = entry.target.querySelectorAll(
                                ".client-wrapper-one a"
                            );
                            clientLogos.forEach((logo, index) => {
                                setTimeout(() => {
                                    logo.style.opacity = "1";
                                    logo.style.transform = "translateY(0) scale(1)";
                                }, index * 100);
                            });
                        } else if (section.name === "pricing") {
                            // Stagger pricing cards
                            const pricingCards = entry.target.querySelectorAll(
                                ".pricing-wrapper-one"
                            );
                            pricingCards.forEach((card, index) => {
                                setTimeout(() => {
                                    card.style.opacity = "1";
                                    card.style.transform = "translateY(0) scale(1)";
                                }, index * 150);
                            });
                        } else if (section.name === "steps") {
                            // Enhanced step cards animation with staggered timing
                            const stepCards = entry.target.querySelectorAll(
                                ".single-steps-area-nine"
                            );
                            stepCards.forEach((card, index) => {
                                setTimeout(() => {
                                    card.style.opacity = "1";
                                    card.style.transform =
                                        "translate(0, 0) scale(1) rotateY(0deg)";

                                    // Animate elements inside each card
                                    const stepNumber = card.querySelector(".step-number");
                                    const title = card.querySelector(".title");
                                    const disc = card.querySelector(".disc");

                                    setTimeout(() => {
                                        if (stepNumber) {
                                            stepNumber.style.opacity = "1";
                                            stepNumber.style.transform = "translateY(0)";
                                        }
                                    }, 200);

                                    setTimeout(() => {
                                        if (title) {
                                            title.style.opacity = "1";
                                            title.style.transform = "translateY(0)";
                                        }
                                    }, 400);

                                    setTimeout(() => {
                                        if (disc) {
                                            disc.style.opacity = "1";
                                            disc.style.transform = "translateY(0)";
                                        }
                                    }, 600);
                                }, index * 300); // Increased delay for more dramatic effect
                            });
                        } else if (section.name === "blog") {
                            // Enhanced blog cards animation with staggered timing
                            const blogCards = entry.target.querySelectorAll(
                                ".rts-blog-area-style-seven"
                            );
                            blogCards.forEach((card, index) => {
                                setTimeout(() => {
                                    card.style.opacity = "1";
                                    card.style.transform =
                                        "translate(0, 0) scale(1) rotateX(0deg)";

                                    // Animate elements inside each card
                                    const thumbnail = card.querySelector(".thumbnail");
                                    const contentInner =
                                        card.querySelector(".content-inner");

                                    setTimeout(() => {
                                        if (thumbnail) {
                                            thumbnail.style.opacity = "1";
                                            thumbnail.style.transform = "translateY(0)";
                                        }
                                    }, 200);

                                    setTimeout(() => {
                                        if (contentInner) {
                                            contentInner.style.opacity = "1";
                                            contentInner.style.transform = "translateY(0)";
                                        }
                                    }, 400);
                                }, index * 250); // Staggered timing for blog cards
                            });
                        }

                        // Unobserve after animation
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            observer.observe(element);
        });
    }

    // Initialize all sections animation
    initAllSectionsAnimation();
});

// Contact Form JavaScript
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("consultationForm");
    const successMessage = document.getElementById("successMessage");
    const errorMessage = document.getElementById("errorMessage");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // Hide previous messages
            successMessage.style.display = "none";
            errorMessage.style.display = "none";

            // Get form data
            const formData = new FormData(form);
            const data = {
                name: formData.get("name"),
                email: formData.get("email"),
                phone: formData.get("phone"),
                service: formData.get("service"),
                message: formData.get("message"),
            };

            // Validate form
            if (!data.name || !data.email || !data.phone || !data.service) {
                showError("Please fill in all required fields.");
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showError("Please enter a valid email address.");
                return;
            }

            // Phone validation
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(data.phone.replace(/\s/g, ""))) {
                showError("Please enter a valid phone number.");
                return;
            }

            // Simulate form submission (replace with actual API call)
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;

            submitButton.innerHTML =
                '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitButton.disabled = true;

            // Simulate API call delay
            setTimeout(() => {
                // For demo purposes, always show success
                // In real implementation, handle actual API response
                showSuccess();
                form.reset();

                submitButton.innerHTML = originalText;
                submitButton.disabled = false;

                // Log form data (in real implementation, send to server)
                console.log("Form submitted:", data);
            }, 2000);
        });
    }

    function showSuccess() {
        successMessage.style.display = "block";
        errorMessage.style.display = "none";

        // Scroll to success message
        successMessage.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
        });

        // Auto-hide after 5 seconds
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 5000);
    }

    function showError(message) {
        errorMessage.innerHTML =
            '<i class="fas fa-exclamation-circle"></i> ' + message;
        errorMessage.style.display = "block";
        successMessage.style.display = "none";

        // Scroll to error message
        errorMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });

        // Auto-hide after 5 seconds
        setTimeout(() => {
            errorMessage.style.display = "none";
        }, 5000);
    }

    // Add real-time validation
    const inputs = form.querySelectorAll("input, select, textarea");
    inputs.forEach((input) => {
        input.addEventListener("blur", function () {
            validateField(this);
        });

        input.addEventListener("input", function () {
            if (this.classList.contains("error")) {
                validateField(this);
            }
        });
    });

    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMsg = "";

        // Remove previous error styling
        field.classList.remove("error");

        if (field.hasAttribute("required") && !value) {
            isValid = false;
            errorMsg = "This field is required.";
        } else if (field.type === "email" && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMsg = "Please enter a valid email address.";
            }
        } else if (field.type === "tel" && value) {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(value.replace(/\s/g, ""))) {
                isValid = false;
                errorMsg = "Please enter a valid phone number.";
            }
        }

        if (!isValid) {
            field.classList.add("error");
            // You can add a tooltip or inline error message here
        }

        return isValid;
    }
});
