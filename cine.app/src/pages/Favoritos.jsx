import { useState } from 'react';
import emailjs from '@emailjs/browser';

function Favoritos() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs.send("service_exbbbqn", "template_kp7mx31", templateParams, "b8mUXRfBcBWr00fVI")
      .then((response) => {
        console.log("Email enviado", response.status, response.text);
        setName('');
        setEmail('');
        setMessage('');
        setStatus('Mensagem enviada com sucesso!');
      }, (err) => {
        console.log("Erro", err);
        setStatus('Erro ao enviar a mensagem.');
      });
  }

  return (
    <main className="bg-gray-900 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-lg p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-6">Contato</h1>
        <form className="space-y-4" onSubmit={sendEmail}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nome</label>
            <input
              id="name"
              type="text"
              placeholder="Digite seu nome"
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Mensagem</label>
            <textarea
              id="message"
              placeholder="Digite sua mensagem..."
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              rows="4"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Enviar
          </button>

          {status && (
            <p className={`mt-4 text-center ${status.includes('Erro') ? 'text-red-500' : 'text-green-500'}`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}

export default Favoritos;
