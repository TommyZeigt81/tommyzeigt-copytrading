
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".metric");
    counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute("data-target"));
        let count = 0;
        const increment = target / 120;

        const update = () => {
            count += increment;
            if (count < target) {
                counter.innerText = count.toFixed(1);
                requestAnimationFrame(update);
            } else {
                counter.innerText = target;
            }
        };
        update();
    });
});
