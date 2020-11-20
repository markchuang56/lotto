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
  	document.getElementById("demoX").innerHTML  = arr;
  	document.getElementById("val1").innerHTML  = arr[0]; 
  	document.getElementById("val2").innerHTML  = arr[1]; 
  	document.getElementById("val3").innerHTML  = arr[2]; 
  	document.getElementById("val4").innerHTML  = arr[3]; 
  	document.getElementById("val5").innerHTML  = arr[4]; 
  	document.getElementById("val6").innerHTML  = arr[5]; 
  	document.getElementById("val7").innerHTML  = arr[6]; 
    for (i in arr) {
        //document.write(arr[i] + '<br>');
    }
});

function show() { // 單純的只是把七個號碼呈現出來而已
	for (i=0;i<7;i++) {
		bg = ((i!=6) ? "yball.jpg" : "bball.jpg");
		document.write("td width=100 heigth=100 align=center valign=middle style='background-repeat:no-repat' background='"+bg+"'>");

	}
}	








