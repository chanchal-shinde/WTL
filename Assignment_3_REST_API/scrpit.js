async function getDog() {

    const image = document.getElementById("dogImage");

    try {

        const response = await fetch("https://dog.ceo/api/breeds/image/random");

        if (!response.ok) {
            throw new Error("Failed to fetch image");
        }

        const data = await response.json();

        image.src = data.message;
        image.style.display = "block";

    } catch (error) {
        alert(error.message);
    }

}