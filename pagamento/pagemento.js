const valorTotal = localStorage.getItem('valorTotal');
document.getElementById('valor-total').textContent = valorTotal;

const formaPagamento = document.getElementById('forma-pagamento');
const dadosCartao = document.getElementById('dados-cartao');

formaPagamento.addEventListener('change', () => {
  if (formaPagamento.value === 'cartao') {
    dadosCartao.style.display = 'block';
  } else {
    dadosCartao.style.display = 'none';
  }
});