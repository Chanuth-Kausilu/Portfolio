document.addEventListener("DOMContentLoaded", function () {
    var tabs = document.getElementById("tabs");

    tabs.addEventListener("click", function (event) {
        var targetElement = event.target;

        // Check if the clicked element or its parent is an anchor tag
        var isAnchor = targetElement.tagName === "A" || targetElement.parentElement.tagName === "A";

        if (isAnchor) {
            // Prevent the default behavior (scrolling)
            event.preventDefault();

            // Get the target section's offsetTop and scroll to it
            var targetId = (targetElement.getAttribute("href") || targetElement.parentElement.getAttribute("href")).substring(1); // Remove the '#' symbol
            var targetSection = document.getElementById(targetId);

            if (targetSection) {
                var offsetTop = targetSection.offsetTop - tabs.offsetHeight;
                console.log("OffsetTop:", offsetTop);

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    });
});
