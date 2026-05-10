const heroName = document.querySelector('.hero-copy h1');
const text = 'ashton';
let index = 0;

function typeName() {
  if (index < text.length) {
    heroName.innerHTML = `hi, <span class="accent">${text.slice(0, index + 1)}</span><span class="curser">|</span>`;
    index += 1;
    setTimeout(typeName, 120);
  } else {
    heroName.innerHTML = `hi, <span class="accent">${text}</span><span class="curser">|</span>`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  typeName();
});

const projectCards = document.querySelectorAll('.project-card');
const detailPanel = document.getElementById('project-detail-panel');
const detailContent = document.getElementById('project-detail-content');
const detailClose = document.getElementById('project-detail-close');

const projectDetails = {
  playpred: {
    title: 'AI Sports Play Prediction Platform',
    copy: `A full-stack application powered by React, FastAPI, and machine learning models to analyze NFL and NBA plays.
      The project includes a real-time visualization layer, a REST API for data queries, and a pipeline that processes hundreds of thousands of events.`,
    list: [
      'Processed 356K+ NFL plays and 16M+ NBA events through a data pipeline.',
      'Built ensemble models using Random Forest and XGBoost for predictions.',
      'Designed interactive visualizations with Three.js for game situation analysis.'
    ]
  },
  knn: {
    title: 'K-Nearest Neighbors Classifier',
    copy: `A Python-based KNN classifier for geographic temperature analysis with a complete ML workflow.
      The project focuses on efficient distance computation and configurable model behavior for improved performance.`,
    list: [
      'Implemented KNN using Python and pandas.',
      'Optimized Euclidean distance calculations with NumPy, reducing computation time by 40%.',
      'Built a configurable majority voting system and workflow controls.'
    ]
  },
  grin: {
    title: 'Grin Language Interpreter',
    copy: `A custom interpreter for a small programming language featuring variables, loops, comparisons, and subroutines.
      The interpreter includes lexical analysis, parsing, and label resolution to execute complex control flow.`,
    list: [
      'Implemented parsing and execution for 13 language commands.',
      'Designed an object-oriented parser with support for loops and conditional jumps.',
      'Created a label resolution system mapping program labels to line numbers.'
    ]
  }
};

function openProjectDetail(key) {
  const project = projectDetails[key];
  if (!project) return;

  detailContent.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.copy}</p>
    <ul>${project.list.map(item => `<li>${item}</li>`).join('')}</ul>
  `;
  detailPanel.classList.add('active');
}

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    const detailKey = card.dataset.detail;
    openProjectDetail(detailKey);
  });
});

detailClose.addEventListener('click', () => {
  detailPanel.classList.remove('active');
});

detailPanel.addEventListener('click', event => {
  if (event.target === detailPanel) {
    detailPanel.classList.remove('active');
  }
});
