var onunKatiSayi;
var bulunacakSayi;
var denemeSayisi;
var bulunmaSayisi;
var bulunmaOrani;
var bolum;  
var kullanildiMi=new Array();
var islemler;
var bulunduMu;
var rastgeleRakamlar= new Array();

rastgeleRakamlarUret();
onunKatiSayiUret();
ucBasamakliSayiUret();
sureyiBaslat();

function rastgeleRakamlarUret()
{

	for (var i = 0; i<=4; i++) {
		rastgeleRakamlar[i]=Math.round(Math.random()*8+1);
	}

	document.getElementById('rakams').innerHTML=rastgeleRakamlar.join("  ")+"<br>";
	
}

function onunKatiSayiUret()
{
	onunKatiSayi = Math.floor(Math.random() * 9+1)*10; 
	document.getElementById('onunKatiSayi').innerHTML=onunKatiSayi; 
}

function rastgeleSinirliFonksiyon(max, min) {
	return Math.floor(Math.random() * (max - min) ) + min;
}

function ucBasamakliSayiUret()
{
	bulunacakSayi = rastgeleSinirliFonksiyon(100, 999);
	document.getElementById('ucBasamakliSayi').innerHTML=bulunacakSayi; 
}

function bastir()
{
	document.getElementById('tamamınıGoruntuleGuncelle').innerHTML="Sistemin ürettiği rastgele rakamlar şunlardı "+ rastgeleRakamlar[0]+ " "+ rastgeleRakamlar[1]+ " "+ rastgeleRakamlar[2]+ " " + rastgeleRakamlar[3]+" "+ rastgeleRakamlar[4]+"<br>"+ "Sistemin ürettiği iki basamaklı sayı ise " +onunKatiSayi + " idi." + "<br>"+"Sistemin ulaşmak için belirlediği 3 basamaklı sayı ise "+bulunacakSayi+" idi.";  
}

