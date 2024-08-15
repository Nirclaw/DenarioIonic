import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taskedit',
  templateUrl: './taskedit.page.html',
  styleUrls: ['./taskedit.page.scss'],
})
export class TaskeditPage implements OnInit {
  task: any;
  datos: any;

  constructor(private route: Router, private fb: FormBuilder) { }

  formedit = this.fb.group({
    titulo: this.fb.control("", Validators.required),
    descripcion: this.fb.control("", Validators.required),
    fecha_vencimiento: this.fb.control("", Validators.required),
    fechainicio: this.fb.control("", Validators.required),
    estado: this.fb.control("", Validators.required)
  });

  retornar() {
    this.route.navigate(["/home"])
  }

  async detele() {
    let token = localStorage.getItem('token')

    let data = {
      id: this.datos.id
    }

    try {
      let config = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        },
        body: JSON.stringify(data)
      }


      let consulta = await (await fetch("http://127.10.10.10:5100/tareas/delete", config)).json()


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
  async actualizar() {


    let data = this.formedit.value


    Object.assign(data, {
      id: this.datos.id
    })


    let token = localStorage.getItem('token')
    console.log(data);


    try {
      let config = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        },
        body: JSON.stringify(data)
      }


      let consulta = await (await fetch("http://127.10.10.10:5100/tareas/update", config)).json()
      console.log(consulta.message);


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

  ngOnInit() {
    const navigate = this.route.getCurrentNavigation();
    if (navigate?.extras?.state) {
      this.task = navigate.extras.state;
      this.datos = this.task;

      this.formedit.patchValue({
        titulo: this.datos?.titulo || '',
        descripcion: this.datos?.descripcion || '',
        fecha_vencimiento: this.datos?.fecha_vencimiento || '',
        estado: this.datos?.estado || ""
      });
    }
  }
}
