const scoreEl = (name, score) => {
  const generateIcon = name.split('')[0];
  const element = document.createElement('li');
  element.className = 'person-info';
  element.innerHTML = `
    <div class="person-info">
    <div class="person-infos-icon">
        <h1>${generateIcon}</h1>
    </div>
    <h4>${name}</h4>
    </div>


   <div class="score-infos">
    <p>score: <strong>${score}</strong></p>
    </div>
    `;
  return element;
};

export default scoreEl;