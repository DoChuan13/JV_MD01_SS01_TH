function squareArea() {
    let inputWidth = prompt("Enter the width: ");
    let inputHeight = prompt("Enter the height: ");
    let width = parseInt(inputWidth);
    let height = parseInt(inputHeight);
    let area = width*height;
    document.write("Width value: " + width);
    document.write("</br>Height value: "+ height);
    document.write("</br>The area is: " + area);
    alert("The area is: " + area);
}