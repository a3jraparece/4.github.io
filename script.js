
// alert('Hello Sir, Okay lang ba sir repeaedly image akong gina pang butang. Kay daku man gud kayug file if daghan na images akong gipang butang. Salamat sa Pag sabot po');
document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const images = document.querySelectorAll('#containerForSwitchImg img');
    const maxIndex = images.length;

    setInterval(function () {

        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % maxIndex;

        images[currentIndex].style.display = 'block';
    }, 3000);
});