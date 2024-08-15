import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth2Service } from "../auth2.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})



export class LoginPage implements OnInit {

  constructor(private fb: FormBuilder, private route: Router, private ath2: Auth2Service) {

  }
  formlogin = this.fb.group({
    email: this.fb.control("", [Validators.required]),
    contraseña: this.fb.control("", [Validators.required])
  })



  async capturar() {
    let data = this.formlogin.value

    try {
      let config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }


      let consulta = await (await fetch("http://127.10.10.10:5100/login", config)).json()

      if (consulta.status == 200) {
        this.ath2.login()
        this.route.navigate(['/home']);
        localStorage.setItem('token', consulta.message)
      } else {
        alert(consulta.message)
      }

    } catch (error) {
      console.log(error);

    }

  }


  ngOnInit() {
  }

}
