/* 
ให้เขียน Function ที่ชื่อว่า sortedFromMinToMax ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 1 ตัวคือ numbers
        1. numbers เป็น Array ที่บรรจุตัวเลขที่ยังไม่เรียงลำดับ
    - Function นี้จะเรียงข้อมูลใน numbers จากน้อยไปมาก โดยใช้ Bubble Sort Algorithm และ Return numbers ออกมา
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ด้านล่าง
*/

// Start coding here
function sortedFromMinToMax(number){
    for(let i=0;i<number.length-1;i++){
        for(let j=0;j<number.length-1-i;j++){
            if(number[j]>number[j+1]){
                let temp = number[j];
                number[j]=number[j+1];
                number[j+1] = temp;
            }
        }
    }
    return number;
}
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log(sortedFromMinToMax(numbers)); // [11, 12, 22, 25, 34, 64, 90]
