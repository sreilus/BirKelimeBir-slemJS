  function Kronometre(Id, Saniye){

      this.gercekSaniye = Saniye || 0;
      this.saniye = Saniye || 0;
      this.interval;

      this.baslat = function(){
        this.sayacElem = document.getElementById(Id);
        if ( !this.interval ){
          this.sayac();
          this.interval = setInterval(this.sayac.bind(this), 1000);
      }
  };

  this.sayac = function(){

    var toplamSaniye = this.saniye;
    var saat = parseInt( toplamSaniye / 3600 ) % 24;
    var dakika = parseInt( toplamSaniye / 60 ) % 60;
    var saniye = toplamSaniye % 60;

    this.sayacElem.innerHTML = (saat < 10 ? "0" + saat : saat) + ":" + (dakika < 10 ? "0" + dakika : dakika) + ":" + (saniye  < 10 ? "0" + saniye : saniye);

    this.saniye += 1;

};

this.duraklat = function(){
    clearInterval(this.interval);
    this.interval = null;
};

this.bitir = function(){
    this.duraklat();
    this.sayacElem.innerHTML = '';
    this.saniye = this.gercekSaniye;
};

}

var Kronometre = new Kronometre('sayac');