const HelloVueApp = {
    data() {
      return {
        message: 'Текст новой записи'
      }
    }
  }
  
  const ButtonApp = {
    data() {
      return {
        simb: 0,
        max : 100,
        i: 0,
        ifAnyZapisi : false,
        message: 'Добавить',
        new_zapis : '',
        back : 'white',
        allow : 'true'
      }
    },
    methods: {
      count_simb() {
        this.simb = text.value.length;
        if (this.max - this.simb < 10 && this.max - this.simb >= 0) {
          this.back = 'yellow';
          this.allow = 'true'
        }
        else if (this.max - this.simb < 0) {
          this.back = 'red';
          this.allow = 'false';
        }
        else {
          this.back = 'white';
          this.allow = 'true';
        }
      },
      add_zapis() {
        if(this.back=='red') alert("Превышен лимит символов")
        else {
          this.i++;
          this.ifAnyZapisi = true;
          let div = document.createElement('div');
          div.className = "new_zapis";
          let div2 = document.createElement('div');
          div2.textContent = this.new_zapis;
          div2.className = "div2";
          let time = document.createElement('div');
          time.innerHTML = new Date().toLocaleString()
          time.className = "time";
          comm.append(div);
          div.append(div2);
          div.append(time);
          this.new_zapis = "";
        }
        
      }
    }
  }
  Vue.createApp(HelloVueApp).mount('#hello-vue')
  Vue.createApp(ButtonApp).mount('#new_zapisi')
  
  var comm = document.getElementById("comments");
  var text = document.getElementById("new_zapis");
  