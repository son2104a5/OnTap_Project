let store = document.getElementById(`store`);
let user = document.getElementById("user");
let relog = document.getElementById("relog");

        let products = [
            {
                image: `https://bizweb.dktcdn.net/100/385/152/products/26b8c231754594ad20e92447891ae696.jpg?v=1681260642653`,
                name: `Thùng mì hảo hảo x 75g`,
                price: 130+`.000 VND`,
            },
            {
                image: `https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lpj6o1mldjsv49`,
                name: `Howe. Giày Thể Thao ...`,
                price: 102+`.000 VND`,
            },
            {
                image: `https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-logifpsscv03a3`,
                name: `Dầu ăn Koki 2lit ...`,
                price: 88+`.000 VND`,
            },
            {
                image: `https://down-vn.img.susercontent.com/file/6935cce9aa5dda4497244859eaf40d4f`,
                name: `Mũ lưỡi trai thời trang ...`,
                price: 45+`.000 VND`,
            },
            {
                image: `https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llahrq76isombe`,
                name: `Combo 2 chai dầu gội đ ...`,
                price: 99+`.000 VND`,
            },
            {
                image: `https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lo91wvlvo22zf6`,
                name: `Áo khoá nỉ mũ hai lớp ...`,
                price: 129+`.000 VND`,
            },
            {
                image: `https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lotetspoi3uz58`,
                name: `Combo 10 bịch giấy ăn ...`,
                price: 20+`.000 VND`,
            },
            {
                image: `https://down-vn.img.susercontent.com/file/sg-11134201-7rbl2-lp3qlu4l8ksmb4`,
                name: `Ốp Điện Thoại Chó shiba ...`,
                price: 40+`.000 VND`,
            },
            {
                image: `https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-ls3lmfgcula878`,
                name: `Sạc Dự Phòng trong suố ...`,
                price: 88+`.000 VND`,
            },
            {
                image: `https://down-vn.img.susercontent.com/file/sg-11134201-7qveb-lj5pfcta54cpd1`,
                name: `Ví da nam dáng ngang ...`,
                price: 34+`.000 VND`,
            },
            {
                image: `https://down-vn.img.susercontent.com/file/cn-11134211-7r98o-lsjmj4rtlqjx3f`,
                name: `Túi Đeo Chéo Ngực Vải ...`,
                price: 49+`.000 VND`,
            },
            {
                image: `https://down-vn.img.susercontent.com/file/sg-11134201-7rbkw-lq30pmkyxz4719`,
                name: `Bình đựng nước giữ nh ...`,
                price: 55+`.000 VND`,
            },
        ];

function render() {
    let data='';
    for(let i=0;i<products.length;i++){
        data += `
                <div class="products-content" style="padding: 5px;">
                    <img style="width: 200px; height: 200px;" src="${products[i].image}">
                    <p>${products[i].name}</p>
                    <p style="color: red;">${products[i].price}</p>
                </div>
                `
    }
    store.innerHTML = data;
}
render();

let userLogin = JSON.parse(localStorage.getItem("users"))||[];
let renderUser = JSON.parse(localStorage.getItem("login"))||[];

if(renderUser!=""){
    relog.style.display = "none";
    for(let i=0;i<userLogin.length;i++){
        if(renderUser==userLogin[i].email){
            user.innerHTML = `
                                <div class="userInfor">
                                    <a href="#">
                                        <img style="width: 20px; height: 20px;" src="../assets/images/avt.png">
                                        <t>${userLogin[i].name}</t>
                                    </a>
                                    <div class="userDown">
                                        <a href="#">Tài khoản của tôi</a>
                                        <a href="#">Đơn mua</a>
                                        <a href="./index.html" onclick="logout(event)">Đăng xuất</a>
                                    </div>
                                </div>
                            `
        }
    }
}else{
    relog.style.display = "block";
    user.innerHTML = "";
}
function logout(event) {
    localStorage.removeItem("login");
    relog.style.display = "block";
    user.innerHTML = "";
}