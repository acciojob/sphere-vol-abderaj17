function volume_sphere() {
    //Write your code here
  const radiusField = document.querySelector("#radius");
	const vlmField = document.querySelector("#volume");

	let radius = parseInt(radiusField.value.trim());

	if(radius <= 0) return "NaN";

	const volume = 4/3(3.14*radius**3);

	vlmField.textContent = `${volume}`;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
