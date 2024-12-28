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
	
	const tabs = document.querySelectorAll(".button-tab");
	const tabContents = document.querySelectorAll(".tab-pane");
	
	tabs.forEach(tab => {
	    tab.addEventListener("click", function (event) {
	        event.preventDefault(); // 阻止默认跳转行为
	
	        tabs.forEach(t => {
	            t.classList.remove("w--current");
	            t.setAttribute("aria-selected", "false");
	            t.setAttribute("tabindex", "-1");
	        });
	
	        tabContents.forEach(content => {
	            content.style.display = "none"; // 隐藏父级内容
	            content.classList.remove("w--tab-active");
	
	            const nestedTabPanes = content.querySelectorAll(".w-tab-pane");
	            nestedTabPanes.forEach(nestedPane => {
	                nestedPane.style.display = "none";
	                nestedPane.classList.remove("w--tab-active");
	            });
	        });
	
	        this.classList.add("w--current");
	        this.setAttribute("aria-selected", "true");
	        this.removeAttribute("tabindex");
	
	        const targetContent = document.querySelector(this.getAttribute("href"));
	        if (targetContent) {
	            targetContent.style.display = "block";
	            targetContent.classList.add("w--tab-active");
	
	            const nestedActivePane = targetContent.querySelector(".w-tab-pane");
	            if (nestedActivePane) {
	                nestedActivePane.style.display = "block";
	                nestedActivePane.classList.add("w--tab-active");
	            }
	        }
	    });
	});

});