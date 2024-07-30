document.getElementById('question-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Handle form submission and append the question to the questions section
    let questionText = document.getElementById('question-text').value;
    let questionAudio = document.getElementById('question-audio').files[0];
    let questionVideo = document.getElementById('question-video').files[0];

    let questionDiv = document.createElement('div');
    questionDiv.classList.add('question');

    if (questionText) {
        let p = document.createElement('p');
        p.classList.add('question-text');
        p.innerText = questionText;
        questionDiv.appendChild(p);
    }

    if (questionAudio) {
        let audio = document.createElement('audio');
        audio.controls = true;
        let source = document.createElement('source');
        source.src = URL.createObjectURL(questionAudio);
        source.type = questionAudio.type;
        audio.appendChild(source);
        questionDiv.appendChild(audio);
    }

    if (questionVideo) {
        let video = document.createElement('video');
        video.controls = true;
        let source = document.createElement('source');
        source.src = URL.createObjectURL(questionVideo);
        source.type = questionVideo.type;
        video.appendChild(source);
        questionDiv.appendChild(video);
    }

    document.querySelector('.questions').appendChild(questionDiv);
});
