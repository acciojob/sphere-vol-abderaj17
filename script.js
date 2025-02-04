function volume_sphere(e) {
    //Write your code here
	e.preventDefault();
	
  const radiusField = document.querySelector("#radius");
	const vlmField = document.querySelector("#volume");

	let radius = parseFloat(radiusField.value.trim());

	
	const volume = 4/3 * 3.14 * radius**3;

	vlmField.value = `${volume}`;
	if(radius <= 0){
		vlmField.textContent = "NaN"
		return;
}
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
