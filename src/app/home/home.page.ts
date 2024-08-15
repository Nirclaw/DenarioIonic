import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route: Router) { }
  cli() {
    this.route.navigate(['/newtask']);
  }


  salir() {
    localStorage.clear()
    this.route.navigate(['/login'])
  }

  ngOnInit() {
    this.consulta()
  }

  vertask(task: object) {
    this.route.navigate(["/taskedit"], {
      state: task
    })

  }

  async doRefresg(event: any) {

    setTimeout(async () => {
      let token = localStorage.getItem('token')

      try {
        let config = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
          }
        }

        let consulta = await (await fetch("http://127.10.10.10:5100/tareas", config)).json()
        this.datos = consulta.message
      } catch (error) {
        console.log(error)
      }

      event.target.complete();
    }, 2000);

  }

  datos: any
  async consulta() {
    let token = localStorage.getItem('token')

    try {
      let config = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        }
      }

      let consulta = await (await fetch("http://127.10.10.10:5100/tareas", config)).json()
      this.datos = consulta.message
    } catch (error) {
      console.log(error)
    }
  }



}
