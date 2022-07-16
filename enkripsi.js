// @rivalhaikalh
//showpassword
function showSatu(){
	let x=document.getElementById("keysatu");
	if(x.type ==="password"){
		x.type="text";
	}else{
		x.type="password";
	}
}
function showDua(){
	let x=document.getElementById("keydua");
	if(x.type ==="password"){
		x.type="text";
	}else{
		x.type="password";
	}
}
// enkripsi
let pembanding=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let p =document.getElementById("plaintext");
let kp=document.getElementById("keysatu")
let enkripsi =document.getElementById('tmblenkripsi');
enkripsi.addEventListener('click',function(){
let hasilEnkripsi=document.querySelector(".hasilenkripsi");
let pValue =p.value.toLowerCase().split("");
let kpValue=kp.value.toLowerCase().split("");
cek(pValue,pembanding);
cek(kpValue,pembanding);
console.log(pValue);
console.log(kpValue);
let finalenkripsi=hasilenkripsi(pValue,kpValue,pembanding);
console.log(finalenkripsi);
hasilEnkripsi.innerHTML=`<h2>${finalenkripsi}</h2>`;
});

// deskripsi
let c =document.getElementById("chipertext");
let kc=document.getElementById("keydua")
let deskripsi =document.getElementById('tmbldeskripsi');
deskripsi.addEventListener('click',function(){
let hasilDeskripsi=document.querySelector(".hasildeskripsi");
let pembanding=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let cValue =c.value.toLowerCase().split("");
let kcValue=kc.value.toLowerCase().split("");
cek(cValue,pembanding);
cek(kcValue,pembanding);
console.log(cValue);
console.log(kcValue);
let finaldeskripsi=hasildeskripsi(cValue,kcValue,pembanding);
console.log(finaldeskripsi);
hasilDeskripsi.innerHTML=`<h2>${finaldeskripsi}</h2>`;
console.log(8-0);
});


function cek(bahan,pembanding){	
	for(let i=0;i<=bahan.length-1;i++){
		for(let j=0;j<=pembanding.length-1;j++){
			if (bahan[i] == pembanding[j]) {
				bahan[i] = j;
			}
		}
	}
	return bahan;
}

function hasilenkripsi(hasil1,hasil2,pembanding){
	if(hasil1.length != hasil2.length){
		return `error(panjang teks dan kunci tidak sama)`;
	}else{
	for(let i=0;i<=hasil1.length-1;i++){
			hasil1[i]=hasil1[i]+hasil2[i];
	}
	for(let i=0;i<=hasil1.length-1;i++){
		if(hasil1[i]>25){
			hasil2[i]=pembanding[hasil1[i]-26];
		}else{
			hasil2[i]=pembanding[hasil1[i]];
		}
	}
	return hasil2.join('');
}
	
}

function hasildeskripsi(hasil1,hasil2,pembanding){
	if(hasil1.length != hasil2.length){
		return `error(panjang teks dan kunci tidak sama)`;
	}else{
	for(let i=0;i<=hasil1.length-1;i++){
			hasil1[i]=hasil1[i]-hasil2[i];
	}
	for(let i=0;i<=hasil1.length-1;i++){
		if(hasil1[i]<0){
			hasil2[i]=pembanding[hasil1[i]+26];
		}else{
			hasil2[i]=pembanding[hasil1[i]];
		}
	}
	return hasil2.join('');
}
	
}

