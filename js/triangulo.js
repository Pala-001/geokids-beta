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

    // Lógica para la calculadora interactiva del triángulo
    const baseSlider = document.getElementById('base-slider');
    const heightSlider = document.getElementById('height-slider');
    const baseValueSpan = document.getElementById('base-value');
    const heightValueSpan = document.getElementById('height-value');
    const dynamicTriangle = document.getElementById('dynamic-triangle');
    const resultsArea = document.getElementById('results-area');
    const conversionBox = document.getElementById('conversion-box');

    function updateTriangleCalculator() {
        const base = parseFloat(baseSlider.value);
        const height = parseFloat(heightSlider.value);

        // 1. Actualizar valores de texto y el triángulo visual
        baseValueSpan.textContent = `${base} cm`;
        heightValueSpan.textContent = `${height} cm`;

        // El ancho de un triángulo con CSS border es la suma de los bordes izq/der
        dynamicTriangle.style.borderLeftWidth = `${base / 2}px`;
        dynamicTriangle.style.borderRightWidth = `${base / 2}px`;
        dynamicTriangle.style.borderBottomWidth = `${height}px`;

        // 2. Calcular el área
        const area = (base * height) / 2;

        // 3. Mostrar resultados en cm
        resultsArea.innerHTML = `
            <strong>Área del Triángulo:</strong><br>
            Fórmula: (${base} × ${height}) / 2 = <strong>${area.toFixed(0)} cm²</strong>
        `;

        // 4. Calcular y mostrar conversión a metros
        const baseM = base / 100;
        const heightM = height / 100;
        const areaM = area / 10000; // 1 m² = 10,000 cm²

        conversionBox.innerHTML = `
            <strong>En Metros:</strong><br>
            Dimensiones: ${baseM.toFixed(2)} m de base × ${heightM.toFixed(2)} m de alto<br>
            Área: <strong>${areaM.toFixed(4)} m²</strong>
        `;
    }

    baseSlider.addEventListener('input', updateTriangleCalculator);
    heightSlider.addEventListener('input', updateTriangleCalculator);

    // Llamada inicial para que todo aparezca al cargar la página
    updateTriangleCalculator();
});
