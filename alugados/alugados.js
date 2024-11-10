const botao = document.getElementById('btn-bloquear-desbloquear');
let estadoVeiculo = 'desbloqueado';

botao.addEventListener('click', () => {
  estadoVeiculo = estadoVeiculo === 'desbloqueado' ? 'bloqueado' : 'desbloqueado';
  botao.textContent = estadoVeiculo === 'desbloqueado' ? 'Desbloquear' : 'Bloquear';
  botao.classList.toggle('btn-success');
  botao.classList.toggle('btn-danger');
});