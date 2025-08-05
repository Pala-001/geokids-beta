document.addEventListener('DOMContentLoaded', () => {
    // Lógica para cambiar de pestaña
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

    // Lógica para la calculadora interactiva del círculo
    const radiusSlider = document.getElementById('radius-slider');
    const radiusValueSpan = document.getElementById('radius-value');
    const dynamicCircle = document.getElementById('dynamic-circle');
    const resultsArea = document.getElementById('results-area');
    const conversionBox = document.getElementById('conversion-box');
    const PI = Math.PI;

    function updateCircleCalculator() {
        const radius = parseFloat(radiusSlider.value);
        const diameter = radius * 2;

        // 1. Actualizar valores de texto y el círculo visual
        radiusValueSpan.textContent = `${radius} cm`;
        dynamicCircle.style.width = `${diameter}px`;
        dynamicCircle.style.height = `${diameter}px`;

        // 2. Calcular circunferencia y área
        const circumference = diameter * PI;
        const area = PI * (radius * radius);

        // 3. Mostrar resultados en cm
        resultsArea.innerHTML = `
            <strong>Resultados para un radio de ${radius} cm:</strong><br>
            Circunferencia = 2 × π × ${radius} = <strong>${circumference.toFixed(2)} cm</strong><br>
            Área = π × ${radius}² = <strong>${area.toFixed(2)} cm²</strong>
        `;

        // 4. Calcular y mostrar conversión a metros
        const radiusM = radius / 100;
        const circumferenceM = circumference / 100;
        const areaM = area / 10000;

        conversionBox.innerHTML = `
            <strong>En Metros:</strong><br>
            Circunferencia: <strong>${circumferenceM.toFixed(2)} m</strong> | Área: <strong>${areaM.toFixed(4)} m²</strong>
        `;
    }

    radiusSlider.addEventListener('input', updateCircleCalculator);

    // Llamada inicial para que todo aparezca al cargar la página
    updateCircleCalculator();
});
