// Constants
const API_BASE_URL = 'http://localhost/my-website/api/';

// DOM elements
const buildingsList = document.querySelector('#buildings-list');

function displayBuildings(buildings) {
    // Clear previous buildings
    buildingsList.innerHTML = '';
  
    // Create building items
    buildings.forEach(building => {
      const buildingItem = document.createElement('li');
      buildingItem.classList.add('building-item');
  
      const buildingImage = document.createElement('img');
      buildingImage.src = `images/${building.image_url}`;
      buildingItem.appendChild(buildingImage);
  
      const buildingName = document.createElement('h3');
      buildingName.textContent = building.name;
      buildingItem.appendChild(buildingName);
  
      const buildingMaterials = document.createElement('p');
      buildingMaterials.textContent = `Materials needed: ${building.materials}`;
      buildingItem.appendChild(buildingMaterials);
  
      buildingsList.appendChild(buildingItem);
  
      const btnShowMaterials = document.createElement('button');
      btnShowMaterials.textContent = 'Show Materials';
      buildingItem.appendChild(btnShowMaterials);
  
      btnShowMaterials.addEventListener('click', async () => {
        try {
          const response = await fetch(`${API_BASE_URL}materials.php?id=${building.id}`);
          const data = await response.json();
          displayMaterials(data);
        } catch (error) {
          console.error(error);
        }
      });
    });
  }
  

  function displayMaterials(materials) {
    // Clear previous materials
    materialsList.innerHTML = '';
  
    // Create material items
    materials.forEach(material => {
      const materialItem = document.createElement('li');
      materialItem.classList.add('material-item');
  
      const materialName = document.createElement('h3');
      materialName.textContent = material.name;
      materialItem.appendChild(materialName);
  
      const materialQuantity = document.createElement('p');
      materialQuantity.textContent = `Quantity needed: ${material.quantity}`;
      materialItem.appendChild(materialQuantity);
  
      materialsList.appendChild(materialItem);
    });
  }
  

async function getBuildings() {
  try {
    const response = await fetch(`${API_BASE_URL}buildings.php`);
    const data = await response.json();
    displayBuildings(data);
  } catch (error) {
    console.error(error);
  }
}

// Event listener
document.addEventListener('DOMContentLoaded', () => {
  getBuildings();
});
