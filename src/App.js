import React from 'react';
import './App.css';

function App() {

  function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  return (
    <div className="App">
      <form action=""> 
        <div class="form-header primary-color">
          <h3 class="font-weight-500 my-2 py-1"><i class="fas fa-plus"></i> Kayıt Formu </h3>
        </div>

        <div class="mb-3">
          <label for="isim" >İsim</label>
          <input type="name"  id="isim" placeholder="İsminizi Giriniz" required/>
        </div>

        <div class="mb-3">
          <label for="soyisim" >Soyisim</label>
          <input type="surname" id="soyisim" placeholder="Soyisminizi Giriniz" required/>
        </div>

        <div class="mb-3">
          <span id="basic-addon1">@example</span>
          <input type="kullanici_adi"  placeholder="Kullanıcı Adınızı Giriniz" aria-label="Username" required/>
        </div>

        <div class="mb-3">
          <i class="fas fa-envelope prefix grey-text "></i>
          <label for="email">Email address</label>
          <input type="email" id="email" placeholder="name@example.com" required/>
        </div>

        <div>
          <label for="exampleDataList">Şehri seçiniz</label>
          <input  list="datalistOptions" id="exampleDataList" placeholder="Type to search..." required/>
          <datalist id="datalistOptions">
            <option value="İstanbul"/>
            <option value="Ankara"/>
            <option value="İzmir"/>
            <option value="Adana"/>
            <option value="Aydın"/>
            <option value="Bursa"/>
            <option value="Trabzon"/>
            <option value="Diğer"/>
          </datalist>
        </div>

        <div>
          <i class="fas fa-lock prefix grey-text"></i>
          <label for="password">Şifreyi Giriniz</label>
          <input type="password" id="password" name="password"value="FakePSW" required />
          <br/>
          <input type="checkbox" onclick="myFunction()"/>Şifreyi Göster
          
        </div>

        <div >
          <i class="fas fa-lock prefix grey-text"></i>
          <label for="password" >Şifreyi Tekrar Giriniz</label>
          <input type="password" id="password" name="password" required/>
          
        </div>

        <div class="text-center">
          <button type="submit" class="btn primary-color  btn-lg" >Hesap Oluştur</button>
        </div>

      </form>
    </div>
  );
}

export default App;