function bubble_sort()
{
	for (var i = 0; i<5; i++)
	{
		for (var j = 1; j<5-i; j++) 
		{

			if (rastgeleRakamlar[j] < rastgeleRakamlar[j - 1])
			{
				var gecici = rastgeleRakamlar[j - 1];
				rastgeleRakamlar[j - 1] = rastgeleRakamlar[j];
				rastgeleRakamlar[j] = gecici;
			}  
		}
	}
	document.getElementById('islemMetinleri').innerHTML+="Önce rakamları küçükten büyüğe sıralayalım."+rastgeleRakamlar+"<br>";

}

                function kullanildiSifirla() //rakamların kullanılma bilgilerini sıfırlıyor.
                {
                	for (var i = 0; i < 5; i++) 
                	{
                		kullanildiMi[i]=false;
                	}
                	document.getElementById('islemMetinleri').innerHTML+=kullanildiMi+"<br>";
                }

                function algoritmaCozsun()
                {	
				document.getElementById('islemMetinleri').innerHTML="";
                	durumFalse();
                	bulunduMu = false;
                	kullanildiSifirla();
                	denemeSayisi++;
                //	istatistik();

                	bubble_sort(rastgeleRakamlar);
                //labeller(sayilar);
                bolum = bulunacakSayi / onunKatiSayi;
				bolum = Math.round(bolum); 
                /*if ((bulunacakSayi % onunKatiSayi) > (onunKatiSayi / 2))
                {
                	bolum++;
                }*/
                document.getElementById('islemMetinleri').innerHTML+=bolum+"<br>";

               // lblBolum.Text = bolum.ToString();

               if (tekSayi(rastgeleRakamlar, bolum, false) == false)
               {
               	if (ikiliKombinasyon(rastgeleRakamlar, bolum, false) == false)
               	{
               		if (ucluKombinasyon(rastgeleRakamlar, bolum, false) == false)
               		{
               			if (dortluKombinasyon(rastgeleRakamlar, bolum, false) == false)
               			{
               				if (besliKombinasyon(rastgeleRakamlar,bolum,false)==true)
               				{

               				}
               			}
               		}
               	}
               }
           }

           function istatistik()
           {
           	if (bulunmaSayisi > 0)
           	{
           		bulunmaOrani = (bulunmaSayisi / denemeSayisi) * 100;
               
             //       document.getElementById('islemMetinleri').innerHTML+=bulunmaOrani+"<br>";

         }             
             // document.getElementById('islemMetinleri').innerHTML+=bulunmaSayisi+"<br>";
              //document.getElementById('islemMetinleri').innerHTML+=denemeSayisi+"<br>";
          } 


          function bulunmaKontrol(gecici) //Sayının bulunup bulunmadığını kontrol ediyor.
          {
          	if (gecici <= (bulunacakSayi + 9) && gecici >= (bulunacakSayi - 9))
          	{
          		bulunmaSayisi++;
          		bulunduMu = true;
          		durumTrue();
          		return true;
          	}
          	else
          		return false; 
          }

          function durumTrue()
          {
          	window.alert("Bulunmuş.");
          }

          function durumFalse()
          {
          	//window.alert("Bulunamadı.");
          }

          function kullanildiTrue(i)
          {
          	kullanildiMi[i] = true;
          }

          function kullanildiTrue(i, j)
          {
          	kullanildiMi[i] = true;
          	kullanildiMi[j] = true;
          }

          function kullanildiTrue(i, j, k)
          {
          	kullanildiMi[i] = true;
          	kullanildiMi[j] = true;
          	kullanildiMi[k] = true;
          }

          function kullanildiTrue(i, j, k, m)
          {
          	kullanildiMi[i] = true;
          	kullanildiMi[j] = true;
          	kullanildiMi[k] = true;
          	kullanildiMi[m] = true;
          }

          function kullanildiTrue(i, j, k, m, g)
          {
          	kullanildiMi[i] = true;
          	kullanildiMi[j] = true;
          	kullanildiMi[k] = true;
          	kullanildiMi[m] = true;
          	kullanildiMi[g] = true;
          }

          function kullanildiFalse(i)
          {
          	kullanildiMi[i] = false;
          }

          function kullanildiFalse(i, j)
          {
          	kullanildiMi[i] = false;
          	kullanildiMi[j] = false;
          }

          function kullanildiFalse(i, j, k)
          {
          	kullanildiMi[i] = false;
          	kullanildiMi[j] = false;
          	kullanildiMi[k] = false;
          }

          function kullanildiFalse(i, j, k, m)
          {
          	kullanildiMi[i] = false;
          	kullanildiMi[j] = false;
          	kullanildiMi[k] = false;
          	kullanildiMi[m] = false;
          }

          function kullanildiFalse(i, j, k, m, g)
          {
          	kullanildiMi[i] = false;
          	kullanildiMi[j] = false;
          	kullanildiMi[k] = false;
          	kullanildiMi[m] = false;
          	kullanildiMi[g] = false;
          }

          function tekSayi(rastgeleRakamlar, ArananSayi, geciciMi)//iki basamaklı sayı ve bir tane tek basamaklı sayı kullanarak bulmaya çalışıyor
          {
          	var bulunduMuTekSayi = false;
          	islemler = "";

          	for (var i = 0; i < 5; i++)
          	{

          		if (bulunduMuTekSayi == false)
          		{
          			if (kullanildiMi[i] == true)
          			{
          				continue;
          			}
          			else
          			{
          				if (geciciMi == false)
          				{
          					if (rastgeleRakamlar[i] == ArananSayi)
          					{
          						kullanildiTrue(i);

          						if (bul(rastgeleRakamlar, rastgeleRakamlar[i]) == true)
          						{
          							bulunduMuTekSayi = true;
									document.getElementById('islemMetinleri').innerHTML+=rastgeleRakamlar[i]+" * "+ onunKatiSayi+" = "+(rastgeleRakamlar[i]*onunKatiSayi)+"<br>";
          							break;
          						}
          						else
          						{
          							kullanildiFalse(i);
          						}  
          					}
          				}

          				else
          				{
          					islemler = bolum + " * " + onunKatiSayi + " = " + (bolum * onunKatiSayi)+"\n";
          					var sonuc = bolum * onunKatiSayi;
          					if (bulunmaKontrol(sonuc + rastgeleRakamlar[i]) == true)
          					{
          						bulunduMuTekSayi = true;
                         islemler = sonuc + " + " + rastgeleRakamlar[i] + " = " + (sonuc + rastgeleRakamlar[i])+"\n";
                                document.getElementById('islemMetinleri').innerHTML+=islemler+"<br>";
                                break;
                            }
                            else if (bulunmaKontrol(sonuc - rastgeleRakamlar[i]) == true)
                            {
                            	bulunduMuTekSayi = true;                        
                                islemler = sonuc + " - " + rastgeleRakamlar[i] + " = " + (sonuc - rastgeleRakamlar[i])+"\n";                             

                                break;
                            }
                        } 
                    }
                }
                else
                	break;
            }
            return bulunduMuTekSayi;
        }


        function ikiliKombinasyon(rastgeleRakamlar, ArananSayi, geciciMi)//iki basamaklı sayı ve iki tane tek basamaklı sayı kullanarak bulmaya çalışıyor
        {
        	var bulunduMuIkiliSayi = false;
        	islemler = "";
        	var sonuc = bolum * onunKatiSayi;
        	var sonucu2;
        	var icIslemler = "";
        	for (var i = 0; i <= 4; i++)
        	{
        		if (bulunduMuIkiliSayi == false)
        		{
                    if (kullanildiMi[i] == true)//bu sayı kullanıldıysa bu adımı atla
                    {
                    	continue;
                    }
                    else
                    {
                    	for (var j = 0; j <= 4; j++)
                    	{
                            if (kullanildiMi[j] == true)//bu sayı kullanıldıysa bu adımı atla
                            {
                            	continue;
                            }
                            if (i == j)//iki indis eşitse bu adımı atla
                            {
                            	continue;
                            }
                            if (geciciMi == false)
                            {
                            	if (rastgeleRakamlar[i] + rastgeleRakamlar[j] == ArananSayi)
                            	{
                                    kullanildiTrue(i, j);//kullanıldı diye işaretle
                                    icIslemler = rastgeleRakamlar[i] + " + " + rastgeleRakamlar[j] + " = " + (rastgeleRakamlar[i] + rastgeleRakamlar[j])+"     "; //erkana yazdırma işlemi
                                    if (bul(rastgeleRakamlar, (rastgeleRakamlar[i] + rastgeleRakamlar[j])) == true)
                                    {
                                    	bulunduMuIkiliSayi = true;
                                        document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                        icIslemler = ArananSayi + " * " + onunKatiSayi + " = " + (ArananSayi * onunKatiSayi)+"     ";
                                        document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                        break;
                                    }
                                    else
                                    {
                                    	kullanildiFalse(i, j);
                                        //eğer istenen sayı bulunamadıysa bu iki sayının kullanılmadığını işaretle
                                  }
                              }
                              else if (rastgeleRakamlar[i] - rastgeleRakamlar[j] == ArananSayi)
                              {
                              	kullanildiTrue(i, j);
                              	icIslemler = rastgeleRakamlar[i] + " - " + rastgeleRakamlar[j] + " = " + (rastgeleRakamlar[i] - rastgeleRakamlar[j])+"    "; ;
                              	if (bul(rastgeleRakamlar, (rastgeleRakamlar[i] - rastgeleRakamlar[j])) == true)
                              	{
                              		bulunduMuIkiliSayi = true;
                                        document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
										icIslemler=ArananSayi+" * "+onunKatiSayi+" = "+ (ArananSayi*onunKatiSayi);
                                        break;
                                    }
                                    else
                                    {
                                    	kullanildiFalse(i, j);
                                   }
                               }
                               else if (rastgeleRakamlar[i] * rastgeleRakamlar[j] == ArananSayi)
                               {
                               	kullanildiTrue(i, j);
                               	icIslemler = rastgeleRakamlar[i] + " * " + rastgeleRakamlar[j] + " = " + (rastgeleRakamlar[i] * rastgeleRakamlar[j])+"     "; ;
                               	if (bul(rastgeleRakamlar, (rastgeleRakamlar[i] * rastgeleRakamlar[j])) == true)
                               	{
                               		bulunduMuIkiliSayi = true;
                                        document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
										icIslemler=(rastgeleRakamlar[i] * rastgeleRakamlar[j])+" * "+onunKatiSayi+" = "+ ((rastgeleRakamlar[i] * rastgeleRakamlar[j])*onunKatiSayi);
										document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                        break;
                                    }
                                    else
                                    {
                                    	kullanildiFalse(i, j);
                                    }
                                }

                            }
                            else
                            {
                            	sonucu2 = rastgeleRakamlar[i] + rastgeleRakamlar[j];

                            	islemler = bolum + " * " + onunKatiSayi + " = " + sonuc+"    ";
                            	if (bulunmaKontrol(sonuc + sonucu2) == true)
                            	{
                                    document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                    document.getElementById('islemMetinleri').innerHTML+=islemler+"<br>";
                                    islemler = sonuc + " + " + rastgeleRakamlar[i] + " + " + rastgeleRakamlar[j] + " = " + (sonuc + rastgeleRakamlar[i] + rastgeleRakamlar[j])+"     ";
                                   document.getElementById('islemMetinleri').innerHTML+=islemler+"<br>";
                                   bulunduMuIkiliSayi = true;
                                   kullanildiTrue(i, j);
                                   break;
                               }
                               else if (bulunmaKontrol(sonuc - sonucu2) == true)
                               {
                                    document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                    bulunduMuIkiliSayi = true;
                                    islemler = sonuc + " - " + rastgeleRakamlar[i] + " - " + rastgeleRakamlar[j] + "= " + (sonuc - sonucu2)+"    ";
                                   document.getElementById('islemMetinleri').innerHTML+=islemler+"<br>";
                                   kullanildiTrue(i, j);
                                   break;
                               }
                               sonucu2 = rastgeleRakamlar[i] - rastgeleRakamlar[j];
                               if (bulunmaKontrol(sonuc + sonucu2) == true)
                               {
                                   document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                   bulunduMuIkiliSayi = true;
                                   islemler = sonuc + " + " + rastgeleRakamlar[i] + " - " + rastgeleRakamlar[j] + "= " + (sonuc + sonucu2)+"     ";
                                   document.getElementById('islemMetinleri').innerHTML+=islemler+"<br>";
                                   kullanildiTrue(i, j);
                                   break;
                               }
                               sonucu2 = rastgeleRakamlar[i] * rastgeleRakamlar[j];
                               if (bulunmaKontrol(sonuc + sonucu2) == true)
                               {
                                    document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                    bulunduMuIkiliSayi = true;
                                    islemler = sonuc + " + " + "( " + rastgeleRakamlar[i] + " * " + rastgeleRakamlar[j] + " )" + " = " + (sonuc + sonucu2)+"    ";
                                  document.getElementById('islemMetinleri').innerHTML+=islemler+"<br>";
                                  kullanildiTrue(i, j);
                                  break;
                              }
                              if (bulunmaKontrol(sonuc - sonucu2) == true)
                              {
                                   document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                   bulunduMuIkiliSayi = true;
                                   islemler = sonuc + " - " + "( " + rastgeleRakamlar[i] + " * " + rastgeleRakamlar[j] + " )" + " = " + (sonuc - sonucu2)+"    ";
                                  document.getElementById('islemMetinleri').innerHTML+=islemler+"<br>";
                                  kullanildiTrue(i, j);
                                  break;
                              }
                          }
                      }
                  }
              }
              else
              {
              	break;
              }
          }
          return bulunduMuIkiliSayi;
      }


      function ucluKombinasyon(rastgeleRakamlar, ArananSayi,  geciciMi)//iki basamaklı sayı ve üç tane tek basamaklı sayı kullanarak bulmaya çalışıyor
      {
      	var bulunduMuUcluSayi = false;
      	islemler = "";
      	var sonuc = bolum * onunKatiSayi;
      	var sonucu2;
      	var icIslemler = "";
      	for (var i = 0; i <= 4; i++)
      	{
      		if (bulunduMuUcluSayi == false)
      		{
      			if (kullanildiMi[i] == true)
      			{
      				continue;
      			}
      			else
      			{
      				for (var j = 0; j <= 4; j++)
      				{
      					if (bulunduMuUcluSayi == false)
      					{

      						if (kullanildiMi[j] == true)
      						{
      							continue;
      						}
      						if (i == j)
      						{
      							continue;
      						}
      						for (var k = 0; k <= 4; k++)
      						{
      							if (bulunduMuUcluSayi == false)
      							{

      								if (kullanildiMi[k] == true)
      								{
      									continue;
      								}
      								if (i == k || j == k)
      								{
      									continue;
      								}
      								if (geciciMi == false)
      								{
      									sonucu2 = rastgeleRakamlar[i] + rastgeleRakamlar[j] + rastgeleRakamlar[k];
      									if (sonucu2 == ArananSayi)
      									{
      										kullanildiTrue(i, j, k);
      										icIslemler = rastgeleRakamlar[i] + " + " + rastgeleRakamlar[j] + " + " + rastgeleRakamlar[k] + " = " + sonucu2+"    "; 
      										if (bul(rastgeleRakamlar, (sonucu2)) == true)
      										{
      											bulunduMuUcluSayi = true;
                                                  document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                                  break;
                                              }
                                              else
                                              {
                                              	kullanildiFalse(i, j, k);
                                                }
                                            }
                                            sonucu2 = rastgeleRakamlar[i] + rastgeleRakamlar[j] - rastgeleRakamlar[k];
                                            if (sonucu2 == ArananSayi)
                                            {
                                            	kullanildiTrue(i, j, k);
                                            	icIslemler = rastgeleRakamlar[i] + " + " + rastgeleRakamlar[j] + " - " + rastgeleRakamlar[k] + " = " + sonucu2+"    "; 
                                            	if (bul(rastgeleRakamlar, (sonucu2)) == true)
                                            	{
                                            		bulunduMuUcluSayi = true;
                                                  document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                                  break;
                                              }
                                              else
                                              {
                                              	kullanildiFalse(i, j, k);
                                               }
                                           }
                                           sonucu2 = rastgeleRakamlar[i] - rastgeleRakamlar[j] - rastgeleRakamlar[k];
                                           if (sonucu2 == ArananSayi)
                                           {
                                           	kullanildiTrue(i, j, k);
                                           	icIslemler = rastgeleRakamlar[i] + " - " + rastgeleRakamlar[j] + " - " + rastgeleRakamlar[k] + " = " + sonucu2 +"    "; 
                                           	if (bul(rastgeleRakamlar, (sonucu2)) == true)
                                           	{
                                           		bulunduMuUcluSayi = true;
                                                   document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                                   break;
                                               }
                                               else
                                               {
                                               	kullanildiFalse(i, j, k);
                                               }
                                           }
                                           sonucu2 = rastgeleRakamlar[i] * rastgeleRakamlar[j] * rastgeleRakamlar[k];
                                           if (sonucu2 == ArananSayi)
                                           {
                                           	kullanildiTrue(i, j, k);
                                           	icIslemler = rastgeleRakamlar[i] + " * " + rastgeleRakamlar[j] + " * " + rastgeleRakamlar[k] + " = " + sonucu2+"    "+"<br>"; 
                                           	if (bul(rastgeleRakamlar, (sonucu2)) == true)
                                           	{
                                           		bulunduMuUcluSayi = true;
                                                  document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                                  break;
                                              }
                                              else
                                              {
                                              	kullanildiFalse(i, j, k);
                                               }
                                           }
                                           sonucu2 = rastgeleRakamlar[i] * rastgeleRakamlar[j] + rastgeleRakamlar[k];
                                           if (sonucu2 == ArananSayi)
                                           {
                                           	kullanildiTrue(i, j, k);
                                           	icIslemler = rastgeleRakamlar[i] + " * " + rastgeleRakamlar[j] + " + " + rastgeleRakamlar[k] + " = " + sonucu2+"    "+"<br>"; 
                                           	if (bul(rastgeleRakamlar, (sonucu2)) == true)
                                           	{
                                           		bulunduMuUcluSayi = true;                                                  
                                                    document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";		
													icIslemler=ArananSayi+" * "+onunKatiSayi+" = "+(ArananSayi * onunKatiSayi);
                                                    break;
                                                }
                                                else
                                                {
                                                	kullanildiFalse(i, j, k);
                                                }
                                            }
                                            sonucu2 = rastgeleRakamlar[i] * (rastgeleRakamlar[j] + rastgeleRakamlar[k]);
                                            if (sonucu2 == ArananSayi)
                                            {
                                            	kullanildiTrue(i, j, k);
                                            	icIslemler = rastgeleRakamlar[i] + " * " + "( " + rastgeleRakamlar[j] + " + " + rastgeleRakamlar[k] + " )" + " = " + sonucu2+"    "; 
                                            	if (bul(rastgeleRakamlar, (sonucu2)) == true)
                                            	{
                                            		bulunduMuUcluSayi = true;
                                                    document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                                    break;
                                                }
                                                else
                                                {
                                                	kullanildiFalse(i, j, k);
                                               }
                                           }
                                           sonucu2 = rastgeleRakamlar[i] * rastgeleRakamlar[j] - rastgeleRakamlar[k];
                                           if (sonucu2 == ArananSayi)
                                           {
                                           	kullanildiTrue(i, j, k);
                                           	icIslemler = rastgeleRakamlar[i] + " * " + rastgeleRakamlar[j] + " - " + rastgeleRakamlar[k] + " = " + sonucu2+"    "; 
                                           	if (bul(rastgeleRakamlar, (sonucu2)) == true)
                                           	{
                                           		bulunduMuUcluSayi = true;
                                                    document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                                    break;
                                                }
                                                else
                                                {
                                                	kullanildiFalse(i, j, k);
                                               }
                                           }
                                           sonucu2 = rastgeleRakamlar[i] * (rastgeleRakamlar[j] - rastgeleRakamlar[k]);
                                           if (sonucu2 == ArananSayi)
                                           {
                                           	kullanildiTrue(i, j, k);
                                           	icIslemler = rastgeleRakamlar[i] + " * " +"( "+ rastgeleRakamlar[j] + " - " + rastgeleRakamlar[k] +" )"+  " = " + sonucu2+"    "; 
                                           	if (bul(rastgeleRakamlar, (sonucu2)) == true)
                                           	{
                                           		bulunduMuUcluSayi = true;
                                                   document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                                   break;
                                               }
                                               else
                                               {
                                               	kullanildiFalse(i, j, k);
                                                }
                                            }

                                        }
                                        else
                                        {
                                        	islemler = bolum + " * " + onunKatiSayi + " = " + sonuc+"    ";
                                        	sonucu2 = rastgeleRakamlar[i] + rastgeleRakamlar[j] + rastgeleRakamlar[k];
                                        	if (bulunmaKontrol(sonuc + sonucu2) == true)
                                        	{
                                               document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                               document.getElementById('islemMetinleri').innerHTML+=islemler+"<br>";
                                                islemler = sonuc + " + " + rastgeleRakamlar[i] + " + " + rastgeleRakamlar[j] + " + " + rastgeleRakamlar[k] + " = " + (sonuc + sonucu2)+"    ";
                                               document.getElementById('islemMetinleri').innerHTML+=islemler+"<br>";
                                               bulunduMuUcluSayi = true;
                                               kullanildiTrue(i, j, k);
                                               break;
                                           }
                                           else if (bulunmaKontrol(sonuc - sonucu2) == true)
                                           {
                                                document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                                document.getElementById('islemMetinleri').innerHTML+=islemler+"<br>";
                                                islemler = sonuc + " - " + rastgeleRakamlar[i] + " - " + rastgeleRakamlar[j] + " - " + rastgeleRakamlar[k] + " = " + (sonuc - sonucu2)+"    ";
                                               document.getElementById('islemMetinleri').innerHTML+=islemler+"<br>";
                                               bulunduMuUcluSayi = true;
                                               kullanildiTrue(i, j, k);
                                               break;
                                           }
                                           sonucu2 = rastgeleRakamlar[i] + rastgeleRakamlar[j] - rastgeleRakamlar[k];
                                           if (bulunmaKontrol(sonuc + sonucu2) == true)
                                           {
                                              document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                              document.getElementById('islemMetinleri').innerHTML+=islemler+"<br>";
                                              islemler = sonuc + " + " + rastgeleRakamlar[i] + " + " + rastgeleRakamlar[j] + " - " + rastgeleRakamlar[k] + " = " + (sonuc + sonucu2)+"    ";
                                                document.getElementById('islemMetinleri').innerHTML+=islemler+"<br>";
                                                bulunduMuUcluSayi = true;
                                                kullanildiTrue(i, j, k);
                                                break;
                                            }
                                            sonucu2 = rastgeleRakamlar[i] - rastgeleRakamlar[j] - rastgeleRakamlar[k];
                                            if (bulunmaKontrol(sonuc + sonucu2) == true)
                                            {
                                                document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                                document.getElementById('islemMetinleri').innerHTML+=islemler+"<br>";
                                                islemler = sonuc + " + " + rastgeleRakamlar[i] + " - " + rastgeleRakamlar[j] + " - " + rastgeleRakamlar[k] + " = " + (sonuc + sonucu2)+"    ";
                                                document.getElementById('islemMetinleri').innerHTML+=islemler+"<br>";
                                                bulunduMuUcluSayi = true;
                                                kullanildiTrue(i, j, k);
                                                break;
                                            }

                                            sonucu2 = rastgeleRakamlar[i] * rastgeleRakamlar[j] * rastgeleRakamlar[k];
                                            if (bulunmaKontrol(sonuc + sonucu2) == true)
                                            {
                                               document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                               document.getElementById('islemMetinleri').innerHTML+=islemler+"<br>";
                                               islemler = sonuc + " + " + "( " + rastgeleRakamlar[i] + " * " + rastgeleRakamlar[j] + " * " + rastgeleRakamlar[k] + " )" + " = " + (sonuc + sonucu2)+"    ";
                                               document.getElementById('islemMetinleri').innerHTML+=islemler+"<br>";
                                               bulunduMuUcluSayi = true;
                                               kullanildiTrue(i, j, k);
                                               break;
                                           }
                                           else if (bulunmaKontrol(sonuc - sonucu2) == true)
                                           {
                                               document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                               bulunduMuUcluSayi = true;
                                               islemler = sonuc + " - " + "( " + rastgeleRakamlar[i] + " * " + rastgeleRakamlar[j] + " * " + rastgeleRakamlar[k] + " )" + " = " + (sonuc - sonucu2)+"    ";
                                                document.getElementById('islemMetinleri').innerHTML+=islemler+"<br>";
                                                kullanildiTrue(i, j, k);
                                                break;
                                            }
                                            sonucu2 = rastgeleRakamlar[i] * rastgeleRakamlar[j] + rastgeleRakamlar[k];
                                            if (bulunmaKontrol(sonuc + sonucu2) == true)
                                            {
                                               document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                               document.getElementById('islemMetinleri').innerHTML+=islemler+"<br>";
                                               islemler = sonuc + " + " + "( " + rastgeleRakamlar[i] + " * " + rastgeleRakamlar[j] + " ) " + " + " + rastgeleRakamlar[k] + " = " + (sonuc + sonucu2)+"    ";
                                               document.getElementById('islemMetinleri').innerHTML+=islemler+"<br>";
                                               bulunduMuUcluSayi = true;
                                               kullanildiTrue(i, j, k);
                                               break;
                                           }
                                           sonucu2 = rastgeleRakamlar[i] * rastgeleRakamlar[j] - rastgeleRakamlar[k];
                                           if (bulunmaKontrol(sonuc + sonucu2) == true)
                                           {
                                               document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                               document.getElementById('islemMetinleri').innerHTML+=islemler+"<br>";
                                               islemler = sonuc + " + " + "( " + rastgeleRakamlar[i] + " * " + rastgeleRakamlar[j] + " ) " + " - " + rastgeleRakamlar[k] + " = " + (sonuc + sonucu2+"    ");
                                              document.getElementById('islemMetinleri').innerHTML+=islemler+"<br>";
                                              bulunduMuUcluSayi = true;
                                              kullanildiTrue(i, j, k);
                                              break;
                                          }
                                      }
                                  }
                              }

                          }
                      }
                  }
              }
          }
          return bulunduMuUcluSayi;
      }



      function dortluKombinasyon(rastgeleRakamlar, ArananSayi, geciciMi)//iki basamaklı sayı ve dört tane tek basamaklı sayı kullanarak bulmaya çalışıyor
      {
      	var bulunduMuDortluSayi = false;
      	islemler = "";
      	var sonuc = bolum * onunKatiSayi;
      	var sonucu2;
      	var icIslemler = "";
      	for (var i = 0; i <= 4; i++)
      	{
      		if (bulunduMuDortluSayi == false)
      		{
      			if (kullanildiMi[i] == true)
      			{
      				continue;
      			}
      			else
      			{
      				for (var j = 0; j <= 4; j++)
      				{
      					if (bulunduMuDortluSayi == false)
      					{

      						if (kullanildiMi[j] == true)
      						{
      							continue;
      						}
      						if (i == j)
      						{
      							continue;
      						}
      						for (var k = 0; k <= 4; k++)
      						{
      							if (bulunduMuDortluSayi == false)
      							{
      								if (kullanildiMi[k] == true)
      								{
      									continue;
      								}
      								if (i == k || j == k)
      								{
      									continue;
      								}
      								for (var m = 0; m <= 4; m++)
      								{
      									if (bulunduMuDortluSayi == false)
      									{

      									}
      									if (kullanildiMi[m] == true)
      									{
      										continue;
      									}
      									if (i == m || j == m || k == m)
      									{
      										continue;
      									}
      									if (geciciMi == false)
      									{
      										sonucu2 = rastgeleRakamlar[i] + rastgeleRakamlar[j] + rastgeleRakamlar[k]+rastgeleRakamlar[m];
      										if (sonucu2 == ArananSayi)
      										{
      											kullanildiTrue(i, j, k,m);
      											icIslemler = rastgeleRakamlar[i] + " + " + rastgeleRakamlar[j] + " + " + rastgeleRakamlar[k] +" + "+rastgeleRakamlar[m]+ " = " + sonucu2; 
      											if (bul(rastgeleRakamlar, (sonucu2)) == true)
      											{
      												bulunduMuDortluSayi = true;
                                                      document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                                      break;
                                                  }
                                                  else
                                                  {
                                                  	kullanildiFalse(i, j, k,m);

                                                   }
                                               }
                                               sonucu2 = rastgeleRakamlar[i] + rastgeleRakamlar[j] + rastgeleRakamlar[k] - rastgeleRakamlar[m];
                                               if (sonucu2 == ArananSayi)
                                               {
                                               	kullanildiTrue(i, j, k, m);
                                               	icIslemler = rastgeleRakamlar[i] + " + " + rastgeleRakamlar[j] + " + " + rastgeleRakamlar[k] + " - " + rastgeleRakamlar[m] + " = " + sonucu2; ;
                                               	if (bul(rastgeleRakamlar, (sonucu2)) == true)
                                               	{
                                               		bulunduMuDortluSayi = true;
                                                        document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                                        break;
                                                    }
                                                    else
                                                    {
                                                    	kullanildiFalse(i, j, k, m);
                                                  }
                                              }
                                              sonucu2 = rastgeleRakamlar[i] + rastgeleRakamlar[j] - rastgeleRakamlar[k] - rastgeleRakamlar[m];
                                              if (sonucu2 == ArananSayi)
                                              {
                                              	kullanildiTrue(i, j, k, m);
                                              	icIslemler = rastgeleRakamlar[i] + " + " + rastgeleRakamlar[j] + " - " + rastgeleRakamlar[k] + " - " + rastgeleRakamlar[m] + " = " + sonucu2; ;
                                              	if (bul(rastgeleRakamlar, (sonucu2)) == true)
                                              	{
                                              		bulunduMuDortluSayi = true;
                                                       document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                                       break;
                                                   }
                                                   else
                                                   {
                                                   	kullanildiFalse(i, j, k, m);
                                                    }
                                                }
                                                sonucu2 = rastgeleRakamlar[i] - rastgeleRakamlar[j] - rastgeleRakamlar[k] - rastgeleRakamlar[m];
                                                if (sonucu2 == ArananSayi)
                                                {
                                                	kullanildiTrue(i, j, k, m);
                                                	icIslemler = rastgeleRakamlar[i] + " - " + rastgeleRakamlar[j] + " - " + rastgeleRakamlar[k] + " - " + rastgeleRakamlar[m] + " = " + sonucu2; ;
                                                	if (bul(rastgeleRakamlar, (sonucu2)) == true)
                                                	{
                                                		bulunduMuDortluSayi = true;
                                                        document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                                        break;
                                                    }
                                                    else
                                                    {
                                                    	kullanildiFalse(i, j, k, m);
                                                    }
                                                }
                                                sonucu2 = rastgeleRakamlar[i] * rastgeleRakamlar[j] + rastgeleRakamlar[k] + rastgeleRakamlar[m];
                                                if (sonucu2 == ArananSayi)
                                                {
                                                	kullanildiTrue(i, j, k, m);
                                                	icIslemler = rastgeleRakamlar[i] + " * " + rastgeleRakamlar[j] + " + " + rastgeleRakamlar[k] + " + " + rastgeleRakamlar[m] + " = " + sonucu2; ;
                                                	if (bul(rastgeleRakamlar, (sonucu2)) == true)
                                                	{
                                                		bulunduMuDortluSayi = true;
                                                        document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                                        break;
                                                    }
                                                    else
                                                    {
                                                    	kullanildiFalse(i, j, k, m);
                                                   }
                                               }
                                               sonucu2 = rastgeleRakamlar[i] * rastgeleRakamlar[j] + rastgeleRakamlar[k] - rastgeleRakamlar[m];
                                               if (sonucu2 == ArananSayi)
                                               {
                                               	kullanildiTrue(i, j, k, m);
                                               	icIslemler = rastgeleRakamlar[i] + " * " + rastgeleRakamlar[j] + " + " + rastgeleRakamlar[k] + " - " + rastgeleRakamlar[m] + " = " + sonucu2; ;
                                               	if (bul(rastgeleRakamlar, (sonucu2)) == true)
                                               	{
                                               		bulunduMuDortluSayi = true;
                                                        document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                                        break;
                                                    }
                                                    else
                                                    {
                                                    	kullanildiFalse(i, j, k, m);
                                                    }
                                                }
                                                sonucu2 = rastgeleRakamlar[i] * rastgeleRakamlar[j] * rastgeleRakamlar[k] - rastgeleRakamlar[m];
                                                if (sonucu2 == ArananSayi)
                                                {
                                                	kullanildiTrue(i, j, k, m);
                                                	icIslemler = rastgeleRakamlar[i] + " * " + rastgeleRakamlar[j] + " * " + rastgeleRakamlar[k] + " - " + rastgeleRakamlar[m] + " = " + sonucu2; ;
                                                	if (bul(rastgeleRakamlar, (sonucu2)) == true)
                                                	{
                                                		bulunduMuDortluSayi = true;
                                                       document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                                       break;
                                                   }
                                                   else
                                                   {
                                                   	kullanildiFalse(i, j, k, m);
                                                }
                                            }
                                            sonucu2 = rastgeleRakamlar[i] * rastgeleRakamlar[j] * rastgeleRakamlar[k] + rastgeleRakamlar[m];
                                            if (sonucu2 == ArananSayi)
                                            {
                                            	kullanildiTrue(i, j, k, m);
                                            	icIslemler = rastgeleRakamlar[i] + " * " + rastgeleRakamlar[j] + " * " + rastgeleRakamlar[k] + " + " + rastgeleRakamlar[m] + " = " + sonucu2; ;
                                            	if (bul(rastgeleRakamlar, (sonucu2)) == true)
                                            	{
                                            		bulunduMuDortluSayi = true;
                                                        document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                                        break;
                                                    }
                                                    else
                                                    {
                                                    	kullanildiFalse(i, j, k, m);
                                                   }
                                               }
                                               sonucu2 = rastgeleRakamlar[i] * rastgeleRakamlar[j] * rastgeleRakamlar[k] * rastgeleRakamlar[m];
                                               if (sonucu2 == ArananSayi)
                                               {
                                               	kullanildiTrue(i, j, k, m);
                                               	icIslemler = rastgeleRakamlar[i] + " * " + rastgeleRakamlar[j] + " * " + rastgeleRakamlar[k] + " * " + rastgeleRakamlar[m] + " = " + sonucu2; ;
                                               	if (bul(rastgeleRakamlar, (sonucu2)) == true)
                                               	{
                                               		bulunduMuDortluSayi = true;
                                                       document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                                       break;
                                                   }
                                                   else
                                                   {
                                                   	kullanildiFalse(i, j, k, m);
                                                   }
                                               }
                                           }
                                           else
                                           {
                                           	islemler = bolum + " * " + onunKatiSayi + " = " + sonuc;
                                           	sonucu2 = rastgeleRakamlar[i] + rastgeleRakamlar[j] + rastgeleRakamlar[k]+rastgeleRakamlar[m];
                                           	if (bulunmaKontrol(sonuc + sonucu2) == true)
                                           	{
                                                   document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                                   document.getElementById('islemMetinleri').innerHTML+=islemler+"<br>";
                                                   islemler = sonuc + " + " + rastgeleRakamlar[i] + " + " + rastgeleRakamlar[j] + " + " + rastgeleRakamlar[k] + " = " + (sonuc + sonucu2);
                                                document.getElementById('islemMetinleri').innerHTML+=islemler+"<br>";
                                                bulunduMuDortluSayi = true;
                                                kullanildiTrue(i, j, k);
                                                break;
                                            }
                                            else if (bulunmaKontrol(sonuc - sonucu2) == true)
                                            {
                                                   document.getElementById('islemMetinleri').innerHTML+=icIslemler+"<br>";
                                                   document.getElementById('islemMetinleri').innerHTML+=islemler+"<br>";
                                                    islemler = sonuc + " - " + rastgeleRakamlar[i] + " - " + rastgeleRakamlar[j] + " - " + rastgeleRakamlar[k] + " = " + (sonuc - sonucu2);
                                                    document.getElementById('islemMetinleri').innerHTML+=islemler+"<br>";
                                                    bulunduMuDortluSayi = true;
                                                    kullanildiTrue(i, j, k);
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

            }
            return bulunduMuDortluSayi;
        }


        function besliKombinasyon(rastgeleRakamlar, ArananSayi, geciciMi)//iki basamaklı sayı ve beş tane tek basamaklı sayı kullanarak bulmaya çalışıyor
        {
        	var bulunduMuBesliSayi = false;
        	islemler = "";
        	var sonuc=0;
        	for (var i = 0; i < 4; i++)
        	{
        		sonuc += rastgeleRakamlar[i];
        	}		
        	if (sonuc+rastgeleRakamlar[4]==ArananSayi)
        	{
				kullanildiTrue(0,1,2,3,4);
        		if (bul(rastgeleRakamlar,sonuc+rastgeleRakamlar[4])==true)
        		{
        			islemler = rastgeleRakamlar[0] + " + " + rastgeleRakamlar[1] + " + " + rastgeleRakamlar[2] + " + " + rastgeleRakamlar[3] + " + " + rastgeleRakamlar[4] + " = " + (sonuc + rastgeleRakamlar[4]);
                   // listBox1.Items.Add(islemler);
                   document.getElementById('islemMetinleri').innerHTML+=islemler+"<br>";
                   bulunduMuBesliSayi = true;					
               }
			   else
				   kullanildiFalse(0,1,2,3,4);
           }
           if (sonuc - rastgeleRakamlar[4] == ArananSayi)
           {
			   kullanildiTrue(0,1,2,3,4);
           	if (bul(rastgeleRakamlar, sonuc + rastgeleRakamlar[4])==true)
           	{
           		islemler = rastgeleRakamlar[0] + " + " + rastgeleRakamlar[1] + " + " + rastgeleRakamlar[2] + " + " + rastgeleRakamlar[3] + " - " + rastgeleRakamlar[4] + " = " + (sonuc - rastgeleRakamlar[4]);
                   // listBox1.Items.Add(islemler);
                   document.getElementById('islemMetinleri').innerHTML+=islemler+"<br>";
                   bulunduMuBesliSayi = true;
				kullanildiFalse(0,1,2,3,4);
            }
			else
				kullanildiFalse(0,1,2,3,4);
           }
           if (sonuc * rastgeleRakamlar[4] == ArananSayi)
           {
			   kullanildiTrue(0,1,2,3,4);
           	if (bul(rastgeleRakamlar, sonuc + rastgeleRakamlar[4])==true)
           	{
           		islemler ="( "+ rastgeleRakamlar[0] + " + " + rastgeleRakamlar[1] + " + " + rastgeleRakamlar[2] + " + " + rastgeleRakamlar[3] +" )"+ " * " + rastgeleRakamlar[4] + " = " + (sonuc + rastgeleRakamlar[4]);
                   // listBox1.Items.Add(islemler);
                   document.getElementById('islemMetinleri').innerHTML+=islemler+"<br>";
                   bulunduMuBesliSayi = true;
               }
			   else
				   kullanildiFalse(0,1,2,3,4);
           }
           return bulunduMuBesliSayi;
       }


       function bul(rastgeleRakamlar, geciciBolum)
       {
       	var bulIslemler = "";
       	var gecici2;
       	var b = false;
            var carpim = geciciBolum * onunKatiSayi;//bölüm ile 2 basamaklı sayıyı çarpıyor
            if (carpim < bulunacakSayi)//istenen sayıdan küçükse. burda amaç eksili kalan almamak
            {
            	gecici2 = bulunacakSayi - carpim;
            }
            else
            {
            	gecici2 = carpim - bulunacakSayi;
            }
            if (bulunmaKontrol(carpim) == true)//alınan değerin istenen sayıya eşit olup olmadığı kontrol ediliyor
            {
            	bulIslemler = geciciBolum + " * " + onunKatiSayi + " = " + carpim;
               // listBox1.Items.Add(bulIslemler);
               document.getElementById('islemMetinleri').innerHTML+=bulIslemler+"<br>";

               b = true;
           }
           else if (tekSayi(rastgeleRakamlar, gecici2, true) == true)
           {
           	b = true;
           }

           else if ((ikiliKombinasyon(rastgeleRakamlar, gecici2, true) == true))
           {
           	b = true;
           }
           else if ((ucluKombinasyon(rastgeleRakamlar, gecici2, true) == true))
           {
           	b = true;
           }
           else if ((dortluKombinasyon(rastgeleRakamlar, gecici2, true) == true))
           {
           	b = true;
           }
           return b;
       }

