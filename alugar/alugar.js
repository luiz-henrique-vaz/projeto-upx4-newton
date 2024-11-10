const dataRetirada = document.getElementById('data-retirada');
const dataDevolucao = document.getElementById('data-devolucao');
const valorTotalElement = document.getElementById('valor-total');
const diasTotal = document.getElementById('dias');
const valorDiaria = 105; // Substitua pelo valor diário do veículo

dataRetirada.addEventListener('change', calcularValorTotal);
dataDevolucao.addEventListener('change', calcularValorTotal);

function calcularValorTotal() {
  const data1 = new Date(dataRetirada.value);
  const data2 = new Date(dataDevolucao.value);
  const umDia = 1000 * 60 * 60 * 24;
  const diferencaEmMilisegundos = Math.abs(data2 - data1);
  const dias = Math.ceil(diferencaEmMilisegundos / umDia);
  const valorTotal = dias * valorDiaria;
  valorTotalElement.textContent = valorTotal;
  diasTotal.textContent = dias;
  localStorage.setItem('valorTotal', valorTotal);
}