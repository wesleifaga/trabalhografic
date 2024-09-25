const ctx = document.getElementById('meuGrafico').getContext('2d');
let meuGrafico = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Vendas',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Atualizar gráfico ao clicar no botão
document.getElementById('atualizarGrafico').addEventListener('click', function() {
    // Atualizar os dados
    meuGrafico.data.datasets[0].data = [7, 11, 5, 8, 3, 6]; // Novos dados
    meuGrafico.update(); // Atualiza o gráfico
});
