import machines from '../data/horizon_machine_data.js';

/**
 * Creates the machine title for the machine card
 */
function createTitle(name) {
  return `
    <div class="name">${name}</div>
  `;
}

/**
 * Creates the image for the machine card
 */
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

/**
 * Creates the row that contains the label and value(s)
 */
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

/**
 * Loops through the machine array data to create a Machine Card
 * Machine Card displays machine info (name, image, level, hp, etc)
 */
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

/**
 * Filters the array of machines based on selected filters and search query.
 */
function filterMachines(appearsIn, classType, cauldron, size, searchQuery) {

  // Filter the machines array based on the filters
  let filteredMachines = machines.filter(machine => {
    // Check if value has been selected, if so compare matches
    const matchesAppearsIn = !appearsIn || machine.AppearsIn.some(game => game.toLowerCase() === appearsIn);
    const matchesClass = !classType || machine.Class.toLowerCase() === classType;
    const matchesCauldron = !cauldron || machine.Cauldron.some(c => c.toLowerCase() === cauldron);
    const matchesSize = !size || machine.Size.toLowerCase() === size;
    // Check search query
    const matchesSearch = machine.Machine.toLowerCase().includes(searchQuery);

    return matchesSearch && matchesAppearsIn && matchesClass && matchesCauldron && matchesSize;
  });

  return filteredMachines;
}

/**
 * Sorts the array of machines based on the selected sort by value
 */
function sortMachines(filteredMachines, sortBy) {
  const sizeOrder = { lightweight: 1, midweight: 2, heavyweight: 3 };

  return filteredMachines.sort((a, b) => {
    switch (sortBy) {
      // Sort by name
      case 'name':
        return a.Machine.localeCompare(b.Machine);
      // Sort by challenge level
      case 'challengeLevel': {
        let aLevel = a.ChallengeLevel.Base;
        let bLevel = b.ChallengeLevel.Base;

        if (aLevel === 'None') aLevel = Infinity;
        if (bLevel === 'None') bLevel = Infinity;

        return aLevel - bLevel;
      }
      // Sort by HP
      case 'hp': {
        let aHP = a.HP.Base;
        let bHP = b.HP.Base;

        if (aHP === 'None') aHP = Infinity;
        if (bHP === 'None') bHP = Infinity;

        return aHP - bHP;
      }
      // Sort by machine size
      case 'size': {
        const aSize = sizeOrder[a.Size.toLowerCase()];
        const bSize = sizeOrder[b.Size.toLowerCase()];

        return aSize - bSize;
      }

      default:
        return 0;
    }
  });
}

/**
 * Filters and sorts a list of machines based on user input from form elements,
 * then renders the resulting list.
 */
function filterAndRenderMachines() {
  // Grab and sanitize filter values (convert to lowercase)
  const appearsIn = document.getElementById('appearsIn').value.toLowerCase();
  const classType = document.getElementById('class').value.toLowerCase();
  const cauldron = document.getElementById('cauldron').value.toLowerCase();
  const size = document.getElementById('size').value.toLowerCase();

  // Grab and sanitize the search query entered by user
  const searchQuery = document.getElementById('searchbar').value.toLowerCase();

  // Grab the selected sorting criteria from the dropdown
  const sortBy = document.getElementById('sort').value;

  // Filtering Logic
  const filteredMachines = filterMachines(appearsIn, classType, cauldron, size, searchQuery);

  // Sorting Logic
  const sortedMachines = sortMachines(filteredMachines, sortBy)

  // Render machines that meet the filtering criteria and sort by selected value
  renderMachines(filteredMachines);
}

// Listen for any changes in the filter form, search bar, or sort by selection
// and trigger machine filtering and rendering
document.getElementById('filterForm').addEventListener('input', filterAndRenderMachines);
document.getElementById('searchbar').addEventListener('input', filterAndRenderMachines);
document.getElementById('sort').addEventListener('change', filterAndRenderMachines);

renderMachines(machines);
