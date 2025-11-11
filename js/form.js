document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const telefoneInput = document.getElementById('telefone');
  const emailInput = document.getElementById('email');

  // Máscara básica e formatação do telefone
  telefoneInput.addEventListener('input', function () {
    let val = telefoneInput.value.replace(/\D/g, ''); // remove tudo que não for número

    if (val.startsWith('55')) {
      val = val.replace(/^55/, '');
      telefoneInput.value = '+55 ' + formatTelefone(val);
    } else if (val.length >= 10) {
      telefoneInput.value = formatTelefone(val);
    } else {
      telefoneInput.value = val;
    }
  });

  function formatTelefone(value) {
    if (value.length <= 2) return `(${value}`;
    if (value.length <= 6) return `(${value.slice(0,2)}) ${value.slice(2)}`;
    if (value.length <= 10) return `(${value.slice(0,2)}) ${value.slice(2,6)}-${value.slice(6)}`;
    return `(${value.slice(0,2)}) ${value.slice(2,7)}-${value.slice(7,11)}`;
  }

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    // Validação do email
    if (!emailInput.checkValidity()) {
      alert('Digite um e-mail válido! Ex: usuario@dominio.com');
      emailInput.focus();
      return;
    }

    // Validação do telefone
    const telefone = telefoneInput.value.replace(/\D/g, '');
    if (telefone.length < 10) {
      alert('Por favor, insira um telefone válido com DDD.');
      telefoneInput.focus();
      return;
    }

    // Captura os serviços selecionados como array
    const servicosSelecionados = Array.from(form.querySelectorAll('input[name="servicos"]:checked'))
      .map(cb => cb.value);

    const data = {
      nome: form.nome.value,
      email: emailInput.value,
      telefone: telefoneInput.value,
      tipo_projeto: form.tipo_projeto.value,
      metragem: form.metragem.value,
      servicos: servicosSelecionados, // array
      mensagem: form.mensagem.value
    };

    try {
      const resp = await fetch('http://localhost:3000/enviar', { // URL do Node
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const json = await resp.json();
      if (json.ok) {
        alert('Mensagem enviada com sucesso! Obrigado.');
        form.reset();
      } else {
        alert('Erro ao enviar: ' + (json.error || 'Erro desconhecido'));
      }
    } catch (err) {
      console.error(err);
      alert('Erro ao enviar formulário. Verifique o servidor.');
    }
  });
});
