let td1 = 1805 ;
let td2 = 1866 ;
let td3 = 2167 ;
let td4 = 2729 ;
let td5 = 3050 ;
let td6 =3050 ;
let sokwh =  +prompt("so kwh " );
let thanhtien ;
if (sokwh <=50) {
    thanhtien=sokwh*td1
    console.log(thanhtien);
} else if (sokwh <=100) {
    thanhtien=50 * td1 +(sokwh -50) *td1;
    console.log(thanhtien);
}else if (sokwh <=200) {
    thanhtien= td1 + 50 * td2 +(sokwh -100) *td3;
    console.log(thanhtien);
}else if (sokwh <=300) {
    thanhtien= td1 + 50 * td2 + 50 * td3 + 100 +( sokwh -200) *td4;
    console.log(thanhtien);
}else if (sokwh <=400) {
    thanhtien= td1 +50 *td2 +50 * td3 +100 * td4 + 100+ (sokwh - 300) *td5 ;
    console.log(thanhtien);
}else {
    thanhtien= td1 +50 * td2 +50 *td3 + 100*td4 +100 *td5 + (sokwh -400) *td6 ;
    console.log(thanhtien);
}
