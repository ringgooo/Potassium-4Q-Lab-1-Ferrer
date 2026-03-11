const QUERY = window.location.search;
const PARAMS = new URLSearchParams(QUERY);

function processData() {
    let name = PARAMS.get("customer");
    document.getElementById("greetings").innerText = `Hello, ${name}`;

    let coke = Number(PARAMS.get("item_coke"));
    document.getElementById("totalNumberOfCoke").innerText = `Number of Coke: ${coke}`;

    let pepsi = Number(PARAMS.get("item_pepsi"));
    document.getElementById("totalNumberOfPepsi").innerText = `Number of Pepsi: ${pepsi}`;

    let money = Number(PARAMS.get("money"));


    let totalCost = (25 * coke) + (25 * pepsi);
    document.getElementById("totalCost").innerText = `Total Cost: ${totalCost}`;

    let change = money - totalCost;
    document.getElementById("change").innerText = `Change: ${change}`;
    if(change < 0){
        document.getElementById("change").innerText = `Your money is not enough`;
    }
}