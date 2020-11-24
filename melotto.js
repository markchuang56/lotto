xStatus = true;

document.querySelector('#dataToggle').addEventListener('click', function() {
	xlotto(xStatus);
	xStatus = !xStatus;
	if(xStatus == true) {
		document.getElementById("dataToggle").innerHTML = "開獎";
	} else {
		document.getElementById("dataToggle").innerHTML = "清除";
	}
});


function xlotto(xy) {
        
    let arr = [];
	let obj = [];
    
    for (let i=0; i<7; i++) {
        while (true) {
            let num = Math.floor(Math.random() * 49) + 1;
            if (arr.indexOf(num) === -1) {
				if(xy == true) {
                arr.push(num);
				} else {
					arr.push("");
				}
                break;
            }
        }
    }
	// 取消比對

  	//document.getElementById("demoX").innerHTML  = obj;
  	//document.getElementById("demoX").innerHTML  = arr;
  	document.getElementById("val1").innerHTML  = arr[0];
  	document.getElementById("val2").innerHTML  = arr[1]; 
  	document.getElementById("val3").innerHTML  = arr[2]; 
  	document.getElementById("val4").innerHTML  = arr[3]; 
  	document.getElementById("val5").innerHTML  = arr[4]; 
  	document.getElementById("val6").innerHTML  = arr[5]; 
  	document.getElementById("val_b").innerHTML  = arr[6]; 
}

