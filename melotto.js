document.querySelector('button').addEventListener('click', function() {
        
    let arr = [];
    
    for (let i=0; i<7; i++) {
        while (true) {
            let num = Math.floor(Math.random() * 49) + 1;
            if (arr.indexOf(num) === -1) {
                arr.push(num);
                break;
            }
        }
    }
	// 取消比對
  	//document.getElementById("demoX").innerHTML  = arr;
  	document.getElementById("val1").innerHTML  = arr[0]; 
  	document.getElementById("val2").innerHTML  = arr[1]; 
  	document.getElementById("val3").innerHTML  = arr[2]; 
  	document.getElementById("val4").innerHTML  = arr[3]; 
  	document.getElementById("val5").innerHTML  = arr[4]; 
  	document.getElementById("val6").innerHTML  = arr[5]; 
  	document.getElementById("val_b").innerHTML  = arr[6]; 
    //for (i in arr) {
        //document.write(arr[i] + '<br>');
    //}
});

