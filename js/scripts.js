import machines from '../data/horizon_machine_data.js';
/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

function createTitle(name) {
  return `
    <div class="name">${name}</div>
  `;
}

function createImage(src, alt) {
  if (src == undefined) {
    src = '../assets/images/grazer.webp';
  }

  return `
    <div class="image-box">
      <img
        src=${src}
        alt=${alt}
      />
    </div>
  `;
}

function createRow(label, values) {
  const items = Array.isArray(values) ? values : [values];
  const listItems = items.map((item) => `<li>${item}</li>`).join('');
  return `
    <div class="row">
      <h4>${label}</h4>
      <ul>
        ${listItems}
      </ul>
    </div>
  `;
}

function renderMachines(machines) {
  const container = document.getElementById('machineContainer');
  if (container == null) return;
  container.innerHTML = '';

  machines.forEach((machine, index) => {
    const card = document.createElement('div');
    card.className = 'machine-card';
    card.dataset.index = index;

    card.innerHTML = `
      ${createTitle(machine.Machine)}
      ${createImage(machine.Image, machine.ImageAlt)}
      ${createRow('Challenge Level', machine.ChallengeLevel.Base)}
      ${createRow('HP', machine.HP.Base)}
      ${createRow('Size', machine.Size)}
      ${createRow('Class', machine.Class)}
      ${createRow('Cauldron', machine.Cauldron)}
    `;

    container.appendChild(card);
  });
}

function filterAndRenderMachines() {
  const appearsIn = document.getElementById('appearsIn').value.toLowerCase();
  const classType = document.getElementById('class').value.toLowerCase();
  const cauldron = document.getElementById('cauldron').value.toLowerCase();
  const size = document.getElementById('size').value.toLowerCase();
  const searchQuery = document.getElementById('searchbar').value.toLowerCase();
  const sortBy = document.getElementById('sort').value;

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  let filteredMachines = machines.filter(machine => {
    const matchesSearch = machine.Machine.toLowerCase().includes(searchQuery);
    const matchesAppearsIn = !appearsIn || machine.AppearsIn.some(game => game.toLowerCase() === appearsIn);
    const matchesClass = !classType || machine.Class.toLowerCase() === classType;
    const matchesCauldron = !cauldron || machine.Cauldron.some(c => c.toLowerCase() === cauldron);
    const matchesSize = !size || machine.Size.toLowerCase() === size;

    return matchesSearch && matchesAppearsIn && matchesClass && matchesCauldron && matchesSize;
  });

  // Sorting logic
  filteredMachines.sort((a, b) => {
    if (sortBy === 'name') {
      return a.Machine.localeCompare(b.Machine);
    } else if (sortBy === 'challengeLevel') {
      return a.ChallengeLevel.Base - b.ChallengeLevel.Base;
    } else if (sortBy === 'hp') {
      return a.HP.Base - b.HP.Base;
    } else if (sortBy === 'size') {
      const sizeOrder = { lightweight: 1, midweight: 2, heavyweight: 3 };
      return sizeOrder[a.Size.toLowerCase()] - sizeOrder[b.Size.toLowerCase()];
    }
    return 0;
  });

  renderMachines(filteredMachines);
}

document.getElementById('filterForm').addEventListener('input', filterAndRenderMachines);
document.getElementById('searchbar').addEventListener('input', filterAndRenderMachines);
document.getElementById('sort').addEventListener('change', filterAndRenderMachines);

renderMachines(machines);
