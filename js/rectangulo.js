document.addEventListener('DOMContentLoaded', () => {
    // Lógica para cambiar de pestaña (Aprender, Calcular, Practicar)
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

    // Lógica para la calculadora interactiva
    const baseSlider = document.getElementById('base-slider');
    const heightSlider = document.getElementById('height-slider');
    const baseValueSpan = document.getElementById('base-value');
    const heightValueSpan = document.getElementById('height-value');
    const dynamicRectangle = document.getElementById('dynamic-rectangle');
    const resultsArea = document.getElementById('results-area');
    const conversionBox = document.getElementById('conversion-box');

    function updateCalculator() {
        const base = parseFloat(baseSlider.value);
        const height = parseFloat(heightSlider.value);

        // 1. Actualizar valores de los sliders y el rectángulo visual
        baseValueSpan.textContent = `${base} cm`;
        heightValueSpan.textContent = `${height} cm`;
        dynamicRectangle.style.width = `${base}px`;
        dynamicRectangle.style.height = `${height}px`;

        // 2. Calcular perímetro y área
        const perimeter = 2 * (base + height);
        const area = base * height;

        // 3. Mostrar resultados en cm
        resultsArea.innerHTML = `
            <strong>Resultados:</strong><br>
            Perímetro = 2 × (${base} + ${height}) = <strong>${perimeter.toFixed(0)} cm</strong><br>
            Área = ${base} × ${height} = <strong>${area.toFixed(0)} cm²</strong>
        `;

        // 4. Calcular y mostrar conversión a metros
        const baseM = base / 100;
        const heightM = height / 100;
        const perimeterM = perimeter / 100;
        const areaM = area / 10000; // 1 m² = 10,000 cm²

        conversionBox.innerHTML = `
            <strong>En Metros:</strong><br>
            Dimensiones: ${baseM.toFixed(2)} m de ancho × ${heightM.toFixed(2)} m de alto<br>
            Perímetro: <strong>${perimeterM.toFixed(2)} m</strong> | Área: <strong>${areaM.toFixed(4)} m²</strong>
        `;
    }

    // Añadir los "event listeners" a los sliders
    baseSlider.addEventListener('input', updateCalculator);
    heightSlider.addEventListener('input', updateCalculator);

    // Llamar a la función una vez al cargar la página para inicializar
    updateCalculator();
});
