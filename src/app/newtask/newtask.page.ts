import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth2Service } from '../auth2.service';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.page.html',
  styleUrls: ['./newtask.page.scss'],
})
export class NewtaskPage implements OnInit {

  constructor(private fb: FormBuilder, private route: Router, private ath2: Auth2Service) { }

  ngOnInit() {
  }

  fecha: string = new Date().toISOString()
  formnewtask = this.fb.group({
    titulo: this.fb.control("", Validators.required),
    descripcion: this.fb.control("", Validators.required),
    fecha_vencimiento: [this.fecha, Validators.required]
  })

  retornar() {
    this.route.navigate(["/home"])
  }

  async capturar() {
    let data = this.formnewtask.value

    let token = localStorage.getItem('token')


    try {
      let config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        },
        body: JSON.stringify(data)
      }


      let consulta = await (await fetch("http://127.10.10.10:5100/tareas/new", config)).json()

      if (consulta.status == 200) {
        alert(consulta.message)
        this.route.navigate(['/home']);
      } else {
        alert(consulta.message)
      }

    } catch (error) {
      console.log(error);

    }

  }
}
