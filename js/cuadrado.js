document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.main-nav button');
    const contentSections = document.querySelectorAll('.content-section');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            contentSections.forEach(section => {
                section.classList.toggle('active', section.id === targetTab + '-content');
            });
        });
    });

    const slider = document.getElementById('side-slider');
    const visualSquare = document.getElementById('visual-square');
    const sliderValueDisplay = document.getElementById('slider-value');
    const resultsArea = document.getElementById('results-area');
    const conversionArea = document.getElementById('conversion-area');

    function updateSquare() {
        const sideInCm = parseInt(slider.value);
        visualSquare.style.width = sideInCm + 'px';
        visualSquare.style.height = sideInCm + 'px';
        sliderValueDisplay.textContent = sideInCm;
        const area = sideInCm * sideInCm;
        const perimeter = 4 * sideInCm;

        resultsArea.innerHTML = `
            Área = ${sideInCm} × ${sideInCm} = <strong>${area.toLocaleString()} cm²</strong><br>
            Perímetro = 4 × ${sideInCm} = <strong>${perimeter.toLocaleString()} cm</strong>
        `;

        const sideInMeters = sideInCm / 100;
        const areaInMeters = area / 10000;
        const perimeterInMeters = perimeter / 100;

        conversionArea.innerHTML = `
            <strong>En metros:</strong> Área: ${areaInMeters.toFixed(4)} m² | Perímetro: ${perimeterInMeters.toFixed(2)} m
        `;
    }

    if (slider) {
        slider.addEventListener('input', updateSquare);
        updateSquare();
    }
});
