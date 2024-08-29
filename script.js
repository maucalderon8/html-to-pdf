document.addEventListener("DOMContentLoaded", () => {
    // Obtener el parámetro 'html' de la URL
    const params = new URLSearchParams(window.location.search);
    const htmlParam = params.get('html');

    if (htmlParam) {
        // Decodificar el parámetro y establecerlo como el contenido HTML
        const contentElement = document.getElementById('html-content');
        contentElement.innerHTML = decodeURIComponent(htmlParam);
    }

    document.getElementById('download').addEventListener('click', () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Obtén el contenido HTML actualizado
        const content = document.getElementById('content').innerHTML;

        // Añadir el contenido al PDF
        doc.html(content, {
            callback: function (doc) {
                doc.save('documento.pdf');
            },
            x: 10,
            y: 10
        });
    });
});
