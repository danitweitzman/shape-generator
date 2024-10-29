function generateShape() {
    const shapeSelect = document.getElementById("shapeSelect").value;
    const colorInput = document.getElementById("colorInput").value;
    const shapeContainer = document.getElementById("shapeContainer");
  
    const shapeElement = document.createElement("div");
    shapeElement.classList.add("shape", shapeSelect);
  
    if (shapeSelect === "triangle") {
      shapeElement.style.borderBottomColor = colorInput;
    } else {
      shapeElement.style.backgroundColor = colorInput;
    }
  
    shapeContainer.appendChild(shapeElement);
  }
  