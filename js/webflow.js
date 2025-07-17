document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section"); 
	const cardComponents = document.querySelectorAll(".studio-card.w-inline-block");

    navLinks.forEach(link => {
        link.addEventListener("mouseenter", function () {
            this.style.transition = "color 0.3s ease, background-color 0.3s ease";
            this.style.color = "#ff6600"; // 悬停时字体颜色
        });

        link.addEventListener("mouseleave", function () {
            this.style.color = ""; // 恢复原始颜色
        });
    });

    window.addEventListener("scroll", function () {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (window.pageYOffset >= sectionTop - 50 && window.pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id"); // 获取当前区块的 ID
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("w--current"); // 移除所有链接的 w--current 类
            const targetSection = link.getAttribute("href").substring(1); // 获取链接的目标 ID

            if (targetSection === currentSection) {
                link.classList.add("w--current"); // 添加 w--current 类
            }
        });
    });
	
	cardComponents.forEach(card => {
	  const studioLogo = card.querySelector(".company-logo");
	  const studioText = card.querySelector(".studio-name--text"); // 找到子元素
	
	  card.addEventListener("mouseenter", function () {
		if(studioLogo) {
			studioLogo.style.transition = "transform 0.3s ease-out";
			studioLogo.style.transform = "translate3d(0px, -12px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
			studioLogo.style.transformStyle = "preserve-3d";
		}
	
	    if (studioText) {
	        studioText.style.transition = "transform 0.3s ease-out, opacity 0.3s ease-out";
	        studioText.style.transform = "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
	        studioText.style.transformStyle = "preserve-3d";
	        studioText.style.opacity = "1";
	    }
	  });
	
	  card.addEventListener("mouseleave", function () {
		if(studioLogo) {
			studioLogo.style.transform = "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
			studioLogo.style.transformStyle = "preserve-3d";
		}

	    if (studioText) {
	      studioText.style.transform = "translate3d(0px, -12px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
	      studioText.style.transformStyle = "preserve-3d";
	      studioText.style.opacity = "0"; 
	    }
	  });
	});
	
	const tabMenus = document.querySelectorAll(".team--member--tab"); // 获取所有 Tab 组件
	
	tabMenus.forEach(tabMenu => {
	    const tabs = tabMenu.querySelectorAll(".button-tab"); // 获取当前组件的 tabs
	
	    tabs.forEach(tab => {
	        tab.addEventListener("click", function (event) {
				const href = tab.getAttribute("href");
				
				if (href.startsWith("http://") || href.startsWith("https://")) {
				    return;
				}
				
	            event.preventDefault();
	
	            const parentTabMenu = tab.closest(".team--member--tab");
	            const parentTabs = parentTabMenu.querySelectorAll(".button-tab");
	
	            parentTabs.forEach(t => {
	                t.classList.remove("w--current");
	                t.setAttribute("aria-selected", "false");
	                t.setAttribute("tabindex", "-1");
	            });
	
	            tab.classList.add("w--current");
	            tab.setAttribute("aria-selected", "true");
	            tab.removeAttribute("tabindex");
	
	            const targetContent = document.querySelector(tab.getAttribute("href"));
	            if (!targetContent) return;
	
	            const parentTabContents = targetContent.parentElement.querySelectorAll(".w-tab-pane");
	
	            parentTabContents.forEach(content => {
	                content.style.display = "none";
	                content.classList.remove("w--tab-active");
	            });
	
	            targetContent.style.display = "block";
	            targetContent.classList.add("w--tab-active");
	                
	            if (targetContent.id === "w-tabs-0-data-w-pane-10") {
	                document.getElementById("w-tabs-0-data-w-pane-11").style.display = "none";
	            } else if (targetContent.id === "w-tabs-0-data-w-pane-11") {
	                document.getElementById("w-tabs-0-data-w-pane-10").style.display = "none";
	            }
	
	            if (targetContent.id === "w-tabs-0-data-w-pane-0") {
	                document.getElementById("w-tabs-0-data-w-pane-1").style.display = "none";
	            } else if (targetContent.id === "w-tabs-0-data-w-pane-1") {
	                document.getElementById("w-tabs-0-data-w-pane-0").style.display = "none";
	            }
				
				if (targetContent.id === "w-tabs-0-data-w-pane-20") {
				    document.getElementById("w-tabs-0-data-w-pane-21").style.display = "none";
				} else if (targetContent.id === "w-tabs-0-data-w-pane-21") {
				    document.getElementById("w-tabs-0-data-w-pane-20").style.display = "none";
				}
	        });
	    });
	});

	const heroCards = document.querySelectorAll(".hero-card");
	
	heroCards.forEach((card, index) => {
	    card.style.animation = `fadeIn 1s ease-out ${index * 0.2}s both`; // 延迟淡入效果
	});
});