// Elementos do DOM
const audio = document.getElementById('background-audio');
const audioControl = document.getElementById('audioControl');
let isPlaying = false;

// Configuração inicial do áudio
audio.volume = 0.3;

// Inicia o áudio automaticamente
window.addEventListener('load', function() {
    audio.play()
        .then(() => {
            console.log('Áudio iniciado com sucesso');
        })
        .catch(error => {
            console.log('Erro ao iniciar o áudio:', error);
        });
});

// Controle do botão de áudio
audioControl.addEventListener('click', function() {
    if (isPlaying) {
        audio.pause();
        this.innerHTML = '🔈';
        this.title = 'Ativar Áudio';
    } else {
        audio.play();
        this.innerHTML = '🔊';
        this.title = 'Desativar Áudio';
    }
    isPlaying = !isPlaying;
});

// Função para verificar a resposta
function checkAnswer(isPhishing) {
    const correctFeedback = document.getElementById('feedback-correct');
    const incorrectFeedback = document.getElementById('feedback-incorrect');
    const buttons = document.querySelectorAll('.btn-choice');

    // Desabilita os botões após a resposta
    buttons.forEach(button => button.disabled = true);

    // Mostra o feedback apropriado
    if (isPhishing) {
        correctFeedback.style.display = 'block';
        incorrectFeedback.style.display = 'none';
    } else {
        correctFeedback.style.display = 'none';
        incorrectFeedback.style.display = 'block';
    }
} 