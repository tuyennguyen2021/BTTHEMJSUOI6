//bài tập 
document.getElementById('inSoNguyenTo').onclick = function(){
    var n=document.getElementById('txtNhapSoN').value*1;
    var content="";
    for(var i=0; i<= n ; i++){
        if(kiemTraSNT(i)){
            content+= i + ' ';
        }
    }
    console.log(content);
    document.getElementById('txtInKetQua').innerHTML=content;
}


// tạo mảng
// lấy dữ n từ dùng, chạy vòng lặp for từ i = 2 <=n ,nếu là SNT => ĐẨY VÔ MẢNG
//kiểm tra số nguyên tố
function kiemTraSNT (n){
    var checkSoNT =true;
    if(n <2 ){
        checkSoNT = false;
    }else{
        for (var i =2 ; i < n-1; i++){
            if(n % i == 0){
                checkSoNT = false;
                break;
            }
        }
        return checkSoNT;
    }
         
};
    





